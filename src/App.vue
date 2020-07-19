<template>
  <div id="app">
    <transition name="headerfade">
      <header v-if="!onHome">
        <Header/>
      </header>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	components: {
    Header
	},
  computed: {
    onHome() {
      return this.$route.name === 'home'
    }
  }
}
</script>

<style>
body, html {
  margin: 0px;
  padding: 0px;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
}
#app {
  font-family: Roboto, sans-serif;
  color: #2c3e50;

  display: grid;
  grid-template-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
}
.headerfade-enter, .headerfade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.headerfade-enter-active {
  transition: all 0.5s;
}
.headerfade-leave-active {
  transition: all 0s;
}
.emptyheader {
  height: 75px;
  background-color: black;
}
</style>
