import React from 'react';
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

	handleTodoToggle = (id) => {
		console.log('Want to toggle todo with id ' + id);
	}

	render() {
		const todoItems = this.state.todos.map(todoItem => {
			return (
				<TodoItem
					todo={todoItem}
					key={todoItem.id}
					onToggle={this.handleTodoToggle}
				/>
			)
		})

		return (
			<div id="App">
				<h1>TODOs</h1>

				<ul className="todo-list">
					{todoItems}
				</ul>
			</div>
		)
	}
}

export default App;
