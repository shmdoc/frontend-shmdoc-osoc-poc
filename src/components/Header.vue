<template>
  <div id="header">
    <router-link :to="{ name: 'home' }" class="homelink">
      <h1>Shmdoc</h1>
    </router-link>
    <div class="navigation">
      <router-link :to="{ name: 'new-job' }" class="headerlink">New Job</router-link>
      <router-link :to="{ name: 'running-jobs' }" class="headerlink">Running Jobs</router-link>
      <router-link :to="{ name: 'historic-jobs' }" class="headerlink">Historic Jobs</router-link>
      </div>
  </div>
</template>

<script></script>

<style scoped>
#header {
  display: grid;
  grid-template-columns: auto 1fr;

  height: auto;

  background-color: black;
  color: white;
}
.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
}
.headerlink {
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  border: solid white 1px;
}
.homelink{
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}
h1 {
  font-size: 30px;
  font-weight: 500;
  padding: 0;
  margin: 20px 0 20px 10px;
  text-transform: uppercase;
}
</style>
