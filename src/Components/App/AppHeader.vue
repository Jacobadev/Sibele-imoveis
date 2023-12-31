<template>
  <div>
    <HeaderContact />
      <HeaderMenu />
  </div>
</template>

<script>
import HeaderMenu from "../Header/HeaderMenu.vue";
import HeaderContact from "../Header/HeaderContact.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderMenu,
    HeaderContact,
  },
};
</script>
