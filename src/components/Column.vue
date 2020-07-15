<template>
  <div>
    <h5>colunm name: {{column.name}}</h5>
    <h5>description:</h5>
    <p>{{column.description}}</p>
    <h5>note:</h5>
    <p>{{column.note}}</p>
    <label>disable process </label>
    <input id='disableProcess' v-model="column.disableProcess" type="checkbox"/>
    <h5>datatype: {{column.datatype}}</h5>
    <h5>quantity kind:{{column.quantityKind}}</h5>
    <h5>unit: {{column.unit}}</h5>
    <h5>record count: {{column.recordCount}}</h5>
    <h5>missing count: {{column.missingCount}}</h5>
    <h5>null count: {{column.nullCount}}</h5>
    <h5>min: {{column.min}}</h5>
    <h5>max: {{column.max}}</h5>
    <h5>mean: {{column.mean}}</h5>
    <h5>median: {{column.median}}</h5>
    <h5>common values: {{column.commonValues}}</h5>
  </div>
</template>

<script>
let column = { name: 'temperature', description: 'This is a column that shows the temperature', note: 'temperature in celsius', disableProcess: true,  datatype: 'double',
               quantityKind: 'celsius', unit: 'C', recordCount: 15, missingCount: 2, nullCount: 3, min: 10, max: 20, mean: 15.6, median: 15, commonValues: 13}

export default {
  data() {
    return {
      column
    }
  }
}
</script>
