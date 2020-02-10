<template>
	<li class="todo-item" :class="{ done: item.completed }">
		{{ item.title }}
	</li>
</template>

<script>
export default {
	name: 'Todo-Item',
	props: ['item'],
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
</style>
