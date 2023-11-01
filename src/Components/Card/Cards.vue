<template>
  <div>
    <div class="grid grid-cols-4 grid-flow-row gap-4 w-11/12 mx-auto">
      <Card v-for="(card, index) in 8" :key="index" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Cards",
  components: {
    Card,
  },
  data() {
    return;
    {
    }
  },
};
</script>