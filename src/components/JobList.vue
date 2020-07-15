<template>
  <div>
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
    mounted: function() {
        this.jobs = []
        fetch('/schema-analysis-jobs')
          .then(response => response.json())
          .then(json => {
            json.data.forEach(job => this.jobs.push(job))
          })
          .catch(error => console.log(error))
      }
    }
</script>

