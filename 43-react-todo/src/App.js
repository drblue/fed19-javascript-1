import React from 'react';

class App extends React.Component {

	state = {
		title: "Do stuff",
		completed: false,
	}

	toggleTodo = e => {
		this.setState({
			completed: !this.state.completed,
		});
	}

	render() {
		return (
			<div id="App">
				<h1>TODOs</h1>

				<ul className="todo-list">
					<li>
						<span onClick={this.toggleTodo}>
							{ this.state.title } - { this.state.completed ? 'DONE!' : 'unfinished' }
						</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default App;
