<template>
	<ul>
		<Todo-Item
			v-for="(dumbThing, i) in todos"
			v-bind:key="i"
			v-bind:item="dumbThing"
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
	},
}
</script>

<style>
</style>
