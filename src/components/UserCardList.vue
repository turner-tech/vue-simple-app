<template>
  <div :key="user.login.uuid" v-for="user in users">
    <UserCard
      @delete-user="deleteUser"
      :user="user"
      :style="{ paddingTop: '15px', marginTop: '15px' }"
    ></UserCard>
  </div>
</template>

<script>
import UserCard from './UserCard'

export default {
  name: 'UserCardList',
  props: {
    users: Array
  },
  components: {
    UserCard
  },
  emits: ['delete-user'],
  methods: {
    deleteUser(userId) {
      this.$emit('delete-user', userId)
    }
  }
}
</script>

<style scoped>
.card-title {
  padding-top: 7px;
}
</style>
