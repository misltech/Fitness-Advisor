
<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to my fitness advisor!</h1>
      <p
        class="lead"
      >This is a simple web application that promotes a healthy lifestyle and connecting with friends.</p>
      <hr class="my-4">
      
      <p style="font-size: 17px;">Log in to facebook to sign up!</p>
      <div v-on:click="getScope"
        class="fb-login-button"
        data-max-rows="1"
        data-size="large"
        data-button-type="continue_with"
        data-show-faces="false"
        data-auto-logout-link="false"
        data-use-continue-as="false"
        v-bind:data-scope="state.scope"
      ></div>
    </div>
  </div>
</template>
 
 <script>
import * as fb from "@/services/facebook";
//fb.getScopes()
export default {
  data(){
      return {
          
            scope: ""
          
      }  
  },
  method:{
    getScope: function(event){
      this.scope = fb.getScopes();
    }


  }
};
</script>