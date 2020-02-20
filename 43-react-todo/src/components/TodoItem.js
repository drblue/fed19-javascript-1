import React from "react";

class TodoItem extends React.Component {
	render() {
		let cssClasses = 'todo-title';
		cssClasses += this.props.todo.completed ? ' completed' : '';

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
