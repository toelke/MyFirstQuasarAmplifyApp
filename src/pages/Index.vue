<template>
  <q-page>
    <div class="flex flex-left">
      <div class="row fit q-pa-lg q-gutter-sm">
        <div class="col-9">
        </div>
        <div class="col-2">
          <q-input dense v-model="newAlbumName" :label="$t('albumname')" />
        </div>
        <div class="col">
          <q-btn
            @click="
              createAlbum(newAlbumName);
              newAlbumName = '';
            "
            :label="$t('createnew')"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-evenly">
      <div class="row fit q-pa-md q-gutter-sm">
        <q-card
          class="col-grow col-lg-2 col-md-2 col-sm-3 col-xs-6 items-stretch"
          v-for="album_id in Object.keys(albums).sort((a, b) => albums[a].name > albums[b].name)"
          v-bind:key="album_id"
        >
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div style="absolute-bottom">
              <div class="text-h6">{{ albums[album_id].name }}</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn :to="`/album/${album_id}`" flat>{{$t('open')}}</q-btn>
            <q-btn
              @click="
                $q.dialog({
                  title: $t('reallydelete'),
                  message: $t('reallydeletealbum', {album: albums[album_id].name}),
                  cancel: true,
                  persistent: true,
                }).onOk(() => deleteAlbum(album_id))
              "
              flat
              >{{$t('delete')}}</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PageIndex",
  mounted() {
    this.loadAlbums();
  },
  data() {
    return { newAlbumName: "" };
  },
  computed: {
    ...mapState("photos", ["albums"]),
  },
  methods: {
    ...mapActions("photos", ["loadAlbums", "createAlbum", "deleteAlbum"]),
  },
};
</script>
