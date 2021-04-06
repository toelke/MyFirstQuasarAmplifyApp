<template>
  <q-page>
    <div class="flex flex-left">
      <div class="row fit q-pa-lg q-gutter-sm">
        <div class="col">
          {{ album.name }}
        </div>
        <div class="col-8"></div>
        <div class="col-2">
          <q-file
            style="max-width: 300px"
            v-model="filesImages"
            :label="$t('uploadnew')"
            multiple
            dense
            clearable
            accept=".jpg, image/*"
          />
        </div>
        <div class="col">
          <q-btn @click="upload" :label="$t('upload')" />
        </div>
        <q-dialog
          v-model="upload_in_progress"
          persistent
          transition-show="scale"
          transition-hide="scale"
        >
          <q-card style="width: 300px">
            <q-card-section>
              <div class="text-h6">Uploading...</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-linear-progress
                class="q-mt-md"
                v-for="item in progresses"
                :key="item.id"
                :value="item.progress"
                size="25px"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="white"
                    text-color="accent"
                    :label="item.name"
                  />
                </div>
              </q-linear-progress>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <div class="flex justify-evenly">
      <div class="row fit q-pa-md q-gutter-sm">
        <q-card
          class="col-grow col-lg-2 col-md-2 col-sm-3 col-xs-6 items-stretch"
          v-for="photo_id in Object.keys(loaded_photos).sort(
            (a, b) => loaded_photos[a].name > loaded_photos[b].name
          )"
          v-bind:key="photo_id"
        >
          <q-img :src="loaded_photos[photo_id].url">
            <div style="absolute-bottom">
              <div class="text-h6">{{ loaded_photos[photo_id].name }}</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn
              @click="
                $q.dialog({
                  title: $t('reallydelete'),
                  message: $t('reallydeletephoto', {
                    photo: loaded_photos[photo_id].name
                  }),
                  cancel: true,
                  persistent: true
                }).onOk(() => deleteP(photo_id))
              "
              flat
              >{{ $t("delete") }}</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createPhoto } from "src/graphql/mutations";
import { v4 as uuid } from "uuid";
import awsconfig from '../aws-exports';

export default {
  name: "Album",
  async mounted() {
    this.id = this.$route.params.id;
    this.album = await this.getAlbum(this.id);
  },
  data() {
    return {
      id: "",
      album: { name: "", photos: [] },
      filesImages: [],
      loaded_photos: {},
      upload_in_progress: false,
      progresses: {}
    };
  },
  watch: {
    album: async function(n, o) {
      const old_loaded_photos = { ...this.loaded_photos };
      this.loaded_photos = {};
      let promises = [];
      const cap_this = this;
      for (const photo of n.photos.items) {
        if (photo.id in old_loaded_photos)
          this.$set(this.loaded_photos, photo.id, old_loaded_photos[photo.id]);
        else
          promises.push(
            Storage.get(photo.fullsize.key, { level: 'protected' }).then(
              function(url) {
                cap_this.$set(cap_this.loaded_photos, photo.id, {
                  name: photo.name,
                  url
                });
              }
            )
          );
      }
      await Promise.all(promises);
    }
  },
  computed: {
    ...mapState("photos", ["albums"]),
  },
  methods: {
    ...mapActions("photos", ["getAlbum", "createPhoto", "deletePhoto"]),
    async deleteP(id) {
      await this.deletePhoto(id);
      this.album = await this.getAlbum(this.id);
    },
    async upload() {
      this.upload_in_progress = true;
      const {
        aws_user_files_s3_bucket_region: region,
        aws_user_files_s3_bucket: bucket
      } = awsconfig;
      var promises = [];
      const cap_this = this;
      for (const file of this.filesImages) {
        const id = uuid();
        this.$set(this.progresses, id, { name: file.name, progress: 0 });
        const extension = file.name.substr(file.name.lastIndexOf('.') + 1);
        const key = `ìmages/${id}.${extension}`;
        promises.push(
          Storage.put(key, file, {
            level: 'protected',
            contentType: file.mimeType,
            metadata: { album: cap_this.id, id },
            progressCallback(progress) {
              cap_this.progresses[id].progress =
                progress.loaded / progress.total;
            }
          }).then(function() {
            cap_this.progresses[id].progress = 1;
            return API.graphql(
              graphqlOperation(createPhoto, {
                input: {
                  id: id,
                  name: file.name,
                  fullsize: {
                    region,
                    bucket,
                    key: key
                  },
                  photoAlbumId: cap_this.id
                }
              })
            );
          })
        );
      }
      cap_this.filesImages = [];
      await Promise.all(promises)
        .then(() => cap_this.getAlbum(cap_this.id))
        .then(album => {
          cap_this.album = album;
        });
      this.upload_in_progress = false;
      this.progresses = {};
    }
  }
};
</script>
