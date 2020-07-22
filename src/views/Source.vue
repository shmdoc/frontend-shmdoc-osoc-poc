<template>
  <div>
    <h2>Source "{{source.attributes.name}}"</h2>
        <h3
          v-for="job in jobs"
          :key="job.id"
          class="column-card"
          v-on:click="changeSelected(job)"
        >
            {{job.attributes.created}}
        </h3>
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
      console.log("Fetching source jobs...")
      fetch('/sources/' + this.$route.params.id + '/analysis-jobs') // Get the analysis jobs in json format
          .then(response => response.json())
          .then(response => {
            if (response.data.length) {
              // If there is a valid response, add each element to the job list
              response.data.forEach(job => this.jobs.push(job))
            } else {
              console.log("Response data is empty :-(")
            }
          })
          .catch(error => console.log(error))
    },
    changeSelected () {
      // Navigate to job
    },
  },
  mounted: function() {
    this.source = this.$store.getters.getSourceById(this.$route.params.id) // Get the current source
    this.fetch_source_jobs() // Fetch jobs for data.jobs
  }
}
</script>

<style scoped>

</style>
