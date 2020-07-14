<template>
  <div>
    <span v-if="name">{{name}}</span>
    <span v-else>{{job.id}}</span>
    <br/>
    <span>{{created}}</span>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['job'],
  data() {
    return {
      name: null
    }
  },
  computed: {
    created() {
      return moment(this.job.attributes.created).format('lll')
    }
  },
  mounted: function() {
    fetch(this.job.relationships.file.links.self)
        .then(response => response.json())
        .then(response => this.name = response.data.attributes.filename)
        .catch(error => console.log(error))
  }
}
</script>
