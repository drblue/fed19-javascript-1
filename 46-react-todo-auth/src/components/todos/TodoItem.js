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
				{
					completed
					? (
						<div className="btn-group">
							<button className="btn btn-warning btn-sm" onClick={handleOnToggleClick}><span className="far fa-check-square"></span></button>
							<button className="btn btn-danger btn-sm" onClick={handleOnDeleteClick}><span className="far fa-trash-alt"></span></button>
						</div>
					)
					: (
						<button className="btn btn-success btn-sm" onClick={handleOnToggleClick}><span className="fas fa-check-square"></span></button>
					)
				}
			</span>
		</li>
	)
}
// }

export default TodoItem
