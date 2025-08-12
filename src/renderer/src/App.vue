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
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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
  width: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  width: 100%;
  height: 70vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
