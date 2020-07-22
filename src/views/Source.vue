<template>
  <div>
    <h2>Source "{{source.attributes.name}}"</h2>
      <router-link
        v-for="job in jobs"
        :key="job.id"
        :to="{ name: 'job', params: {id: job.id} }"
        class="link"
      >
        <h3>{{job.attributes.created}}</h3>
      </router-link>
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
    fetch_jobs() {
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
    this.source = this.$store.getters.getSourceById(this.$route.params.id);
    this.fetch_jobs();
  }
}
</script>

<style scoped>

</style>
