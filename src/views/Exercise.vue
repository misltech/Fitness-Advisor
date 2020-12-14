<template>
    <div class="">
      <h3 class>Daily Exercise Checkin!</h3>
      <hr class="my-4">
      <form class="form-horizontal">
        <!-- Form Name -->
        <!-- Multiple Radios -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="radios">Type of Exercise</label>
          <div class="col-md-4">
            <div class="radio">
              <label for="radios-0">
                <input v-model="typeofExercise" type="radio" id="radios-0" value="Running" checked="checked">
                Running
              </label>
            </div>
            <div class="radio">
              <label for="radios-1">
                <input v-model="typeofExercise" type="radio" id="radios-1" value="Walking"> Walking
              </label>
            </div>
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Distance</label>
          <div class="col-md-4">
            <input v-model = "distance"
              id="textinput"
              name="textinput"
              type="text"
              placeholder="13 miles"
              class="form-control input-md"
            >
          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="singlebutton"></label>
          <div class="col-md-4">
            <button  @click.prevent="sendExercise" id="singlebutton" name="singlebutton" class="btn btn-success">submit</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import * as storage from "@/services/storage";

export default {
  data() {
    return {
      distance: 0,
      typeofExercise: ""
    };
  },
  methods: {
    sendExercise: function(){
      if(this.typeofExercise == "Walking"){
        storage.addWalking(storage.getUserID(), this.distance);
      }
      else if(this.typeofExercise == "Running"){
        storage.addRunning(storage.getUserID(), this.distance);
      }
    }

  }
};
</script>