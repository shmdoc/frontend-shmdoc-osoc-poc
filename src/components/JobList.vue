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
      fetch_file_names() {
        fetch('/schema-analysis-jobs')
          .then(response => {
            return response.json()
          })
          .then(json => console.log(json))
          .catch(error => console.log(error))
      }
    }
  }
</script>

