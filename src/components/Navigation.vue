<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/exercise">Exercise</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/nutrition">Nutrition</router-link>
      </li>
      <li  class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hi, {{this.name}}</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item"  to="/profile">My Profile</router-link>
          <router-link class="dropdown-item"  to="/friends">My Friends</router-link>
          <a class="dropdown-item" v-on:click="logOut">Sign out</a>     
        </div>
      </li>

    </ul>
  </nav>
</template>

<script>
//import * as api from '@/services/storage';
import * as fb from '@/services/facebook';
import * as route from  '@/router';

export default {
  data(){
    return{
      name: ""
    }
  },
  created(){
    this.getName();
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
    },
    getName: function(){
      this.name = fb.getName();
      this.name = "Tahir";
    }

    } 
  }
</script>