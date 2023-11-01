<template>
  <div>
    <app-header />
    <app-main />
    <cards />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../Header/AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    Cards,
    AppFooter,
  },
};
</script>
