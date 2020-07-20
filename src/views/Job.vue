<template>
  <div>
    <h1>Analysis for {{this.name}}</h1>
    <div v-if="running">
      <h3>Job is still running</h3>
      <button v-on:click="refresh">Refresh</button>
    </div>
    <div v-else>
      <hr/>
      <div class="container">
        <div class="overview">
          <h2>Columns</h2>
          <div>
            <h3 v-for="column in columns" :key="column.id" class="column-card"
              v-on:click="changeSelected(column)">{{column.attributes.name}}</h3>
          </div>
        </div>
        <div class="data">
        <Column v-if="selectedColumn" :column='selectedColumn' :key="selectedColumn.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Column from '@/components/Column.vue'

export default {
  components: {
    Column
  },
  data() {
    return {
      job: null,
      columns: [],
      selectedColumn: null,
      running: false
    }
  },
  methods: {
    fetch_columns() {
      fetch('/schema-analysis-jobs/' + this.$route.params.id + '/columns')
          .then(response => response.json())
          .then(response => {
            if (response.data.length === 0) {
              this.running = true
            }else {
              response.data.forEach(column => this.columns.push(column))
              this.selectedColumn = this.columns[0]
            }
          })
          .catch(error => console.log(error))
    },
    fetch_name() {
      fetch(this.job.relationships.file.links.related)
          .then(response => response.json())
          .then(response => this.name = response.data.attributes.filename)
          .catch(error => console.log(error))
    },
    changeSelected(newColumn){
      this.selectedColumn = this.columns.find(column => column.id === newColumn.id)
    },
    refresh() {
      fetch('/schema-analysis-jobs/' + this.$route.params.id + '/columns')
          .then(response => response.json())
          .then(response => {
            if (response.data.length === 0) {
              alert('Job is still running')
            }else {
              this.running = false
              response.data.forEach(column => this.columns.push(column))
              this.selectedColumn = this.columns[0]
            }
          })
          .catch(error => console.log(error))
    },
  },
  mounted: function() {
    this.job = this.$store.getters.getJobById(this.$route.params.id)
    this.fetch_columns()
    this.fetch_name()
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-template-areas: "overview data";
}
.overview {
  grid-area: overview;
  border-radius: 8px;
  border: 1px solid #333;
}
.data {
  grid-area: data;
}
.column-card {
  padding: 10px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
}
.column-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
</style>
