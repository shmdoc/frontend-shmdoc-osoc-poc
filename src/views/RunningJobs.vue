<template>
  <div>
    <h1>Running Jobs</h1>
    <RunningJobsList/>
    </div>
</template>

<script>
import RunningJobsList from '@/components/RunningJobsList.vue'

export default {
	components: {
    RunningJobsList
  },
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
