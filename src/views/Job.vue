<template>
  <div class='.container'>
    <h1>Job: {{this.$route.params.id}}</h1>
    <Column v-for='column in columns' :column='column' :key='column.path'/>
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
      columns: []
    }
  },
  methods: {
    fetch_columns() {
      let column1 = { name: 'temperature', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 1}
      let column2 = { name: 'species', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 2}
      let column3 = { name: 'volume', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 3}
      let column4 = { name: 'age', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
        quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13, path: 4}
      return [column1, column2, column3, column4]
    }
  },
  mounted: function() {
    this.job = this.$store.getters.getJobById(this.$route.params.id)
    this.columns = this.fetch_columns()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
