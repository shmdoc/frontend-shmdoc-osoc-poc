<template>
  <div>
    <h3>{{attributes.name}}</h3>
    <div v-if="!editing" class="tablecontainer">
      <button v-on:click="edit">Edit</button>
      <table style="width: 100%">
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
          <td>{{attributes["data-type"]}}</td>
        </tr>
        <tr>
          <th>quantity kind</th>
          <td>{{attributes["quantity-kind"]}}</td>
        </tr>
        <tr>
          <th>unit</th>
          <td>
            <div class="unitLayout">
              <span v-if="attributes.unit">{{attributes.unit.name}}</span>
              <span v-else>No unit assigned</span>
              <button v-on:click="showRelated(attributes.unit)">Show Related</button>
            </div>
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
                <th>occurrences</th>
              </tr>
              <tr v-for="(value, i) in JSON.parse(attributes['common-values'])" :key="i">
                <td>{{value.element}}</td>
                <td>{{Math.round((value.occurrences + Number.EPSILON) * 100000) / 1000}}%</td>
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
    <div v-else class="tablecontainer">
      <button v-on:click="cancel">Cancel</button>
      <button v-on:click="save">Save</button>
      <table style="width:100%">
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
            <input type="text" list="units" v-model="attributes.unit"/>
            <datalist id="units">
              <option v-for="unit in units" :key="unit.id" :value="unit.attributes.name"/>
            </datalist>
          </td>
          <!--          <td>-->
          <!--            <span v-if="!units || !units.length">-->
          <!--              No units to choose from-->
          <!--            </span>-->
          <!--            <select v-else v-model="attributes.unit" list="units">-->
          <!--              <option v-for="unit in units" :value="unit" :key="unit">{{unit.attributes.name}}</option>-->
          <!--            </select>-->
          <!--          </td>-->
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
                <th>occurrances</th>
              </tr>
              <tr v-for="(value, i) in JSON.parse(attributes['common-values'])" :key="i">
                <td>{{value.element}}</td>
                <td>{{Math.round((value.occurrences + Number.EPSILON) * 100000) / 1000}}%</td>
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
  import {mapState} from 'vuex'
  import router from "../router";

  export default {
    props: ['column'],
    data() {
      return {
        attributes: this.column.attributes,
        editing: false,
      }
    },
    computed: {
      ...mapState({
        units: state => state.units.units
      }),
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

        //get id of unittype
        let id = null
        this.units.forEach(unit => {
          if (unit.attributes.name === this.attributes.unit) {
            id = unit.id
          }
        })
        if (id) {
          console.log(id)
        } else {
          alert('No valid source')
        }

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
      },
      showRelated(unit) {
        // unit should be unit.id, but is currently unit.name
        // This line should be replaced (or removed) once there is a more efficient way to get the unit.id
        console.log("Showing related for " + unit)
        this.units.forEach(unit_ => {
          if (unit_.attributes.name === unit) {
            console.log("ID for " + unit + " is " + unit_.id)
            unit = unit_.id
            return
          }
        })

        router.push({name: 'unit', params: {id: unit}})
      }
    },

    mounted: function () {
      var unit_list = this.$store.units // TODO: Is this the right way to get unit list from the store?
      if (!unit_list || !unit_list.length) {
        // In case it's for some reason not loaded from jobs, do it now
        this.$store.dispatch('fetch_units')
      }
    }
  }
</script>

<style scoped>
.tablecontainer {
  margin: 8px;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
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
