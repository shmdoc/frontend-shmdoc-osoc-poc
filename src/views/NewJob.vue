<template>
  <div>
    <h1>New Job</h1>
    <FileUploader/>
    <hr/>
    <FileList/>
  </div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'
import FileList from '@/components/FileList.vue'

export default {
  components: {
    FileUploader,
    FileList
  }
}
</script>
