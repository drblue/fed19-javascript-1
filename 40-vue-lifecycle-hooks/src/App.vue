<template>
	<div id="app">
		<h1>Vue Life-Cycle Hooks</h1>

		<h2>{{ heading }}</h2>
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
