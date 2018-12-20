<template>
  <div class="home">
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-center">Add Friends</h3>
            <hr class="my-4">

            <!-- <form class="form-horizontal"> -->
            <!-- <fieldset> -->
            <!-- Search input-->
            <!-- <div class="form-group">
                <label class="col-md-6 control-label" for="searchinput">Enter a friend name:</label>
                <div class="col-md-6">
                  <input
                    v-model="username"
                    id="searchinput"
                    name="searchinput"
                    type="search"
                    placeholder="tahir :)"
                    class="form-control input-md"
                  >
                </div>
            </div>-->
            <div id="app">
              <h3>Search for a friend</h3>
              <v-select style="background-color:white; width: 80%;" @search:focus="maybeLoad" :options="options"></v-select>
            </div>

            <!-- Button -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="singlebutton"></label>
              <div class="col-md-4">
                <button
                  @click.prevent="addFriend"
                  id="singlebutton"
                  name="singlebutton"
                  class="col-md-12 btn btn-success"
                >add</button>
              </div>
            </div>
            <!-- </form> -->
          </div>
          <div class="col-md-6">
            <h3 class="text-center">Your Friends</h3>
            <hr class="my-4">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody v-for="f in state.friends" :key="f">
                <tr class="table-active">
                  <td>{{f.Name}}</td>
                  <td>
                    <button
                      @click.prevent="removeFriend"
                      class="btn btn-danger"
                      v-bind:value="f.Name"
                    >Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import * as storage from "@/services/storage";
// eslint-disable-next-line
let loopTimer = null;

export default {
  data() {
    return {
      state: {
        friendname: null,
        friends: [],
        options: []
      }
    };
  },
  methods: {
    addFriend() {
      storage
        .addFriend(storage.getAccessToken(), this.friendname)
        .then(function(result) {
          if (result) {
            alert("added");
          } else {
            alert("user not added");
          }
        });
    },
    maybeLoad() {
      return this.options.length <= 0 ? this.load() : null
    },
    load() {
      this.$refs.select.toggleLoading(true)
      storage.autocomp(this.options).then(res => {this.userDatabase = res; this.$refs.select.toggleLoading(false)})
        .catch(err => console.warn(err))
    },
    getFriends() {
      storage.getFriends(null).then(x => (this.state.friends = x));
    },
    removeFriend() {
      //do nothing yet
    },
    refresh() {
      this.getFriends();
    },
    accessToken: () => storage.getAccessToken()
  },
  created() {
    //loopTimer = setInterval(this.refresh, 5000);
  }
};
</script>