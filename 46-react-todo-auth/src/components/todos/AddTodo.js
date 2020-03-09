import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: '',
		description: '',
		steps: [""],
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.onAddTodo(this.state);

		this.setState({
			title: '',
			description: '',
		});
	}

	handleAddStepClick = e => {
		const steps = this.state.steps;
		steps.push("");

		this.setState({
			steps
		});
	}

	handleDeleteStepClick = i => {
		const steps = this.state.steps;
		steps.splice(i, 1);

		this.setState({
			steps
		});
	}

	handleInputStepChange = (e, i) => {
		const steps = this.state.steps;
		steps[i] = e.target.value;

		this.setState({
			steps,
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
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						aria-label="Title of new TODO"
						placeholder="Type your new todo..."
						className="form-control"
						onChange={this.handleInputChange}
						value={this.state.title}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						aria-label="Description of new TODO"
						placeholder="Type a more detailed description for your new todo..."
						className="form-control"
						onChange={this.handleInputChange}
						value={this.state.description}
					></textarea>
				</div>

				<div className="steps-wrapper mb-4">
					<h3>Steps</h3>
					{
						this.state.steps.map((step, i) => (
							<div className="input-group" key={i}>
								<input
									type="text"
									className="form-control"
									onChange={e => { this.handleInputStepChange(e, i) }}
									aria-label={`Type step ${i+1}`}
									placeholder={`Type step ${i+1}`}
									value={step}
								/>
								<div className="input-group-append">
									<button className="btn btn-danger" onClick={e => { this.handleDeleteStepClick(i)}}>🗑</button>
								</div>
							</div>
						))
					}
					<button className="btn btn-primary" onClick={this.handleAddStepClick}>Add Step</button>
				</div>

				<button
					type="submit"
					className="btn btn-success w-100"
					disabled={this.state.title ? '' : 'disabled'}
				>Create</button>
			</form>
		)
	}
}

export default AddTodo;
