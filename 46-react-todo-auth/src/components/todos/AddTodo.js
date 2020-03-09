import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: '',
		description: '',
		steps: [
			{
				title: '',
				completed: false,
			}
		],
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.onAddTodo(this.state);

		this.setState({
			title: '',
			description: '',
			steps: [
				{
					title: '',
					completed: false,
				}
			],
		});
	}

	handleAddStepClick = e => {
		e.preventDefault();
		const steps = this.state.steps;
		steps.push({
			title: '',
			completed: false,
		});

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

	handleStepCheckboxChange = (e, i) => {
		e.preventDefault();
		const steps = this.state.steps;
		steps[i].completed = !steps[i].completed

		this.setState({
			steps
		});
	}

	handleInputStepChange = (e, i) => {
		const steps = this.state.steps;
		steps[i].title = e.target.value;

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
									value={step.title}
								/>
								<div className="input-group-append">
									{
										step.completed
										? <button className="btn btn-success" onClick={e => { this.handleStepCheckboxChange(e, i)}}><span className="fas fa-check-square"></span></button>
										: <button className="btn btn-warning" onClick={e => { this.handleStepCheckboxChange(e, i)}}><span className="far fa-check-square"></span></button>
									}

									<button className="btn btn-danger" onClick={e => { this.handleDeleteStepClick(e, i)}}><span className="far fa-trash-alt"></span></button>
								</div>
							</div>
						))
					}
					<div className="mt-3">
						<button className="btn btn-primary" onClick={this.handleAddStepClick}><span className="fas fa-plus-square"></span> Add Step</button>
					</div>
				</div>

				<button
					type="submit"
					className="btn btn-success w-100"
					disabled={this.state.title ? '' : 'disabled'}
				><span className="fas fa-save"></span> Create</button>
			</form>
		)
	}
}

export default AddTodo;
