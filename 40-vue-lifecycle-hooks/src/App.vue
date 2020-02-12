<template>
	<div id="app">
		<h1>Vue Life-Cycle Hooks</h1>

		<h2>{{ heading }}</h2>

		<button @click="onUpdateHeading()">Update heading</button>
	</div>
</template>

<script>
export default {
	name: 'App',

	data() {
		return {
			heading: 'This is my heading',
		}
	},

	methods: {
		onUpdateHeading() {
			this.heading = 'This is my UPDATED heading';
		},
	},

	beforeCreate() {
		console.log("beforeCreate: " + this.heading);
	},

	created() {
		console.log("created: " + this.heading);
	},

	beforeMount() {
		console.log("beforeMount: " + this.heading);
	},

	mounted() {
		console.log("mounted: " + this.heading);
	},

	beforeUpdate() {
		alert("beforeUpdate: " + this.heading);
	},

	updated() {
		alert("updated: " + this.heading);
	},
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
