<template>
 <div class="section">
   <h4 class="title"> {{ text }} </h4>
   <div class="columns">
     <Person
          v-for="(id, index) in initial_ids"
          :id="id"
          :key="index"
       />
   </div>
 </div>
</template>

<script>
import Person from "./components/Person.vue"

export default {
  name: "app",
  data() {
    return {
      text: "Star Wars Caracters",
      id: {},
      initial_ids: [1, 13, 18, 22]
    }
  },
  components: {
    Person
  }
}
</script>
