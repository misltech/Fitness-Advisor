<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="fitad" src="./assets/logo.jpg" id="logo">
      Fitness Advisor
    </div>
    <Nav />
    
    <Body>

      <router-view />
    </Body>
    
  </div>
</template>


<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
#logo { height: 50px;}
</style>

<script>
import Nav from '@/components/Navigation.vue';
import Body from '@/components/BodySkeleton.vue';
import '@/services/facebook';
import "../node_modules/bootstrap/dist/js/bootstrap.js";

export default {
  name: 'home',
  components: {
    Nav,
    Body
  }
}
</script>