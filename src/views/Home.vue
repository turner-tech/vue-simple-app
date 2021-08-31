<template>
  <div class="home" :style="{ align: 'left' }">
    <h1 :style="{ textAlign: 'left !important' }">Home Page</h1>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
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
