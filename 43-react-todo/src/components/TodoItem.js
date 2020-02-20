import React from "react";

class TodoItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			completed: props.todo.completed,
		};
	}

	toggleTodo = e => {
		this.setState({
			completed: !this.state.completed,
		});
	}

	render() {
		let cssClasses = 'todo-title';
		cssClasses += this.state.completed ? ' completed' : '';

		return (
			<li>
				<span onClick={this.toggleTodo} className={cssClasses}>
					{ this.props.todo.title }
				</span>
			</li>
		)
	}
}

export default TodoItem
