<template>
  <div>
    <h1>Jobs</h1>
    <JobList/>
  </div>
</template>

<script>
import JobList from '@/components/JobList.vue'
export default {
	components: {
    JobList
	}
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>

