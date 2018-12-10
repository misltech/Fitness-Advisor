<template>
  <div class="home">
    <div class="jumbotron">
      <form class="form-horizontal">
        <!-- <fieldset> -->
        <!-- Search input-->
        <div class="form-group">
          <label class="col-md-4 control-label" for="searchinput">Search for a recipe</label>
          <div class="col-md-4">
            <input
              v-model="criteria"
              id="searchinput"
              name="searchinput"
              type="search"
              placeholder="chicken"
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
              class="btn btn-primary"
            >submit</button>
          </div>
        </div>

        <!-- </fieldset> -->
      </form>
    </div>

    <div class="jumbotron">
      <div v-for="w in this.foods.hits" :key="w" class="card" style="width: 18rem;">
        <img class="card-img-top" :src="w.recipe.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{w.recipe.label}}</h5>
          <p class="card-text">Ingredients: </p>
          <p v-for="i in w.recipe.ingredientLines" :key="i"  class="card-text">{i}</p>
          <a href="'${w.recipe.url}'" class="btn btn-primary"></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import * as recipelookup from '@/services/edamam';

export default {
  data() {
    return {
      foods: [],
      criteria: ""
    };
  },
  methods: {
    getResults(){
        recipelookup.fetchData(this.criteria).then(x => this.foods = x);
  }
  }
 
} 
      

</script>
