<template>
  <div>
    <h3>{{column.name}}</h3>

    <table style="width:100%">
      <tr>
        <th>description</th>
        <td>{{column.description}}</td>
      </tr>
      <tr>
        <th>note</th>
        <td>{{column.note}}</td>
      </tr>
      <tr>
        <th>datatype</th>
        <td>{{column.datatype}}</td>
      </tr>
      <tr>
        <th>quantity kind</th>
        <td>{{column.quantityKind}}</td>
      </tr>
      <tr>
        <th>unit</th>
        <td>{{column.unit}}</td>
      </tr>
      <tr>
        <th>record count</th>
        <td>{{column.recordCount}}</td>
      </tr>
      <tr>
        <th>missing count</th>
        <td>{{column.missingCount}}</td>
      </tr>
      <tr>
        <th>min</th>
        <td>{{column.min}}</td>
      </tr>
      <tr>
        <th>max</th>
        <td>{{column.max}}</td>
      </tr>
      <tr>
        <th>mean</th>
        <td>{{column.mean}}</td>
      </tr>
      <tr>
        <th>median</th>
        <td>{{column.median}}</td>
      </tr>
      <tr>
        <th>common values</th>
        <td>{{column.commonValues}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

//      <tr>
//        <th><++></th>
//        <td>{{column.<++>}}</th>
//      </tr>


//    <h5>description:</h5>
//    <p>{{column.description}}</p>
//    <h5>note:</h5>
//    <p>{{column.note}}</p>
//    <label>disable process </label>
//    <input id='disableProcess' v-model="column.disableProcess" type="checkbox"/>
//    <h5>datatype: {{column.datatype}}</h5>
//    <h5>quantity kind:{{column.quantityKind}}</h5>
//    <h5>unit: {{column.unit}}</h5>
//    <h5>record count: {{column.recordCount}}</h5>
//    <h5>missing count: {{column.missingCount}}</h5>
//    <h5>null count: {{column.nullCount}}</h5>
//    <h5>min: {{column.min}}</h5>
//    <h5>max: {{column.max}}</h5>
//    <h5>mean: {{column.mean}}</h5>
//    <h5>median: {{column.median}}</h5>
//    <h5>common values: {{column.commonValues}}</h5>

export default {
  props: ['column']
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  margin: 0 10px 0 10px ;
}
th, td {
  padding: 5px;
  text-align: left;
}
</style>
