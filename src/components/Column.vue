<template>
  <div>
    <h3>{{column.name}}</h3>
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

export default {
  props: ['column']
}
</script>
