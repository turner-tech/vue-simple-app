<template>
  <div class="home" :style="{ align: 'left' }">
    <h1 :style="{ textAlign: 'left !important' }">Users Page</h1>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
    <h2 v-if="users && users.length > 0">
      {{ `There Are Currently (` + users.length + `) Users` }}
    </h2>
    <h2 v-else>There Are Currently (0) Users</h2>
    <UserCardList @delete-user="deleteUser" :users="users"></UserCardList>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
    <a-button @click="this.getData()">Add User</a-button>
    <a-button @click="this.deleteAllUsers">Delete All Users</a-button>
  </div>
</template>

<script>
import UserCardList from '../components/UserCardList'
import { get } from 'axios'

export default {
  name: 'UsersView',
  components: { UserCardList },
  data() {
    return {
      users: [],
      posts: []
    }
  },
  methods: {
    reload() {
      this.$forceUpdate()
    },
    deleteAllUsers() {
      this.users = []
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.login.uuid !== userId)
    },
    async getData() {
      try {
        const response = await get('https://api.randomuser.me/').then(
          (response) => response.data.results
        )
        this.users = [...this.users, response[0]]
      } catch (error) {
        console.log(error)
      }
      this.reload()
    }
  },
  created() {
    // this.getData()
  }
}
</script>
