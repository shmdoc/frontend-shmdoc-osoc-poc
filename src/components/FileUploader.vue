<template>
  <div>
    <div>
      <input name="file" id="file" type="file" @change="handleFileChange" multiple class="inputfile"/>
      <label for="file">Choose a file</label>
      <button v-if="files.length > 0" v-on:click="uploadFile">Upload</button>
    </div>
    <div v-for="file in files" :key="file.lastModified">
      <h4>{{file.name}}</h4>
      <button v-on:click="removeFile(file)">remove</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
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
    uploadFile() {
      this.$store.dispatch('uploadFile', this.files[0])
    }
  }
}
</script>

<style scoped>
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
  cursor: pointer; /* "hand" cursor */
}
</style>
