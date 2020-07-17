<template>
  <div class="container">
    <div>
      <div>
        <input name="file" id="file" type="file" @change="handleFileChange" multiple class="inputfile"/>
        <label for="file">Choose a file</label>
        <button v-if="files.length > 0" v-on:click="uploadFiles">Upload</button>
      </div>
      <div class="fileItem" v-for="file in files" :key="file.lastModified">
        <h4>{{file.name}}</h4>
        <button v-on:click="removeFile(file)">remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      uploaded: false
    }
  },
  methods: {
    handleFileChange(event) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i])
      }
    },
    removeFile(file) {
      this.files = this.files.filter(f => f.name !== file.name)
    },
    uploadFiles() {
      this.files.forEach(file => this.$store.dispatch('uploadFile', file))
      this.uploaded = true
      this.$router.push({ name: 'running-jobs'})
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  border-radius: 3px;
  border: 1px solid #333;
  padding: 3px;
}

.inputfile + label {
  cursor: pointer;
}
.fileItem {
  display: flex;
}
.running {
  color: red;
}
.finished {
  color: green;
}
</style>
