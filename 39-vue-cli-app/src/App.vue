<template>
	<div id="app">
		<h1>Things To Do</h1>

		<Todo-List v-bind:todos="todos" />

		<ul>
			<Todo-Item
				v-for="(todo, i) in todos"
				v-bind:key="i"
				v-bind:item="todo"
			/>
		</ul>
	</div>
</template>

<script>
import TodoItem from './components/TodoItem'

export default {
	name: 'App',
	components: {
		TodoItem,
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
