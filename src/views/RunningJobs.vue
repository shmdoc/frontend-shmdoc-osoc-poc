<template>
  <div>
    <h1>RUNNING JOBS</h1>
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
div {
  text-align: center;
}
h1 {
  font-weight: 550;
}
</style>
