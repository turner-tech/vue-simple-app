<template>
  <a-button @click="onClick()" :style="{ background: color }" class="btn">{{ text }}</a-button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick() {
      console.log('clicked: ' + this.text)
    }
  }
}
</script>

<style scoped></style>
