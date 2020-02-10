<template>
	<li :class="{ done: item.completed }">
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
li.done {
	text-decoration: line-through;
}
</style>
