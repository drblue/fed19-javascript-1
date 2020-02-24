import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import axios from 'axios';

class App extends React.Component {
	state = {
		todos: [],
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			this.setState({
				todos: response.data.slice(0, 4),
			});
		})
		.catch(error => {
			console.error(error);
		});
	}

	handleTodoAdd = (fields) => {
		console.log("Want to add a new todo...", fields);

		const ids = this.state.todos.map(todo => todo.id);
		const newId = Math.max(...ids) + 1;

		const todo = {
			id: newId,
			title: fields.title,
			completed: false,
		};

		// Create a copy of our current todos and add our new todo
		const newTodos = [...this.state.todos, todo];

		// Set copy as the new state
		this.setState({
			todos: newTodos,
		});
	}

	handleTodoDelete = (id) => {
		console.log('Want to delete todo with id ' + id);

		// Filter out the todo we want to delete
		const newTodos = this.state.todos.filter(todo => todo.id !== id);

		// Set filtered todos as the new state for `todos`
		this.setState({
			todos: newTodos,
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
			<div id="App">
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
