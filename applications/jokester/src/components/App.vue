<template>
  <div id="app">
    <h3 class="title is-3">Let's go jokes?</h3>
    <button class="button is-primary" @click="initJokes">Add random Jokes</button>
    <button class="button is-primary" @click="addJoke">Add New Joke</button>
    <br>
    <span class="subtitle" v-for="type in types">
      <label class="checkbox">
        <input
          type="checkbox"
          class="checkbox"
          :value="type"
          v-model="checkedTypes"
          checked>
        {{ type }} &nbsp;
      </label>
    </span>

    <div class="column">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :index="index"
        :joke="joke"
        key="index"
        v-show="checkedTypes.includes(joke.type)"
      />
    </div>

  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import Joke from './Joke.vue'

  export default {
    data() {
      return {
        types: ['general', 'knock-knock', 'programming'],
        checkedTypes: ['general', 'knock-knock', 'programming'],
      }
    },
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  }
</script>
