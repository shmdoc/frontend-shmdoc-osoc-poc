<template>
  <div>
    <h1 v-if="source">Source "{{source.attributes.name}}"</h1>
    <JobListItem v-for="job in jobs" v-bind:key='job.id' :job='job'>{{job}}</JobListItem>
  </div>
</template>

<script>
import JobListItem from '@/components/JobListItem.vue'

export default {
  components: {
    JobListItem
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
            response.data.forEach(job => {
              this.jobs.push(job)
            })
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
div {
  text-align: center;
}
h1 {
  font-weight: 550;
}
</style>
