<template>
  <div>
    <h2>Source "{{source.attributes.name}}"</h2>
        <h3
          v-for="job in jobs"
          :key="job.id"
          class="column-card"
          v-on:click="changeSelected(column)"
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
    fetch_columns() {
      fetch('/sources/' + this.$route.params.id + '/analysis-jobs')
          .then(response => response.json())
          .then(response => {
            if (response.data.length) {
              response.data.forEach(job => this.jobs.push(job))
            }
          })
          .catch(error => console.log(error))
    },
    changeSelected () {
      // Navigate to job
    },
  },
  mounted: function() {
    this.source = this.$store.getters.getSourceById(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
