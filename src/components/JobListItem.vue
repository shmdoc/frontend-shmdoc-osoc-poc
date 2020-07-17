<template>
  <router-link :to="{ name: 'job', params: {id: job.id} }">
    <div class='job-card'>
      <span v-if="name">{{name}}</span>
      <span v-else>{{job.id}}</span>
      <br/>
      <span>{{created}}</span>
      <br/>
      <span v-if="running">Running</span>
    </div>
  </router-link>
</template>

<script>
import moment from 'moment'

export default {
  props: ['job'],
  data() {
    return {
      name: null,
      running: false
    }
  },
  computed: {
    created() {
      return moment(this.job.attributes.created).format('lll')
    }
  },
  mounted: function() {
    fetch(this.job.relationships.file.links.related)
        .then(response => response.json())
        .then(response => this.name = response.data.attributes.filename)
        .catch(error => console.log(error))
    fetch(this.job.relationships.columns.links.related)
        .then(response => response.json())
        .then(response => {
          if (response.data.length === 0) {
            this.running = true
          }
        })
        .catch(error => console.log(error))
  },
}
</script>

<style scoped>
.job-card {
  padding: 10px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
}
.job-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
