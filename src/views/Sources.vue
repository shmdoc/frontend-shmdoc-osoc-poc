<template>
  <div>
    <h1 class="pagetitle">SOURCES</h1>
    <SourcesList/>
  </div>
</template>

<script>
import SourcesList from '@/components/SourcesList.vue'
export default {
	components: {
    SourcesList
	}
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
