<template>
  <div>
    <h1>Job: {{this.$route.params.id}}</h1>
    <hr/>
    <div class="container">
      <div class="overview">
        <h2>Columns</h2>
        <div>
          <h3 v-for="column in columns" :key="column.path" class="column-card"
            v-on:click="changeSelected(column.path)">{{column.name}}</h3>
        </div>
      </div>
      <div class="data">
      <Column v-if="selectedColumn" :column='selectedColumn'/>
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
      let column1 = { name: 'temperature', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 1}
      let column2 = { name: 'species', description: 'de soorten', note: 'niet alles is correct', disableProcess: false,  datatype: 'string',
        quantityKind: 'determinatie', unit: '', recordCount: 14, missingCount: 3, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 2}
      let column3 = { name: 'volume', description: '', note: '', disableProcess: false,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 3}
      let column4 = { name: 'age', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 4}
      return [column1, column2, column3, column4]
    },
    changeSelected(id){
      this.selectedColumn = this.columns.find(column => column.path === id)
    },
  },
  mounted: function() {
    this.job = this.$store.getters.getJobById(this.$route.params.id)
    this.columns = this.fetch_columns()
    this.selectedColumn = this.columns[0]
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
