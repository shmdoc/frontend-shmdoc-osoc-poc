<template>
  <div>
    <h1>NEW ANALYSIS</h1>
    <FileUploader :source="this.source"/>
  </div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'

export default {
  props: ['source'],
  components: {
    FileUploader
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
