<template>
  <div class="flex layout">
    <div class="side-bar">
      <side-bar></side-bar>
    </div>
    <div class="full-main-navbar">
      <div class="navbar">
        <nav-bar></nav-bar>
      </div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from './sidebar.vue'
import navBar from './navbar.vue'

export default {
  name: 'Layout',
  components: {
    sideBar,
    navBar
  },
  data: () => ({
    activeItem: 0,
    search: ''
  })
}
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  // background: #cccccc;
  .side-bar {
    width: 332px;
    max-width: 450px;
  }
  .full-main-navbar {
    width: 100%;
    .navbar {
      width: 100%;
      height: 60px;
      // z-index: 30000;
    }
  }
}
.display-inline-block {
  display: inline-block;
}
.vs-sidebar--background {
  background: none !important;
}
</style>
