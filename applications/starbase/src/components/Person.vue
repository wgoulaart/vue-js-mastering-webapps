<template>
  <div class="column">
    <div class="card" @click="switchPerson()">
    <div class="card-content">
      <h4 class="title">
        {{ person.name }}
      </h4>
      <div class="content">
        <p class="subtitle">
          <strong>Height:</strong>
          {{ person.height / 100}} mt
        </p>
        <p class="subtitle">
          <strong>Mass:</strong>
          {{ person.mass }} Kg
        </p>
        <p class="subtitle">
          <strong>Gender:</strong>
          {{ person.gender }}
        </p>
        <p class="subtitle">
          <strong>Skin Color:</strong>
          {{ person.skin_color }}
        </p>
      </div>
    </div>
  </div>
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
