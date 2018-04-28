<template>
  <div class="box" @click="switchPerson()">
    {{ person }}
  </div>

</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      person: {}
    }
  },
  methods: {
    fetchPeople(id) {
      fetch(`https://swapi.co/api/people/${id}/`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => {
          this.person = json
        })
    },
    switchPerson() {
      let random_id = Math.floor(Math.random() * 83) + 1
      this.fetchPeople(random_id)
    }
  },
  created() {
    this.fetchPeople(this.id)
  }
}
</script>
