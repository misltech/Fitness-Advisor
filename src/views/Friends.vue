<template>
  <div class="home">
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-center">Add Friends</h3>
            <hr class="my-4">
            <form class="form-horizontal">
              <!-- <fieldset> -->
              <!-- Search input-->
              <div class="form-group">
                <label class="col-md-6 control-label" for="searchinput">Enter a friend name:</label>
                <div class="col-md-6">
                  <input
                    v-model="criteria"
                    id="searchinput"
                    name="searchinput"
                    type="search"
                    placeholder="tahir :)"
                    class="form-control input-md"
                  >
                </div>
              </div>

              <!-- Button -->
              <div class="form-group">
                <label class="col-md-4 control-label" for="singlebutton"></label>
                <div class="col-md-4">
                  <button
                    @click.prevent="getResults()"
                    id="singlebutton"
                    name="singlebutton"
                    class="col-md-12 btn btn-success"
                  >add</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <h3 class="text-center">Your Friends</h3>
            <hr class="my-4">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Relationship</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-active">
                  <td>Myself :)</td>
                  <td>Friends</td>
                  <td><button class="btn btn-danger">Remove</button></td>
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

export default {
  data() {
    return {
      state: {
        userName: null,
        friends: []
      }
    };
  },
  methods: {
    addFriend(friend) {
      storage.addFriend(null, friend, null).then(() => (alert("true")));
    },
    getFriends() {
      storage.getFriends(null).then(x => (this.state.friends = x));
    },
    accessToken: () => storage.getAccessToken()
  }
};
</script>