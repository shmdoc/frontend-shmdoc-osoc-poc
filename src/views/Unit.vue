<template>

  <div>

    <div class="container">
<!--      Info about the unit itself-->
      <div v-if="unit">
        <!-- Information about the unit itself -->
        <h1 class="pagetitle"><a v-bind:href=unit.attributes.uri>{{unit.attributes.name}} ({{unit.attributes.notation}})</a></h1>
        <p>{{unit.attributes.definition}}</p>
      </div>
      <div v-else>
        <!-- Show something when no unit found (looks better than no title) -->
        <h1>{{this.$route.params.id}}</h1>
        <h2 class="pagetitle">No unit with id {{this.$route.params.id}} found</h2>
      </div>
    </div>

<!--    Info about the columns containing this unit-->
    <div v-if="unit" class="tablecontainer">
      <table>
          <tr><td>Source</td><td>Time of analysis</td><td>Field name</td></tr>
          <ColumnListItem v-for="column in columns" v-bind:key='column.id' :column='column'>{{column}}</ColumnListItem>
      </table>
    </div>
  </div>
</template>

<script>
  import ColumnListItem from "../components/ColumnListItem";
  export default {
    components: {
      ColumnListItem
    },
    data() {
      return {
        unit: null,
        columns: [],
      }
    },
    methods: {
      fetchUnit(id) {
        // TODO: Should this be a getter?
        console.log("Fetching unit " + id)
        fetch('/units/' + id)
          .then(response => response.json())
          .then(response => {
            this.unit = response.data
            // return response.data
          })
          .catch(error => console.log(error))
      },
      fetch_columns() {
        // TODO: edit or delete this function
        fetch('/units/' + this.$route.params.id + '/column')
          .then(response => response.json())
          .then(response => {
            response.data.forEach(column => {
              console.log(column)
              this.columns.push(column)
            })
          })
          .catch(error => console.log(error))
      }
    },
    mounted: function () {
      this.fetchUnit(this.$route.params.id)
      this.fetch_columns();
    }
  }
</script>

<style scoped>
  div {
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    margin-left: 20px;
  }
  .tablecontainer {
    margin: 8px;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  table {
    width: 80%;
    margin-left:auto;
    margin-right:auto;
  }
  th, td {
    padding: 5px;
    text-align: left;
  }
  .quantityKind {
    display: flex;
    justify-content: flex-end;
  }
</style>
