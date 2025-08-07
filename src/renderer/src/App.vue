<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style>

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
#app {
  width: 97%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
main {
  width: 97%;
  height: 65vh;
}
</style>
