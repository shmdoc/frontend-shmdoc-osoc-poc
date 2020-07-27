<template>
  <div>
    <h3 v-if="runningJobs.length === 0">No analyses running, or they are starting</h3>
    <div v-for="job in runningJobs" :key="job.id">
      <div v-if="!job.finished">
        <div class="wrapper">
          <div class="runningJobItem">
            <h4 class="running">{{job.id}}</h4>
            <LoadAnimation/>
          </div>
          <span>{{created(job)}}</span>
          <button v-on:click="stopJob(job)">Stop</button>
        </div>
      </div>
      <router-link v-for="job in jobs" :key="job.id" :to="{ name: 'job', params: {id: job.id} }" class="link">
        <h4 class="finished">{{job.id}}</h4>
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
    finishedJobs() {
      return this.jobs.filter(j => j.running)
    },
    ...mapState({
      runningJobs: state => state.jobs.runningJobs,
      jobs: state => state.jobs.jobs
    })
  },
  methods: {
    created(job) {
      return moment(job.attributes.created).format('lll')
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
.wrapper:after {
  content: "";
  display: block;
  width: 25%;
  margin: 1em auto 0;
  border-bottom: solid black 1px;
}
.link {
  text-decoration: none;
  color: black;
}
button {
  border-radius: 3px;
  border: 1px solid #333;
  padding: 3px;
  cursor: pointer;
  background-color: white;
  height: 30px;
  margin-left: 10px;
}
h3 {
  font-weight: 200;
}
</style>
