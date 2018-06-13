<template>
  <div class="column">
    <div class="joke-card">
      <div class="card-content">
        <h4 class="title is-4"> {{joke.setup}} </h4>
        <p class="subtitle"> {{joke.punchline}} </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['joke']
    }
</script>
