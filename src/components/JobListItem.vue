<template>
  <div class='event-card'>
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

<style scoped>
h4 {
  margin: 0px;
}
.event-card {
  padding: 10px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
