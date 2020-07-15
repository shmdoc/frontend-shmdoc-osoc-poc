<template>
  <div>
    <h1>Job: {{this.$route.params.id}}</h1>
    <Column/>
  </div>
</template>

<script>
import Column from '@/components/Column.vue'

export default {
  components: {
    Column
  },
  data() {
    return {
      job: null
    }
  },
  mounted: function() {
    this.job = this.$store.getters.getJobById(this.$route.params.id)
    console.log(this.job)
  }
}
</script>
