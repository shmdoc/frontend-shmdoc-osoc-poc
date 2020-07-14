<template>
  <div>
    <button v-on:click="fetch_jobs">Fetch Jobs</button>
    <h4 v-for="job in jobs" v-bind:key='job'>{{job}}</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        jobs: [],
      }
    },
    methods: {
      fetch_jobs() {
        fetch('/schema-analysis-jobs')
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(error => console.log(error))
      }
    }
  }
</script>

