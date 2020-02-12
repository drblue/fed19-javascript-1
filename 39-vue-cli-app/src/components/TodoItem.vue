<template>
	<li class="todo-item" :class="{ done: item.completed }">
		<span class="todo-title" @click="toggleTodo()">{{ item.title }}</span>
		<span class="delete-todo" @click="emitDeleteTodo()">[X]</span>
	</li>
</template>

<script>
export default {
	name: 'Todo-Item',
	props: ['item'],
	methods: {
		emitDeleteTodo() {
			// somehow delete this todo???
			console.log("Todo-Item: Emitting 'delete-todo' event");
			this.$emit('delete-todo', { todo: this.item });
		},
		toggleTodo() {
			this.item.completed = !this.item.completed;
		}
	},
}
</script>

<style>
li.todo-item {
	background-color: #ccc;
	padding-top: 0.25em;
	padding-bottom: 0.25em;
	margin-top: 0.25em;
	margin-bottom: 0.25em;
}
li.todo-item.done {
	text-decoration: line-through;
}
li.todo-item span {
	cursor: pointer;
}
li.todo-item span.delete-todo {
	background-color: red;
	padding: 0.25rem 0.5rem;
}
</style>
