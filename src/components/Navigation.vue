<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/excercise">Exercise</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/nutrition">Nutrition</router-link>
      </li>
      <li v-if="loginStatus" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Insert Name</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item"  to="/profile">My Profile</router-link>
          <router-link class="dropdown-item"  to="/friends">My Friends</router-link>
          <router-link class="dropdown-item"  to="/friends">Sign out</router-link>     
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import * as api from '@/services/storage';
import * as fb from '@/services/facebook';
import * as route from  '@/router';

export default {
  data(){
    return{
    }
  },
  
  methods: {
    loginStatus: function(){
        if(fb.getStatus()){
          return true;
        }
        else{
          return false;
        }
    },
    logOut: function(){
      fb.logmeout();
      route.go('/');
    }

    } 
  }
</script>