import React from "react";
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
	const { id, title, completed } = props.todo;

	let cssClasses = 'todo-title';
	cssClasses += completed ? ' completed' : '';

	const handleOnDeleteClick = () => {
		props.onDelete(id)
	}

	const handleOnToggleClick = () => {
		props.onToggle(props.todo)
	}

	return (
		<li>
			<Link
				to={ '/todo/' + id }
				className={cssClasses}
			>
				{ title }
			</Link>

			<span className="ml-2">
				<button onClick={ handleOnToggleClick } className="btn btn-primary btn-sm">{ completed ? 'Damnit' : 'Complete' }</button>

				{ completed ? <button onClick={handleOnDeleteClick} className="btn btn-danger btn-sm">Delete</button> : '' }
			</span>
		</li>
	)
}
// }

export default TodoItem
