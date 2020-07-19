<template>
  <div>
    <h1>NEW JOB</h1>
    <FileUploader/>
  </div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'

export default {
  components: {
    FileUploader
  }
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
