import React from "react";

class TodoItem extends React.Component {
	render() {
		const { id, title, completed } = this.props.todo;

		let cssClasses = 'todo-title';
		cssClasses += completed ? ' completed' : '';

		return (
			<li>
				<span
					onClick={ () => { this.props.onToggle(id) } }
					className={cssClasses}
				>
					{ title }
				</span>
				{ completed ? <button>Delete</button> : '' }
			</li>
		)
	}
}

export default TodoItem
