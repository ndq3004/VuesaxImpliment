<template>
  <div id="app">
    <layout></layout>
    <!-- <router-view /> -->
    <!-- <vs-icon :iconComponent="Settings"></vs-icon> -->
  </div>
</template>
<script>
// import Settings from 'vue-material-design-icons/Settings.vue'
export default {
  components: {
    // HelloVue
    // Settings
  },
  data() {
    return {
      active: true
      // iconComponent: Settings
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* #nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
