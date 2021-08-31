<template>
  <a-card hoverable style="width: 300px">
    <!--    <h1>{{ user.name.first }}</h1>-->
    <img alt="example" :src="user.picture.large" />
    <template class="ant-card-actions">
      <!--      <a-icon key="setting" type="setting" />-->
      <!--      <a-icon key="edit" type="edit" />-->
      <!--      <a-icon key="ellipsis" type="ellipsis" />-->
    </template>
    <a-card-meta
      className="card-title"
      :title="user.name.first + ` ` + user.name.last"
      description=""
    >
      <!--      <a-avatar :src="user.picture.large" />-->
    </a-card-meta>
    <h5>Email: {{ user.email }}</h5>
    <h5>Phone: {{ user.phone }}</h5>
    <a-button @click="onDelete">Delete User</a-button>
  </a-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object
  },
  emits: ['delete-user'],
  methods: {
    onDelete(e) {
      e.preventDefault()
      this.$emit('delete-user', this.user.login.uuid)
    }
  }
}
</script>

<style scoped>
.card-title {
  padding-top: 7px;
}
</style>
