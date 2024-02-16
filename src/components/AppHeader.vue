<script>
import AppPrices from './AppPrices.vue';

export default {
  name: 'AppHeader',
  data() {
    return {};
  },
  components: { AppPrices }
}
</script>

<template>
  <header class="position-relative">

    <AppPrices />

    <img width="200" src="../assets/img/logo.png" alt="logo">


  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  height: 35vh;
  background-color: $primary_light;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>