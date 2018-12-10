<template>
  <div class="home">
    <div class="jumbotron">
    <form class="form-horizontal">
      <fieldset>
        <!-- Form Name -->
        <legend>Daily Exercise Checkin!</legend>

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
      </fieldset>
    </form>
  </div>
    </div>
</template>

<script>

</script>