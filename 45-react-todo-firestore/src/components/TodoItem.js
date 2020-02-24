import React from "react";

const TodoItem = (props) => {
	const { id, title, completed } = props.todo;

	let cssClasses = 'todo-title';
	cssClasses += completed ? ' completed' : '';

	const handleOnDeleteClick = () => {
		props.onDelete(id)
	}

	const handleOnTitleClick = () => {
		props.onToggle(id)
	}

	return (
		<li>
			<span
				onClick={ handleOnTitleClick }
				className={cssClasses}
			>
				{ title }
			</span>
			{ completed ? <button onClick={handleOnDeleteClick} className="btn btn-danger btn-sm ml-2">Delete</button> : '' }
		</li>
	)
}
// }

export default TodoItem
