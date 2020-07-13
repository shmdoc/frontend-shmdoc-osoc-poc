<template>
  <div>
    <input type="file" @change="handleFileChange"/>
    <h4 v-if="fileList">Current file: {{fileList[0].name}}</h4>
    <button v-if="fileList" v-on:click="upload_file">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: null
    }
  },
  methods: {
    handleFileChange(event) {
      console.log(event.target.files)
      this.fileList = (event.target.files)
    },
    upload_file() {
      console.log('upload')
      fetch('/files', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: this.fileList[0]
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>
