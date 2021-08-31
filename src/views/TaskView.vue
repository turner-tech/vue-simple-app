<template>
  <div class="task-view">
    <h1>Tasks Page</h1>
    <Header title="Task Tracker"></Header>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header";

export default {
  name: "TaskView",
  components: { Header },
};
</script>
