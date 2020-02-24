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
			<div id="app" className="container text-center my-5">
				<h1 className="display-5 mb-5">Anti-Decision Anxiety Resolver</h1>

				<form className="mb-5" onSubmit={this.handleFormSubmit}>
					<div className="input-group">
						<input
							type="text"
							id="question"
							className="form-control form-control-lg"
							onChange={this.handleInputChange}
						/>

						<div className="input-group-append">
							<button
								type="submit"
								className="btn btn-lg btn-success"
							>Resolve!</button>
						</div>
					</div>
				</form>

				<div id="answer">
				</div>
			</div>
		)
	}
}
export default App;
