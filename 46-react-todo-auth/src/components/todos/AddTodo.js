import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: '',
		description: '',
		steps: [""],
		correctStep: null,
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.onAddTodo(this.state);

		this.setState({
			title: '',
			description: '',
			steps: [""],
		});
	}

	handleAddStepClick = e => {
		e.preventDefault();
		const steps = this.state.steps;
		steps.push("");

		this.setState({
			steps
		});
	}

	handleDeleteStepClick = (e, i) => {
		e.preventDefault();
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
									<button className="btn btn-danger" onClick={e => { this.handleDeleteStepClick(e, i)}}>🗑</button>
								</div>
							</div>
						))
					}
					<div className="mt-3">
						<button className="btn btn-primary" onClick={this.handleAddStepClick}>Add Step</button>
					</div>
				</div>

				<div className="steps-wrapper mb-4">
					<h3>Correct Step</h3>
					<select id="correctStep" onChange={this.handleInputChange} className="form-control">
						<option value="">Please select correct step</option>
						{
							this.state.steps.map((step, i) => (
								<option value={i} key={i}>{step}</option>
							))
						}
					</select>
				</div>

				<button
					type="submit"
					className="btn btn-success w-100"
					disabled={this.state.title && (this.state.correctStep || this.state.steps.length === 0)? '' : 'disabled'}
				>Create</button>
			</form>
		)
	}
}

export default AddTodo;
