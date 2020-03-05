import React from "react";
import { db } from '../../modules/firebase';
import AddTodo from '../todos/AddTodo';
import TodoItem from "../todos/TodoItem";
import todoListIcon from '../../images/icons8-todo-list-100.png';

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

				<div className="d-flex align-items-center">
					<img src={todoListIcon} className="img-fluid" alt="A paper with a pen" title="My Todos" />
					<h1>My TODOs</h1>
				</div>

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
