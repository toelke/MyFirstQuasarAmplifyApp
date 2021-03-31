<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat to="/" label="Photo App"/>
<q-space/>
          <div v-if="loggedIn">
            {{ user }}
            <q-btn @click="logout()" flat :label="$t('logout')" class="right" />
          </div>
          <div>
            <q-btn-dropdown icon="flag" flat>
              <q-list v-for="locale in $i18n.availableLocales" :key="locale">
                <q-item clickable v-close-popup @click="$i18n.locale = locale">
                  <q-item-section>
                    <q-item-label>{{ $t(locale) }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container v-if="!loggedIn">
      <h3 style="text-align: center; padding-left: inherit;" class="absolute-top q-pa-md">
        {{ $t("welcome") }}
      </h3>
      <amplify-authenticator
        :initial-auth-state="authenticatorState"
        username-alias="email"
        :key="$i18n.locale"
      >
        <amplify-sign-up
          slot="sign-up"
          username-alias="email"
          :form-fields.prop="formFields"
        ></amplify-sign-up>
      </amplify-authenticator>
    </q-page-container>
    <q-page-container v-if="loggedIn">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { auth_logout } from "src/services/cloud";
import "@aws-amplify/ui-vue";
import { Translations } from "@aws-amplify/ui-components";

function updateTranslations(t) {
  for (const item in Translations) {
    Translations[item] = this.$t(`auth.${item}`);
  }
}

export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      formFields: [{ type: "email" }, { type: "password" }],
    };
  },
  created() {
    this.$watch("$i18n.locale", updateTranslations, { immediate: true });
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user", "authState"]),
    authenticatorState() {
      if (this.authState == "signin") return "signin";
      if (this.authState == "forgotpassword") return "forgotpassword";
      return "signup";
    },
  },
  methods: {
    logout: auth_logout,
  },
};
</script>
