<template>
  <div class="column">
    <div class="card" @click="switchItem">
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
    props: ['item', 'type'],
    methods: {
      switchItem() {
        let random_id = Math.floor(Math.random() * 30) + 1
        fetch(`https://swapi.co/api/${this.type}/${random_id}`, {
          method: "GET"
        })
        .then(response => response.json())
        .then(json => this.items = json)
      }
    }
  }
</script>
