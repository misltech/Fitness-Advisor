<template>
  <div class="home">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-6">
          <h4 class="">Change Name</h4>
            <hr class="my-4">
          <form class="form-horizontal">
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">Your name</label>
              <div class="col-md-7">
                <input
                  id="textinput"
                  name="textinput"
                  type="text"
                  placeholder="to be added here"
                  class="form-control input-md"
                >
              </div>
            </div>

            <!-- Button -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="singlebutton"></label>
              <div class="col-md-4">
                <button id="singlebutton" name="singlebutton" class="btn btn-success">Change Name</button>
              </div>
            </div>
          </form> 
        </div>

        <div class="col-md-6">
          <h4 class="">Change Age</h4>
            <hr class="my-4">
        <form class="form-horizontal">
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="textinput">Your age</label>
              <div class="col-md-7">
                <input
                  id="textinput"
                  name="textinput"
                  type="text"
                  placeholder="to be added here"
                  class="form-control input-md"
                >
              </div>
            </div>

            <!-- Button -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="singlebutton"></label>
              <div class="col-md-4">
                <button id="singlebutton" name="singlebutton" class="btn btn-success">Change Age</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>