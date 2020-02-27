import React from "react";
import { db } from '../modules/firebase';
import AddTodo from './AddTodo';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
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
			...fields,
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
		const todoItems = this.state.todos.map(todoItem => {
			return (
				<TodoItem
					todo={todoItem}
					key={todoItem.id}
					onDelete={this.handleTodoDelete}
					onToggle={this.handleTodoToggle}
				/>
			)
		})

		return (
			<div className="todos">
				{
					this.state.showSpinner
					? (
						<div id="spinner" className="spinner-border text-primary" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					) : ''
				}

				<h1>TODOs</h1>

				<ul className="todo-list">
					{todoItems}
				</ul>

				<AddTodo
					onAddTodo={this.handleTodoAdd}
				/>
			</div>
		)
	}
}

export default TodoList
