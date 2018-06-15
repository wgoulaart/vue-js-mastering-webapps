<template>
  <div id="app">
    <h3 class="title is-3">Let's go jokes?</h3>
    <button class="button is-primary" @click="initJokes">Add random Jokes</button>
    <button class="button is-primary" @click="addJoke">Add New Joke</button>
    <div class="column">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :index="index"
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
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  }
</script>
