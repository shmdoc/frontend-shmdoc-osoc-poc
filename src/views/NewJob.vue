<template>
  <div>
    <h1 class="pagetitle">NEW ANALYSIS</h1>
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
</style>
