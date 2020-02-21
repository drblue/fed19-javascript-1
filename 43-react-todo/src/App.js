import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Do stuff",
				completed: true,
			},
			{
				id: 2,
				title: "Do more stuff",
				completed: false,
			},
			{
				id: 3,
				title: "Do EVEN MORE stuff",
				completed: false,
			},
		],
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
			<div id="App">
				<h1>TODOs</h1>

				<div className="todos">
					<ul className="todo-list">
						{todoItems}
					</ul>

					<AddTodo />
				</div>
			</div>
		)
	}
}

export default App;
