<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Photo App
        </q-toolbar-title>
        <div class="absolute-right" v-if="loggedIn">
          {{ user }}
          <q-btn @click="logout()" flat label="LogOut" class="right" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    </q-drawer>

    <amplify-authenticator v-if="!loggedIn" username-alias="email">
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
      ></amplify-sign-up>
    </amplify-authenticator>

    <q-page-container v-if="loggedIn">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { auth_logout } from "src/services/cloud";
import "@aws-amplify/ui-vue";

export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      formFields: [{ type: "email" }, { type: "password" }],
    };
  },
  computed: mapState("auth", ["loggedIn", "user"]),
  methods: {
    logout: auth_logout,
  },
};
</script>
