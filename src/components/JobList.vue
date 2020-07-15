<template>
  <div>
    <JobListItem v-for="job in jobs" v-bind:key='job.id' :job='job'>{{job}}</JobListItem>
  </div>
</template>

<script>
import JobListItem from '@/components/JobListItem.vue'

import { mapState } from 'vuex'

export default {
  components: {
    JobListItem
  },
  computed: {
    ...mapState({
      jobs: state => state.jobs.jobs
    })
  },
  mounted: function() {
    this.$store.dispatch('getJobs')
  }
}
</script>

