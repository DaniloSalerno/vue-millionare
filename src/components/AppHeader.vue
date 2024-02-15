<script>
export default {
  name: 'AppHeader',

  data() {
    return {

    }
  }
}
</script>

<template>
  <header class="d-flex justify-content-center align-items-center">

    <img width="200" src="../assets/img/logo.png" alt="logo">
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  height: 35vh;
  background-color: $primary_light;
}
</style>