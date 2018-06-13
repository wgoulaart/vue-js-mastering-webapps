<template>
  <div id="app">
    <h3 class="title is-3">Let's go jokes?</h3>
    <button class="button is-primary" @click="initJokes">Add random Jokes</button>
    <div class="column">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        key="index"
      />
    </div>
  
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import Joke from './Joke.vue'

  export default {
    methods: mapActions([
      'initJokes'
    ]),
    components: {
      Joke
    }
  }
</script>
