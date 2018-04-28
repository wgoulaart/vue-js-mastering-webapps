<template>
 <div class="section">
   <h4 class="title"> {{ text }} </h4>
   <Person
        v-for="(id, index) in initial_ids"
        :id="id"
        :key="index"
     />
 </div>
</template>

<script>
import Person from "./components/Person.vue"

export default {
  name: "app",
  data() {
    return {
      text: "Hello Folks",
      id: {},
      initial_ids: [1, 13, 18, 22]
    }
  },
  components: {
    Person
  }
}
</script>
