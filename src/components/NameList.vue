<template>
	<div>
		<button v-on:click="fetch_names">Fetch names</button>
		<h4 v-for="name in names" v-bind:key='name'>{{name}}</h4>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				names: []
			}
		},
		methods: {
			fetch_names() {
				console.log('fetch names')
				fetch('/columns', 
					{
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/vnd.api+json' 
						}
					})
					.then(response => {
						return response.json()
					})
					.then(json => {
						let names = []
						json.data.forEach(el => {
							names.push(el.attributes.name)
						})
						this.names = names
					})
					.catch(error => console.log(error))
			}
		},
	}
</script>

