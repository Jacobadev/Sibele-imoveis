<template>
  <div>
    <AppHeader/>
    <AppMain/>
    <Cards />
    
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";

import Cards from "../Card/Cards.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    Cards
  },
};
</script>
