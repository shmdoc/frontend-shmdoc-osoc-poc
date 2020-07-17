<template>
  <div>
    <h3>{{attributes.name}}</h3>
    <div v-if="!editing">
      <button v-on:click="edit">Edit</button>
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
          <td>{{attributes["quantity-kind"]}}</td>
        </tr>
        <tr>
          <th>unit</th>
          <td>{{attributes.unit}}</td>
        </tr>
        <tr>
          <th>record count</th>
          <td>{{attributes["record-count"]}}</td>
        </tr>
        <tr>
          <th>missing count</th>
          <td>{{attributes["missing-count"]}}</td>
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
          <td>
            <table v-if="attributes['common-values']" style="width: 100%">
              <tr>
                <th>element</th>
                <th>occurances</th>
              </tr>
              <tr v-for="(value, i) in JSON.parse(attributes['common-values'])" :key="i">
                <td>{{value.element}}</td>
                <td>{{Math.round((value.occurances + Number.EPSILON) * 1000) / 1000}}%</td>
              </tr>
              <tr>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <th>disable processing</th>
          <td>{{attributes['disable-processing']}}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <button v-on:click="cancel">Cancel</button>
      <button v-on:click="save">Save</button>
      <table style="widht:100%">
        <tr>
          <th>description</th>
          <td>
            <textarea v-model="attributes.description"></textarea>
          </td>
        </tr>
        <tr>
          <th>note</th>
          <td>
            <textarea v-model="attributes.note"></textarea>
          </td>
        </tr>
        <tr>
          <th>datatype</th>
          <td>
            <input type="text" v-model="attributes.datatype"/>
          </td>
        </tr>
        <tr>
          <th>quantity kind</th>
          <td>
            <input type="text" v-model="attributes['quantity-kind']"/>
          </td>
        </tr>
        <tr>
          <th>unit</th>
          <td>
            <input type="text" v-model="attributes.unit"/>
          </td>
        </tr>
        <tr>
          <th>record count</th>
          <td>{{attributes["record-count"]}}</td>
        </tr>
        <tr>
          <th>missing count</th>
          <td>{{attributes["missing-count"]}}</td>
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
          <td>
            <table v-if="attributes['common-values']" style="width: 100%">
              <tr>
                <th>element</th>
                <th>occurances</th>
              </tr>
              <tr v-for="(value, i) in JSON.parse(attributes['common-values'])" :key="i">
                <td>{{value.element}}</td>
                <td>{{Math.round((value.occurances + Number.EPSILON) * 1000) / 1000}}%</td>
              </tr>
              <tr>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <th>disable processing</th>
          <td>
            <input v-model="attributes['disable-processing']" type="checkbox"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  props: ['column'],
  data() {
    return {
      attributes: this.column.attributes,
      editing: false,
    }
  },
  methods: {
    edit() {
      this.editing = true
      this.backup = JSON.stringify(this.attributes) // to make a copy
    },
    cancel() {
      this.editing = false
      this.attributes = JSON.parse(this.backup)
    },
    save() {
      this.editing = false

//      let data = {data: {
//                          type: "columns",
//                          attributes: this.attributes,
//                          id: this.column.id
//                        }
//      }
//      data.attributes = this.attributes
//      fetch('/columns/' + this.column.id, {
//            method: 'PATCH',
//            headers: {
//              'Content-Type': 'application/vnd.api+json'
//            },
//          body: JSON.stringify(data)
//          })
//          .then(response => response.json())
//          .then(response => console.log(response))
//          .catch(error => console.log(error))
    }
  },
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
