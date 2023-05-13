<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomeVuex />
</template> 

<script>
import { mapState } from 'vuex';
import HomeVuex from './components/HomeVuex.vue';

export default {
  name: 'App',
  components: {
    HomeVuex
},
data() {
  return {

  }
},
created() {
  console.log(this.userInfo);
  console.log(this.messageInfo);
},

computed: mapState({
  userInfo: state => state.users,
  messageInfo: state => state.message
})
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
