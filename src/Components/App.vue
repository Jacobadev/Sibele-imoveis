<template>
  <div>
    <app-header />
    <app-main />
    <cards />
  </div>
</template>

<script>
import AppHeader from "./Header/AppHeader.vue";
import Cards from "./Cards.vue";
import AppMain from './AppMain.vue';

export default {
  name: "App",
   components: {
    AppHeader,
    AppMain,
    Cards,
  },
}; 
</script>
