<template>
  <div id="app">
    <h3>Startbase Router</h3>
    <h4>
      <router-link class="category" to="/data/people">Meet the Characters</router-link> |
      <router-link class="category" to="/data/planets">Explore the Planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>
