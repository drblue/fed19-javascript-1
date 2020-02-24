import React from 'react';

class App extends React.Component {

	state = {
		question: '',
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		console.log(`Send question "${this.state.question}" to API...`);
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	render() {
		return (
			<div id="app" className="container text-center">
				<h1 className="display-5 mb-3">Anti-Decision Anxiety Resolver</h1>

				<form className="" onSubmit={this.handleFormSubmit}>
					<div className="input-group">
						<input
							type="text"
							id="question"
							className="form-control"
							onChange={this.handleInputChange}
						/>

						<button
							type="submit"
							className="btn btn-success"
						>Resolve!</button>
					</div>
				</form>

				<div id="answer">
				</div>
			</div>
		)
	}
}
export default App;
