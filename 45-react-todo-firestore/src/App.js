import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { db } from "./modules/firebase";

class App extends React.Component {
	state = {
		showSpinner: false,
		todos: [],
	}

	componentDidMount() {
		this.getTodos();
	}

	showSpinner = () => {
		this.setState({
			showSpinner: true,
		});
	}

	hideSpinner = () => {
		this.setState({
			showSpinner: false,
		});
	}

	getTodos = () => {
		this.showSpinner();

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

			this.hideSpinner();
		});
	}

	handleTodoAdd = (fields) => {
		console.log("Want to add a new todo...", fields);

		this.showSpinner();

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

		this.showSpinner();

		db.collection('todos').doc(id).delete()
		.then(() => {
			// firestore has successfully deleted the todo
			this.getTodos();
		}).catch(err => {
			console.error(err);
		});
	}

	handleTodoToggle = (todo) => {
		console.log('Want to toggle todo with id ' + todo.id);

		this.showSpinner();

		db.collection('todos').doc(todo.id).update({
			completed: !todo.completed,
		}).then(() => {
			// firestore has updated the todo
			this.getTodos();
		}).catch(err => {
			console.error(err);
		});
	}

	render() {
		return (
			<div id="App" className="container my-5">
				{
					this.state.showSpinner
					? (
						<div id="spinner" className="spinner-border text-primary" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					) : ''
				}

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
