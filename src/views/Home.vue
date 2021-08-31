<template>
  <div class="home">
    <h1>Home Page</h1>
    <Header title="Task Tracker"></Header>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/Header'

export default {
  name: 'Home',
  components: { Header }
}
</script>
