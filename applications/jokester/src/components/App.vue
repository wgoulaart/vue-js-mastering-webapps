<template>
  <div id="app">
    <h3 class="title is-3">Let's go jokes?</h3>
    <button class="button is-primary" @click="initJokes">Add random Jokes</button>
    <div class="subtitle">
      {{ $store.state }}
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    methods: mapActions([
      'initJokes'
    ])
  }
</script>
