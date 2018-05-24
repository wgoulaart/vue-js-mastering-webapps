<template>
  <div class="">
      Type: {{ type }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: this.$route.params.type,
        items: []
      }
    },
    watch: {
      '$route': 'change'
    },
    methods: {
      fetchItems() {
          this.items = []
          let initial_ids = [13, 18, 22]

          for (let i in initial_ids ) {
            let id = initial_ids[i]

            fetch(`https://swapi.co/api/${this.type}/${id}/`, {
              method: "GET"
            })
            .then(reponse => response.json())
            .then(json => this.items.push(json))
          }
      }
    },
    created() {
      this.fetchItems()
    }
  }
</script>
