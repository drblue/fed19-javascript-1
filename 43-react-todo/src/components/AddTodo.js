import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: null,
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		console.log("Want to add a new todo with title: " + this.state.title);
	}

	handleInputTitleChange = (e) => {
		this.setState({
			title: e.target.value,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<input
					type="text"
					id="title"
					aria-label="Title of new TODO"
					placeholder="Type your new todo..."
					onChange={this.handleInputTitleChange}
				/>

				<button type="submit">Create</button>
			</form>
		)
	}
}

export default AddTodo;
