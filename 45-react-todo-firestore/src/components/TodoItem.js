import React from "react";
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
	const { id, title, completed } = props.todo;

	let cssClasses = 'todo-title';
	cssClasses += completed ? ' completed' : '';

	const handleOnDeleteClick = () => {
		props.onDelete(id)
	}

	const handleOnTitleClick = () => {
		props.onToggle(props.todo)
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

			<Link
				to={ '/todo/' + id }
				className="btn btn-info btn-sm"
			>View</Link>
		</li>
	)
}
// }

export default TodoItem
