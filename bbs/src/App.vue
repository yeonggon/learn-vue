<template>
  <div id="app">
    <BoardHeader/>
    <router-view/>
  </div>
</template>

<script>
import BoardHeader from './components/BoardHeader.vue'

export default {
  name: 'App',
  components: {
    BoardHeader
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
