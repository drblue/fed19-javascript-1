import React from 'react';
import axios from 'axios';

class App extends React.Component {

	state = {
		question: '',
		answer: null,
		answer_image: null,
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		if (!this.state.question.endsWith('?')) {
			return;
		}

		console.log(`Send question "${this.state.question}" to API...`);

		// empty previous answer
		this.setState({
			answer: null,
			answer_image: null,
		});

		// send request to API
		axios.get('https://yesno.wtf/api')
		.then(response => {
			// on response, update state
			this.setState({
				answer: response.data.answer,
				answer_image: response.data.image,
			});
		})
		.catch(error => {
			console.error(error);
		});
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	render() {

		const answerContent = this.state.answer
			?
				(
					<div id="answer">
						<p className="display-3">{this.state.answer}</p>

						<img src={this.state.answer_image} className="img-fluid" />
					</div>
				)
			: '';

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

				{answerContent}
			</div>
		)
	}
}
export default App;
