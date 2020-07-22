<template>
  <div>
    <div v-for="source in sources" :key="source.id">
      <router-link :to="{ name: 'source', params: {id: source.id} }" class="link">
        <div class='job-card'>
          <span>{{source.attributes.name}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      sources: state => state.sources.sources
    })
  },
  mounted: function() {
    this.$store.dispatch('fetchSources')
  }
}
</script>

<style scoped>
.job-card {
  padding: 0px;
  margin-bottom: 20px;
  transition: all 0.2s linear;

  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
.job-card:after {
  content: "";
  display: block;
  width: 75%;
  margin: 1em auto 0;
  border-bottom: solid black 1px;
}
.job-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 12px 0 rgba(0, 0, 0, 0.2);
}
.link {
  text-decoration: none;
  color: black;

  display: flex;
  justify-content: center;
}
</style>
