<template>
  <div>
    <button v-on:click="fetch_jobs">Fetch Jobs</button>
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
        jobs: [],
      }
    },
    methods: {
      fetch_jobs() {
        fetch('/schema-analysis-jobs')
          .then(response => response.json())
          .then(json => {
            json.data.forEach(job => this.jobs.push(job))
          })
          .catch(error => console.log(error))
      }
    }
  }
</script>

