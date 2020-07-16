<template>
  <div class="container">
    <div v-if="!uploaded">
      <div>
        <input name="file" id="file" type="file" @change="handleFileChange" multiple class="inputfile"/>
        <label for="file">Choose a file</label>
        <button v-if="files.length > 0" v-on:click="uploadFile">Upload</button>
      </div>
      <div class="fileItem" v-for="file in files" :key="file.lastModified">
        <h4>{{file.name}}</h4>
        <button v-on:click="removeFile(file)">remove</button>
      </div>
    </div>
    <div v-else>
      <h3 v-if="runningJobs.length === 0">Starting Jobs</h3>
      <div v-for="job in runningJobs" :key="job.id">
        <h4 v-if="!job.finished" class="running">{{job.job.id}}</h4>
        <h4 v-else class="finished">{{job.job.id}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      files: [],
      uploaded: false
    }
  },
  computed: {
    ...mapState({
      runningJobs: state => state.jobs.runningJobs
    })
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
      this.files.forEach(file => this.$store.dispatch('uploadFile', file))
      this.uploaded = true
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
