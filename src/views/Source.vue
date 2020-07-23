<template>
  <div>
    <div class="container">
      <h1 v-if="source">SOURCE "{{source.attributes.name}}"</h1>
      <button v-on:click="addAnalysis">Add Analysis</button>
    </div>
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
    addAnalysis() {
      this.$router.push({name: 'new-job', params: { source: this.source }})
    }
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  margin-left: 20px;
}
</style>
