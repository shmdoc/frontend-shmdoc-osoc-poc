<template>
	<div>
		<h1>Shmdoc</h1>
    <router-link :to="{ name: 'historic-jobs' }">Historic Jobs</router-link>
    <br/>
    <router-link :to="{ name: 'new-job' }">New Job</router-link>
	</div>
</template>

<script>
export default {
	components: {
	}
}
</script>
