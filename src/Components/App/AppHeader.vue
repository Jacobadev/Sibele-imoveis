<template>
  <div>
    <HeaderContact />
      <HeaderMenu />
  </div>
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";
import HeaderContact from "./HeaderContact.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderMenu,
    HeaderContact,
  },
};
</script>
