import React from 'react';
import axios from 'axios';

class App extends React.Component {

	state = {
		inputQuestion: '',
		question: '',
		answer: null,
		answer_image: null,
		showPleaseAskQuestion: false,
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		if (!this.state.inputQuestion.endsWith('?')) {
			this.setState({
				answer: null,
				answer_image: null,
				showPleaseAskQuestion: true,
			});
			return;
		}

		// hide help text and empty previous answer
		this.setState({
			answer: null,
			answer_image: null,
			showPleaseAskQuestion: false,
		});

		console.log(`Send question "${this.state.inputQuestion}" to API...`);

		// send request to API
		axios.get('https://yesno.wtf/api')
		.then(response => {
			// on response, update state
			this.setState({
				answer: response.data.answer,
				answer_image: response.data.image,
				question: this.state.inputQuestion,
				inputQuestion: '',
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
		const answerStyle = {
			backgroundImage: `url(${this.state.answer_image})`,
		};

		const answerContent = this.state.answer
			?
				(
					<div id="answer" style={answerStyle}>
						<h2>{this.state.question}</h2>
						<p className="display-3">{this.state.answer}</p>
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
							id="inputQuestion"
							className="form-control form-control-lg"
							onChange={this.handleInputChange}
							value={this.state.inputQuestion}
						/>

						<div className="input-group-append">
							<button
								type="submit"
								className="btn btn-lg btn-success"
							>Resolve!</button>
						</div>
					</div>
				</form>

				{this.state.showPleaseAskQuestion
					? (
						<div className="alert alert-info">
							A question usually ends with a question-mark...
						</div>
					)
					: ''
				}

				{answerContent}
			</div>
		)
	}
}
export default App;
