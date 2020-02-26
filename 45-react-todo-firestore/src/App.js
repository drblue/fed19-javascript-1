import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// import axios from 'axios';
import { db } from "./modules/firebase";

class App extends React.Component {
	state = {
		todos: [],
	}

	componentDidMount() {
		this.getTodos();
		/*
		axios.get('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			this.setState({
				todos: response.data.slice(0, 4),
			});
		})
		.catch(error => {
			console.error(error);
		});
		*/
	}

	getTodos = () => {
		db.collection("todos").get().then((querySnapshot) => {

			const todos = [];

			querySnapshot.forEach((doc) => {
				todos.push({
					id: doc.id,
					title: doc.data().title,
					completed: doc.data().completed,
				});
			});

			this.setState({
				todos,
			});
		});
	}

	handleTodoAdd = (fields) => {
		console.log("Want to add a new todo...", fields);

		const todo = {
			title: fields.title,
			completed: false,
		};

		// Create a new document for our Todo in the 'todos' collection
		db.collection('todos').add(todo)
		.then(docRef => {
			this.getTodos();
		})
		.catch(err => {
			console.error(err);
		});
	}

	handleTodoDelete = (id) => {
		console.log('Want to delete todo with id ' + id);

		db.collection('todos').doc(id).delete()
		.then(() => {
			// firestore has successfully deleted the todo
			this.getTodos();
		}).catch(err => {
			console.error(err);
		});
	}

	handleTodoToggle = (id) => {
		console.log('Want to toggle todo with id ' + id);

		// Create a copy of our current todos
		const newTodos = [...this.state.todos];

		// Find the todo among our todos-copy to toggle
		const todo = newTodos.find(todo => todo.id === id);

		// Toggle completed on the todo
		todo.completed = !todo.completed;

		// Set todos-copy as the new state for `todos`
		this.setState({
			todos: newTodos,
		});
	}

	render() {
		return (
			<div id="App" className="container my-5">
				<h1>TODOs</h1>

				<div className="todos">
					<TodoList
						todos={this.state.todos}
						onTodoItemDelete={this.handleTodoDelete}
						onTodoItemToggle={this.handleTodoToggle}
					/>

					<AddTodo
						onAddTodo={this.handleTodoAdd}
					/>
				</div>
			</div>
		)
	}
}

export default App;
