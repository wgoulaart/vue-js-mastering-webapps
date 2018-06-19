<template>
  <div class="section">
    <h4 class="title is-4">SingIn</h4>
    <div class="form">
      <input
        type="text"
        placeholder="E-mail"
        class="input"
        v-model="email"
      />
      <input
        type="password"
        placeholder="password"
        class="input"
        v-model="password"
      />
      <button class="button is-primary" @click="signIn">Sing In</button>
    </div>

    <br>

    <p class="subtitle is-3"> {{ error.message}} </p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp.js'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
