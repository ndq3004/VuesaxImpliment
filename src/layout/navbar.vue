<template>
  <vs-navbar v-model="activeItem" class="p-2">
    <div slot="title">
      <vs-navbar-title>
        <span>Vuexy</span>
      </vs-navbar-title>
    </div>

    <vs-navbar-item index="0">
      <a href="#">Home</a>
    </vs-navbar-item>

    <vs-navbar-item index="1">
      <a href="#">News</a>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a href="#">Update</a>
    </vs-navbar-item>

    <vs-input
      icon-pack="feather"
      icon="icon-search"
      placeholder="Search"
      v-model="search"
    />
  </vs-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    colorx: '#7367F0',
    indexActive: 0
  })
}
</script>
