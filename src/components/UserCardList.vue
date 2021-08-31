<template>
  <div
    :key="user.id"
    v-for="user in users"
    :style="{ display: block, marginLeft: auto, marginRight: auto }"
  >
    <UserCard :style="{ paddingTop: '15px', marginTop: '15px' }"></UserCard>
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
  }
}
</script>

<style scoped>
.card-title {
  padding-top: 7px;
}
</style>
