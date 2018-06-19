<template>
  <div class="section">
    <h4 class="title is-4">Dashboar Component</h4>
    <button class="button is-danger" @click="signOut">Sign Out</button>

    {{ $store.state }}
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('SignOut')
      firebaseApp.auth().signOut()
    }
  }
}
</script>
