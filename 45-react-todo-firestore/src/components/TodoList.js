import React from "react";
import { db } from '../modules/firebase';
import AddTodo from './AddTodo';
import TodoItem from "./TodoItem";
import todoListIcon from '../images/icons8-todo-list-100.png';

class TodoList extends React.Component {
	state = {
		showSpinner: false,
		todos: [],
		clock: null,
		timerId: null,
	}

	componentDidMount() {
		console.log('TodoList.componentDidMount()');
		this.getTodos();

		const timerId = setInterval(() => {
			this.setState({
				clock: new Date().toLocaleTimeString(),
			});
		}, 1000);

		this.setState({
			timerId,
		})
	}

	componentWillUnmount() {
		console.log('TodoList.componentWillUnmount()');
		clearInterval(this.state.timerId);
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
				<div id="clock">{this.state.clock}</div>

				<div className="d-flex align-items-center">
					<img src={todoListIcon} className="img-fluid" alt="A paper with a pen" title="My Todos" />
					<h1>TODOs</h1>
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
