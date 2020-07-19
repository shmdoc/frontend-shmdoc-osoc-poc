<template>
  <div id="app">
    <header>
      <Header/>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	components: {
    Header
	}
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Roboto, sans-serif;
  color: #2c3e50;

  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
