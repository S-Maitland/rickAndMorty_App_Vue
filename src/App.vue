<template>
  <div id="app">
    <NavBar/>
      <Header title="Rick And Morty 7.4.2"/>
      <router-view id="view"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
