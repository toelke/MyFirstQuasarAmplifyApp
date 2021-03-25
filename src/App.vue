<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { configCloud } from "src/services/cloud";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
export default {
  name: "App",
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.$store.commit('auth/authState', authState);
      if (authState == "signedin") {
        this.$store.commit('auth/loggedIn', true);
        this.$store.commit('auth/user', authData.username);
      } else {
        this.$store.commit('auth/loggedIn', false);
        this.$store.commit('auth/user', "");
      }
    });
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  },
  mounted() {
    configCloud();
  },
};
</script>
