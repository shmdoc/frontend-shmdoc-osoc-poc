<!-- Note: I know I've written way too much comments, but that also helps me to understand everything -->

<template>
  <div>

    <!-- Page header: Info about the current source -->
    <h2>Source "{{source.attributes.name}}"</h2>
    <p>{{source.attributes.description}}</p>
    <!-- TODO: Why does the description not work? :-( -->

        <!-- Clickable card per job of the current source -->
        <div
          v-for="job in jobs"
          :key="job.id"
          class="column-card"
          v-on:click="changeSelected(job)"
        >
        <!-- router-link makes it clickable and redirect to the link with name "job" and the id corresponding to the current job -->
        <router-link :to="{ name: 'job', params: {id: job.id} }" class="link">
            <h3>Job created on {{job.attributes.created}}</h3>
            <p>Job ID: {{job.id}}</p>
          </router-link>
        </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      source: null,
      jobs: [],
    }
  },
  methods: {
    fetch_source_jobs() {
      // A function which stores all jobs connected to the given source
      //  and stores them in jobs
      var fetch_location = '/sources/' + this.$route.params.id + '/analysis-jobs'
      // console.log("Fetching source jobs from " + fetch_location + "...")
      fetch(fetch_location) // Get the analysis jobs in json format
          .then(response => response.json()) // Get the json part of the response (skip headers etc)
          .then(response => {
            if (response.data.length) {
              // If there is data in the response, add each element to the job list
              response.data.forEach(job => this.jobs.push(job))
            } else {
              console.log("Response data is empty :-(")
            }
          })
          .catch(error => console.log(error))
    },
  },
  mounted: function() {
    // Functions that get executed when the page is loaded
    this.source = this.$store.getters.getSourceById(this.$route.params.id) // Get the current source
    this.fetch_source_jobs() // Fetch jobs for data.jobs
  }
}
</script>

<style scoped>

</style>
