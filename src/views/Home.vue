
<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      <p>add facebook button right here and rename the rest of these stuff</p>
      <div
        class="fb-login-button"
        data-max-rows="1"
        data-size="large"
        data-button-type="continue_with"
        data-show-faces="false"
        data-auto-logout-link="false"
        data-use-continue-as="false"
        data-scope="{{getScope()}}"
      >></div>
    </div>
  </div>
</template>

<script>
import * as fb from "@./services/facebook";

export default {
  methods: {
    getScope() {
      return fb.getScopes();
    }
  }
};
</script>