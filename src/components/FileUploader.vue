<template>
  <div>
    <input type="file" @change="handleFileChange"/>
    <button v-if="fileList" v-on:click="upload_file">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: null,
    }
  },
  methods: {
    handleFileChange(event) {
      this.fileList = event.target.files
    },
    upload_file() {
      let data = new FormData()
      data.append('file', this.fileList[0])
      fetch('/files', {
        method: 'POST',
        body: data
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
