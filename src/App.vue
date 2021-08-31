<template>
  <a-layout>
    <a-layout-header>
      <div className="site-layout-header" id="nav" :style="{ color: 'white' }">
        <router-link to="/">Home </router-link> |
        <router-link to="/task">Task </router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '24px' }">
      <!-- <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <div className="site-layout-content">
        <router-view />
      </div> </a-layout-content
    ><a-layout-footer
      className="site-layout-footer"
      style="
         {
        }
      "
    >
      <div>
        <h4>A simple Vue application created to understand the library.</h4>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 3px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.site-layout-header {
  min-height: 10vh;
}

.site-layout-content {
  min-height: 80vh;
  padding: 24px;
  background: #fff;
}

.site-layout-footer {
  min-height: 12vh;
  text-align: center;
  padding-top: 3vh;
  margin-bottom: 0%;
  padding-bottom: 0%;
}
</style>
