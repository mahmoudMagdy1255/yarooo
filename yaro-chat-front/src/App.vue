<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components:{
    Navbar,Footer
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
  margin-top: 0px;
}
</style>
