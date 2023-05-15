<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomeVuex />
</template> 

<script>
import HomeVuex from './components/HomeVuex.vue';

export default {
  name: 'App',
  components: {
    HomeVuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
