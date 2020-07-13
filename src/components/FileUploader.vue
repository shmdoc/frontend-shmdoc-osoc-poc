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
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>
