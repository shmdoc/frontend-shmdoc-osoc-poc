<template>
  <div>
    <h3 v-if="runningJobs.length === 0">No jobs running, or they are starting</h3>
    <div v-for="job in runningJobs" :key="job.id">
      <div v-if="!job.finished">
        <div class="runningJobItem">
          <h4 class="running">{{job.job.id}}</h4>
          <LoadAnimation/>
        </div>
        <span>{{created(job)}}</span>
        <button v-on:click="stopJob(job)">Stop</button>
      </div>
      <router-link v-else :to="{ name: 'job', params: {id: job.job.id} }">
        <h4 class="finished">{{job.job.id}}</h4>
      </router-link>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import LoadAnimation from '@/components/LoadAnimation.vue'

export default {
	components: {
    LoadAnimation
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
    created(job) {
      return moment(job.job.attributes.created).format('lll')
    },
    stopJob(job) {
      this.$store.dispatch('stopJob', job)
    }
  },
  created() {
    this.$store.dispatch('getRunningJobs')
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
.runningJobItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
