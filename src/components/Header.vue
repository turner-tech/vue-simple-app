<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task1" color="orange"></Button>
    <Button text="Add Task2"></Button>
    <Button text="Add Task3"></Button>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  components: {
    Button,
  },
  props: {
    title: String,
  }
};
</script>

<style scoped></style>
