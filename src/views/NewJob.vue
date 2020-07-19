<template>
  <div>
    <h1>New Job</h1>
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
</style>
