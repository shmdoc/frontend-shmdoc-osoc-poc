<template>
  <div class="container">
    <div>
      <div>
        <input name="file" id="file" type="file" @change="handleFileChange" multiple class="inputfile"/>
        <label for="file">Choose a file</label>
      </div>
      <div v-if="files.length > 0">
        <br/> <!-- this is because the input is a absolute positioned element -->

        <input v-if="!addingSource" type="text" list="source" v-model="selectedSource"/>
        <datalist id="source">
          <option v-for="source in sources" :key="source.id" :value="source.attributes.name" data-id="source.id"/>
        </datalist>

        <h4>{{selectedSource}}</h4>
        <input v-if="addingSource" v-model="newSource" placeholder="new source"/>
        <input v-if="addingSource" v-model="newSourceNote" placeholder="note"/>
        <button v-on:click="addSource">{{addingSource ? "Add" : "Add a new source"}}</button>
        <button v-if="addingSource" v-on:click="cancelAddSource">cancel</button>
      </div>

      <div>
        <button v-if="files.length > 0" v-on:click="uploadFiles">Upload</button>
        <div class="fileItem" v-for="file in files" :key="file.lastModified">
          <h4 class="filename">{{file.name}}</h4>
          <button v-on:click="removeFile(file)">remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

//<option v-for="source in sources" :key="source.id" :value="source.id">{{source.attributes.name}}</option>
export default {
  data() {
    return {
      files: [],
      uploaded: false,
      selectedSource: '',
      addingSource: false,
      newSource: "",
      newSourceNote: ""
    }
  },
  computed: {
    ...mapState({
      sources: state => state.sources.sources
    }),
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

      let id = null
      this.sources.forEach(source => {
        if (source.attributes.name === this.selectedSource) {
          id = source.id
        }
      })
      if (id) {
        this.files.forEach(file => this.$store.dispatch('uploadFile', {file, source: id}))
        this.uploaded = true
        this.$router.push({ name: 'running-jobs'})
      }else{
        alert('No valid source')
      }

    },
    addSource() {
      if (this.addingSource) {
        this.$store.dispatch('addSource', {name: this.newSource, note: this.newSourceNote})
        this.addingSource = !this.addingSource
        this.selectedSource = this.newSource
        this.newSource = ""
        this.newSourceNote = ""
      } else {
        this.newSource = ""
        this.newSourceNote = ""
        this.addingSource = !this.addingSource
      }
    },
    cancelAddSource() {
      this.newSource = ""
      this.addingSource = false
    }
  },
  created() {
    this.$store.dispatch('fetchSources')
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
  cursor: pointer;
  height: 30px;
}
.fileItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  border-radius: 3px;
  border: 1px solid #333;
  padding: 3px;
  cursor: pointer;
  background-color: white;
  height: 30px;
}
.filename {
  margin-right: 20px;
  font-weight: 500;
}
</style>
