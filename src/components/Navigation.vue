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
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >Hi, {{name}}</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/profile">My Profile</router-link>
          <router-link class="dropdown-item" to="/friends">My Friends</router-link>
          <a class="dropdown-item" v-on:click="logOut">Sign out</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
//import * as api from '@/services/storage';
import * as fb from "@/services/facebook";
//import * as route from  'router';

export default {
  data() {
    return {
      name: "",
      loggedin: false
    };
  },
  computed: {
    //computed is to check an condition using v-if

    loginStatus() {
      return this.getStatus;
    }
  },
  created: function() {
    fb.getName().then(function(res) {
      this.name = res;
    });
  },

  methods: {
    //method is to update data

    logOut: function() {
      fb.logmeout().then(this.$router.push("/"));
    },
    getName: function() {
      // eslint-disable-next-line
      fb.getName().then(function(res, rej) {
        if (!res == null) {
          this.name = res;
          //this.name = "Tahir";
        }
      });
    },
    getStatus: function() {
      fb.getStatus().then(function(resolve, reject) {
        //console.log("this is success " + resolve);
        //console.log("this is reject " + reject);
        //alert(resolve);
        if (resolve) {
          this.name = resolve;
          return true;
        } else if (reject) {
          return false;
        }
      });
    }
  }
};
</script>