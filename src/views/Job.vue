<template>
  <div>
    <h1>Job: {{this.$route.params.id}}</h1>
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
      selectedColumn: null
    }
  },
  methods: {
    fetch_columns() {
      fetch('/schema-analysis-jobs/' + this.job.id + '/columns')
          .then(response => response.json())
          .then(response => {
            response.data.forEach(column => this.columns.push(column))
            this.selectedColumn = this.columns[0]
          })
          .catch(error => console.log(error))
    },
    changeSelected(newColumn){
      this.selectedColumn = this.columns.find(column => column.id === newColumn.id)
    },
  },
  mounted: function() {
    this.job = this.$store.getters.getJobById(this.$route.params.id)
    this.fetch_columns()
  }
}
</script>

<style scoped>
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
