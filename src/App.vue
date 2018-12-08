<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="fitad" src="./assets/logo.jpg" id="logo">
      Fitness Advisor
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
#logo { height: 50px;}
</style>

<script>
import Nav from '@/components/Navigation.vue'
import '@/services/facebook';
export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>