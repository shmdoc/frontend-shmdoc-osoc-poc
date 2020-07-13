<template>
  <div>
    <button v-on:click="fetch_file_names">Fetch Files</button>
    <h4 v-for="file in files" v-bind:key='file'>{{file}}</h4>
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
      fetch_file_names() {
        fetch('/files')
          .then(response => {
            return response.json()
          })
          .then(json => {
            let fileNames = []
            json.data.forEach(el => {
              fileNames.push(el.attributes.filename)
            })
            this.files = fileNames

          })
          .catch(error => console.log(error))
      }
    }
  }
</script>

