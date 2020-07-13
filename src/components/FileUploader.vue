<template>
  <div>
    <input type="file" @change="handleFileChange"/>
    <h4 v-for="file in files" v-bind:key="file.name">{{file.name}}</h4>
  </div>
</template>

<script>
//<button v-if="value" v-on:click="upload">upload</button>
export default {
  data() {
    return {
      files: []
    }
  },
  methods: {
    handleFileChange(event) {
      console.log(event.target.files)
      this.files.push(event.target.files)
      this.files.forEach(file => {
        console.log(file)
      })
    }
  }
}
</script>
