<template>
	<div id="app">
		<h1>Things To Do</h1>

		<h2>My TODOs</h2>
		<Todo-List v-bind:todos="todos" />

		<hr>

		<h2>Peters TODOs</h2>
		<Todo-List v-bind:todos="peters_todos" />

	</div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
	name: 'App',
	components: {
		TodoList,
	},
	data() {
		return {
			todos: [
				{
					title: 'Learn the Basics about Vue',
					completed: true,
				},
				{
					title: 'Learn about Vue Components',
					completed: false,
				},
				{
					title: 'Profit! 🤑',
					completed: true,
				},
			],

			peters_todos: [
				{
					title: 'Vara en rolig gubbe',
					completed: true,
				},
				{
					title: 'Dricka kaffe',
					completed: false,
				},
			],
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
