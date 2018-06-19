<template>
  <div class="section">
    <h4 class="title is-3">SingUp </h4>
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
      <button class="button is-primary" @click="signUp">Sing Up</button>
      <router-link to="/signin">Already a user? Sing in</router-link>
    </div>
    <p class="subtitle is-4"> {{ error.message}} </p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

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
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

