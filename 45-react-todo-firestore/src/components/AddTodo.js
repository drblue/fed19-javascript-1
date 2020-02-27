import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: '',
		description: '',
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		console.log("Want to add a new todo with title: " + this.state.title);
		this.props.onAddTodo(this.state);

		this.setState({
			title: '',
			description: '',
		});
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<h2>Create a new Todo</h2>

				<div className="form-group">
					<input
						type="text"
						id="title"
						aria-label="Title of new TODO"
						placeholder="Type your new todo..."
						className="form-control"
						required
						onChange={this.handleInputChange}
						value={this.state.title}
					/>
				</div>

				<div className="form-group">
					<textarea
						id="description"
						aria-label="Description of new TODO"
						placeholder="Type a more detailed description for your new todo..."
						className="form-control"
						onChange={this.handleInputChange}
						value={this.state.description}
					></textarea>
				</div>

				<button type="submit" className="btn btn-success w-100">Create</button>
			</form>
		)
	}
}

export default AddTodo;
