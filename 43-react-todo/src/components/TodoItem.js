import React from "react";

class TodoItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			completed: props.todo.completed,
		};
	}

	// toggleTodo = e => {
	// 	this.setState({
	// 		completed: !this.state.completed,
	// 	});
	// }

	render() {
		let cssClasses = 'todo-title';
		cssClasses += this.state.completed ? ' completed' : '';

		console.log("Rendering todo with id " + this.props.todo.id);

		return (
			<li>
				<span
					onClick={ () => { this.props.onToggle(this.props.todo.id) } }
					className={cssClasses}
				>
					{ this.props.todo.title }
				</span>
			</li>
		)
	}
}

export default TodoItem
