<template>
  <div>sdfsdf</div>
</template>

<!-- <vs-row></vs-row> -->
<!-- <vs-navbar></vs-navbar> -->

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {},
  computed: {},
  data() {
    return {
      value1: '',
      value2: ''
    }
  },
  methods: {
    show() {
      console.log(this.$vs)
    },
    deg() {
      debugger
    }
  },
  mounted() {
    this.show()
  }
}
</script>
