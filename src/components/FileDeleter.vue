<template>
  <div>
    <input v-model="filename" placeholder="filename"/>
    <button v-on:click="removeFile">Remove file</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filename: ''
      }
    },
    methods: {
      removeFile() {
        if (this.name !== '') {
          fetch('/files')
            .then(response => response.json())
            .then(json => {
              let matches = []
              json.data.forEach(file => {
                if (this.filename === file.attributes.filename){
                  matches.push(file.id)
                }
              })
              if (matches.length == 0) {
                alert("No match found")
              }else {
                if (matches.length > 1){
                  alert("Multiple files with that name, deleting the first")
                }
                fetch('/files/' + matches[0], {
                  method: 'DELETE'
                })
                  .catch(() => alert("Failed to delete file"))
              }
            })
            .catch(error => console.log(error))
        } else {
          alert("Empty filename")
        }
      }
    }
  }
</script>
