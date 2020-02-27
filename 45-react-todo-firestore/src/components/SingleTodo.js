import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../modules/firebase';

class SingleTodo extends React.Component {

	state = {
		todo: null,
	}

	componentDidMount() {
		console.log('SingleTodo.componentDidMount()');

		db.collection('todos').doc(this.props.match.params.id).get()
		.then(doc => {
			// do stuff with document
			console.log("Got response from Firestore");
			this.setState({
				todo: {
					id: doc.id,
					...doc.data()
				}
			});
			console.log("Todo-state is updated");

		}).catch(err => {
			console.error(err);
		});
	}

	componentWillUnmount() {
		console.log('SingleTodo.componentWillUnmount()');
	}

	render() {
		const content = this.state.todo
			? (
				<div className="todo-content">
					<h2>{this.state.todo.title}</h2>

					<p>{this.state.todo.description}</p>

					<div className="mt-3">
						<Link to='/' className="btn btn-secondary">&laquo; Back to list</Link>
					</div>
				</div>
			)
			: (
				<h2>Loading...</h2>
			);

		console.log("Rendering component...");
		return (
			<div className="singleTodo">
				{content}
			</div>
		)
	}
}

export default SingleTodo;
