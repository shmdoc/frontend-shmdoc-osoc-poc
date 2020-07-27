<!-- TODO -->
<template>
  <tr class="large-hover" @click="redirectColumn()">

    <th>
      <div v-if="source">
        {{source.attributes.name}}
      </div>
      <div v-else>Waiting for source...</div>
    </th>

    <!--    Uncomment this if you want to show the filename-->
    <!--    <td>-->
    <!--      <div v-if="job_name">-->
    <!--        {{job_name}}-->
    <!--      </div>-->
    <!--      <div v-else-if="job">-->
    <!--        {{job.id}}-->
    <!--      </div>-->
    <!--      <div v-else>Waiting for job...</div>-->
    <!--    </td>-->
    <td>
      <div v-if="job">
        {{ created }}
      </div>
      <div v-else>Waiting for job...</div>
    </td>
    <td>
      {{column.attributes.name}}
    </td>
  </tr>
</template>

<script>

  import moment from "moment";

  export default {
    props: ['column'],
    data() {
      return {
        job: null,
        job_name: null,
        source: null
      }
    },

    computed: {
      created() {
        return moment(this.job.attributes.created).format('lll')
      },
    },

    methods: {

      fetchSource(job) {
        // Fetches the source object given a job object
        var source_url = job.relationships.source.links.related
        fetch(source_url)
          .then(response => response.json())
          .then(response => this.source = response.data)
          .catch(error => console.log(error))
      },

      fetchJobName(job) {
        // Fetches the filename (used because more readable than the job uuid)
        var file_url = job.relationships.file.links.related
        // console.log(file_url)
        fetch(file_url)
          .then(response => response.json())
          .then(response => this.job_name = response.data.attributes.filename)
          .catch(error => console.log(error))
      },

      fetchJob(job_id) {
        // Given a job id, get the json job object
        var job_url = '/schema-analysis-jobs/' + job_id
        // console.log(job_url)
        fetch(job_url)
          .then(response => response.json())
          .then(
            response => {
              this.job = response.data
              // console.log(this.job)
              this.fetchJobName(this.job)
              this.fetchSource(this.job)
            }
          )
      },

      fetchJobID(column_id) {

        // Determine the job id
        var job_url = '/columns/' + column_id + '/column'
        // console.log(job_url)
        fetch(job_url)
          .then(response => response.json())
          .then(response => {
            var job_id = response.data.id
            // Found the ID, now search the corresponding job
            this.fetchJob(job_id)
          })
          .catch(error => console.log(error))
      },

      redirectColumn() {
        // Redirect to the column clicked on
        this.$router.push({name: 'job', params: {id: this.job.id, selectedColumn: this.column}})
      }
    },
    mounted: function () {
      this.fetchJobID(this.column.id)
    }
  }
</script>

<style scoped>
  .large-hover:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 12px 0 rgba(0, 0, 0, 0.2);
  }
</style>
