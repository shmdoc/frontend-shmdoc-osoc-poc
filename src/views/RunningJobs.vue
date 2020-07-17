<template>
  <div>
    <h1>Running Jobs</h1>
    <h3 v-if="runningJobs.length === 0">No jobs running, or they are starting</h3>
    <div v-for="job in runningJobs" :key="job.id">
      <div v-if="!job.finished">
        <h4 class="running">{{job.job.id}}</h4>
        <LoadAnim/>
      </div>
      <router-link v-else :to="{ name: 'job', params: {id: job.job.id} }">
        <h4 class="finished">{{job.job.id}}</h4>
      </router-link>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadAnim from '@/components/LoadAnim.vue'

export default {
	components: {
    LoadAnim
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      runningJobs: state => state.jobs.runningJobs
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.running {
  color: red;
}
.finished {
  color: green;
}
</style>
