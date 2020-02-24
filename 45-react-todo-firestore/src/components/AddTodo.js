import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: '',
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		console.log("Want to add a new todo with title: " + this.state.title);
		this.props.onAddTodo(this.state);

		this.setState({
			title: '',
		});
	}

	handleInputTitleChange = (e) => {
		this.setState({
			title: e.target.value,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<div className="input-group">
					<input
						type="text"
						id="title"
						aria-label="Title of new TODO"
						placeholder="Type your new todo..."
						className="form-control"
						onChange={this.handleInputTitleChange}
						value={this.state.title}
					/>
					<div className="input-group-append">
						<button type="submit" className="btn btn-success">Create</button>
					</div>
				</div>
			</form>
		)
	}
}

export default AddTodo;
