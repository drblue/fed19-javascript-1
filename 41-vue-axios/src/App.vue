<template>
	<div id="app">
		<div class="joke" v-if="hasJoke">
			<p>{{ joke }}</p>

			<button @click="getJoke()">🤣</button>
		</div>
		<div class="loading" v-else>
			<p>🤔</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'App',

	data() {
		return {
			hasJoke: false,
			joke: null,
		}
	},

	created() {
		this.getJoke();
	},

	methods: {
		getJoke() {
			this.hasJoke = false;

			// go out and get a joke from the API
			// and then set `this.joke` to the joke in the response
			axios.get('https://icanhazdadjoke.com', {
				headers: {
					'Accept': 'application/json'
				}
			})
			.then(response => {
				this.hasJoke = true;
				this.joke = response.data.joke;
			})
			.catch(function(error) {
				console.error(error);
			});
		},
	},
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,
body,
#app {
	min-height: 100vh;
}

#app {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
}

.loading {
	font-size: 4rem;
}

.joke {
	font-size: 2.5rem;
	text-align: center;
}

.joke p {
	color: #333;
	font-style: italic;
	line-height: 1.6;
}

.joke button {
	background-color: #555;
	border: 1px solid #444;
	border-radius: 8px;
	font-size: 2.5rem;
	margin-top: 1.5rem;
	padding: 1rem 1.5rem;
	cursor: pointer;
}
.joke button:hover {
	background-color: #444;
	border: 1px solid #333;
}

</style>
