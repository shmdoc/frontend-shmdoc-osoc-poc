<template>
  <div>
    <div>
      <button v-on:click="fetch_names">Fetch names</button>
      <h4 v-for="name in names" v-bind:key='name'>{{name}}</h4>
    </div>
    <div>
      <input v-model="name" placeholder="name"/>
      <button v-on:click="add_name">Add name</button>
      <h4>"{{name}}" will be added</h4>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        names: [],
        name: ''
      }
    },
    methods: {
      fetch_names() {
        fetch('/columns')
          .then(response => {
            return response.json()
          })
          .then(json => {
            let names = []
            json.data.forEach(el => {
              names.push(el.attributes.name)
            })
            this.names = names
          })
          .catch(error => console.log(error))
      },
      add_name(){
        if (this.name !== '') {
          let data = {"data": {"type":"columns", "attributes":{"name": this.name}}}
          fetch('/columns', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/vnd.api+json'
            },
            body: JSON.stringify(data)
          })
            .then(this.fetch_names())
            .catch(error => console.log(error))

        } else {
          alert("Empty name")
        }
      }
    },
  }
</script>

