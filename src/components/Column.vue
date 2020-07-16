<template>
  <div>
    <h3>{{attributes.name}}</h3>

    <label>disable process </label>
    <input id='disableProcess' v-model="attributes.disableProcess" type="checkbox"/>
    <table style="width:100%">
      <tr>
        <th>description</th>
        <td>{{attributes.description}}</td>
      </tr>
      <tr>
        <th>note</th>
        <td>{{attributes.note}}</td>
      </tr>
      <tr>
        <th>datatype</th>
        <td>{{attributes.datatype}}</td>
      </tr>
      <tr>
        <th>quantity kind</th>
        <td>{{attributes.quantityKind}}</td>
      </tr>
      <tr>
        <th>unit</th>
        <td>{{attributes.unit}}</td>
      </tr>
      <tr>
        <th>record count</th>
        <td>{{attributes.recordCount}}</td>
      </tr>
      <tr>
        <th>missing count</th>
        <td>{{attributes.missingCount}}</td>
      </tr>
      <tr>
        <th>min</th>
        <td>{{attributes.min}}</td>
      </tr>
      <tr>
        <th>max</th>
        <td>{{attributes.max}}</td>
      </tr>
      <tr>
        <th>mean</th>
        <td>{{attributes.mean}}</td>
      </tr>
      <tr>
        <th>median</th>
        <td>{{attributes.median}}</td>
      </tr>
      <tr>
        <th>common values</th>
        <td>{{attributes.commonValues}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  props: ['column'],
  data() {
    return {
      attributes: this.column.attributes
    }
  }
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
