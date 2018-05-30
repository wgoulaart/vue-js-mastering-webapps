<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <h4 class="title"> {{ item.name }}</h4>
        <div v-for="(value, key, index) in item">
          <p v-if="index <= 5" class="subtitle">
            <strong>{{ key }}</strong> {{ value }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
