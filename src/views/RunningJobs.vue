<template>
  <div>
    <h1 class="pagetitle">RUNNING ANALYSES</h1>
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
</style>
