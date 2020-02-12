<template>
	<ul>
		<Todo-Item
			v-for="(todo, i) in todos"
			v-bind:key="i"
			v-bind:item="todo"
			v-on:delete-todo="onDeleteTodo($event)"
		/>
	</ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
	name: 'Todo-List',
	components: {
		TodoItem,
	},
	props: ['todos'],
	methods: {
		onDeleteTodo(event) {
			console.log("Todo-List: Want to delete todo with title:", event.todo.title);
		}
	},
}
</script>

<style>
</style>
