<template>
  <div class="home">
    <div class="jumbotron">

      <h3 class="">Daily Exercise Checkin!</h3>
      <hr class="my-4">
    <form class="form-horizontal">
        <!-- Form Name -->

        <!-- Multiple Radios -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="radios">Type of Exercise</label>
          <div class="col-md-4">
            <div class="radio">
              <label for="radios-0">
                <input type="radio" name="radios" id="radios-0" value="Running" checked="checked">
                Running
              </label>
            </div>
            <div class="radio">
              <label for="radios-1">
                <input type="radio" name="radios" id="radios-1" value="Walking"> Walking
              </label>
            </div>
          </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="textinput">Distance</label>
          <div class="col-md-4">
            <input
              id="textinput"
              name="textinput"
              type="text"
              placeholder="13miles"
              class="form-control input-md"
            >
          </div>
        </div>

        <!-- Button -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="singlebutton"></label>
          <div class="col-md-4">
            <button id="singlebutton" name="singlebutton" class="btn btn-success">submit</button>
          </div>
        </div>
    </form>
  </div>
    </div>
</template>

<script>

</script>