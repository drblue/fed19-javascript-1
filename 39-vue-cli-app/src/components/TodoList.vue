<template>
	<div class="todo-list">
		<ul>
			<Todo-Item
				v-for="(todo, i) in todos"
				v-bind:key="i"
				v-bind:item="todo"
				v-on:delete-todo="onDeleteTodo($event)"
			/>
		</ul>
		<div class="todo-list-info">
			Unfinished items: {{ unfinishedTodos }}
		</div>
	</div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
	name: 'Todo-List',

	components: {
		TodoItem,
	},

	computed: {
		unfinishedTodos() {
			// const unfinished = this.todos.filter(todo => !todo.completed);
			// return unfinished.length;
			return this.todos.filter(todo => !todo.completed).length;
		}
	},

	props: ['todos'],

	methods: {
		onDeleteTodo(event) {
			console.log("Todo-List: Want to delete todo with title:", event.todo.title);
			this.todos = this.todos.filter(t => t !== event.todo);
		}
	},
}
</script>

<style>
</style>
