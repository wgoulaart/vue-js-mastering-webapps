<template>
  <div class="column">
    <div class="joke-card">
      <div class="card-content">
        <h4 class="title is-4">
          {{joke.setup}}
          <span @click="removeJoke(index)">&times</span>
        </h4>
        <p class="subtitle"> {{joke.punchline}} </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['joke', 'index'],
    methods: mapActions([
      'removeJoke'
    ])
  }
</script>
