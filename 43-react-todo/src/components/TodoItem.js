import React from "react";

// class TodoItem extends React.Component {
// 	render() {
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
			{ completed ? <button onClick={handleOnDeleteClick}>Delete</button> : '' }
		</li>
	)
}
// }

export default TodoItem
