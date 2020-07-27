<template>
  <div>
    <div v-if="!running" class="columns">
      <div class="togglecatcher" v-on:click="toggleColumns">
        <h2>Columns</h2>
      </div>
      <div v-if="open">
        <hr/>
        <h3 v-for="column in columns" :key="column.id" class="column-card"
          v-on:click="changeSelected(column)">{{column.attributes.name}}</h3>
      </div>
    </div>
    <h1>Analysis for "{{this.name}}"</h1>
    <div v-if="running">
      <h3>Job is still running</h3>
      <button v-on:click="refresh">Refresh</button>
    </div>
    <Column v-if="selectedColumn" :column='selectedColumn' :key="selectedColumn.id"/>
  </div>
</template>

<script>
import Column from '@/components/Column.vue'

export default {
  props: ['preSelectedColumn'],
  components: {
    Column
  },
  data() {
    return {
      job: null,
      columns: [],
      running: false,
      open: false,
      name: '',
      selectedColumn: null
    }
  },
  methods: {
    fetch_columns() {
      fetch('/schema-analysis-jobs/' + this.$route.params.id + '/columns?page[size]=100')
          .then(response => response.json())
          .then(response => {
            if (response.data.length === 0) {
              this.running = true
            }else {
              response.data.forEach(column => this.columns.push(column))
              //this if is because it is not good to change the value of props, they will be overwritten
              if(!this.preSelectedColumn) {
                // if required so selectedColumn can be set by the page you're being redirected from
                this.selectedColumn = this.columns[0]
              } else {
                // else take the column given by prop
                this.selectedColumn = this.preSelectedColumn
              }
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
      this.open = false
    },
    refresh() {
      fetch('/schema-analysis-jobs/' + this.$route.params.id + '/columns?page[size]=100')
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
    toggleColumns() {
      this.open = !this.open
    }
  },
  mounted: function() {
    this.job = this.$store.getters.getJobById(this.$route.params.id)
    this.fetch_columns()
    this.fetch_name()
    this.$store.dispatch('fetch_units')
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
.togglecatcher{
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.columns {
  position: absolute;
  margin: 8px;
  min-width: 340px;
  max-height: 90%;
  border-radius: 8px;
  border: 1px solid #333;
  background-color: white;
  overflow-y: auto;
}
.data {
  display: flex;
  justify-content: center;
}
.column-card {
  padding: 10px;
  transition: all 0.2s linear;
}
.column-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
h1 {
  font-weight: 550;
}

</style>
