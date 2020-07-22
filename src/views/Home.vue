<template>
	<div class="wrapper">
    <div>
      <div class="titlecontainer">
        <h1>SHMDOC</h1>
      </div>
      <div class="navigation">
        <router-link :to="{ name: 'new-job' }" class="headerlink">New Analysis</router-link>
        <router-link :to="{ name: 'running-jobs' }" class="headerlink">Running Analyses</router-link>
        <router-link :to="{ name: 'historic-jobs' }" class="headerlink">Historic Analyses</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	components: {
	},
}
</script>

<style scoped>
.wrapper {
  margin-top: 75px;
}
.titlecontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 50px;
  font-weight: 550;
}
.navigation {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.headerlink {
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  border: solid black 1px;
  margin: 10px;
}
</style>
