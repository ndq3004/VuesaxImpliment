<template>
  <div></div>
</template>
<script>
export default {
  name: 'BaseComponent',
  props: {
    name: {
      default: 'haha',
      type: String
    }
  },
  data() {
    return {
      readOnly: true
    }
  }
}
</script>
