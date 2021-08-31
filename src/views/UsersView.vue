<template>
  <div class="home" :style="{ align: 'left' }">
    <h1 :style="{ textAlign: 'left !important' }">Users Page</h1>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
    <!-- <Header title="Users"></Header> -->
    <UserCardList :users="users"></UserCardList>
  </div>
</template>

<script>
// @ is an alias to /src

// import Header from '../components/Header'
import UserCardList from '../components/UserCardList'

export default {
  name: 'UsersView',
  components: { UserCardList },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.users = [
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Rand',
        email: 'BobRand@email.com',
        photo: ''
      },
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Rand',
        email: 'BobRand@email.com',
        photo: ''
      }
    ]
  }
}
</script>
