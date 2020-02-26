import React from 'react';

const SingleTodo = (props) => {
	console.log(props);

	return (
		<div className="singleTodo">
			<h2>This is a single todo</h2>

			You want to see the todo with the ID {props.match.params.id}!
		</div>
	)
}

export default SingleTodo;
