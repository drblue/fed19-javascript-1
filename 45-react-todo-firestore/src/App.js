import React from 'react';
import { Route, BrowserRouter, Switch, Link, NavLink } from 'react-router-dom';
import TodoList from "./components/TodoList";
import { db } from "./modules/firebase";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SingleTodo from './components/SingleTodo';

class App extends React.Component {
	state = {
		showSpinner: false,
		todos: [],
	}

	componentDidMount() {
		this.getTodos();
	}

	showSpinner = () => {
		this.setState({
			showSpinner: true,
		});
	}

	hideSpinner = () => {
		this.setState({
			showSpinner: false,
		});
	}

	getTodos = () => {
		this.showSpinner();

		db.collection("todos").get().then((querySnapshot) => {

			const todos = [];

			querySnapshot.forEach((doc) => {
				todos.push({
					id: doc.id,
					title: doc.data().title,
					completed: doc.data().completed,
				});
			});

			this.setState({
				todos,
			});

			this.hideSpinner();
		});
	}

	handleTodoAdd = (fields) => {
		console.log("Want to add a new todo...", fields);

		this.showSpinner();

		const todo = {
			title: fields.title,
			completed: false,
		};

		// Create a new document for our Todo in the 'todos' collection
		db.collection('todos').add(todo)
		.then(docRef => {
			this.getTodos();
		})
		.catch(err => {
			console.error(err);
		});
	}

	handleTodoDelete = (id) => {
		console.log('Want to delete todo with id ' + id);

		this.showSpinner();

		db.collection('todos').doc(id).delete()
		.then(() => {
			// firestore has successfully deleted the todo
			this.getTodos();
		}).catch(err => {
			console.error(err);
		});
	}

	handleTodoToggle = (todo) => {
		console.log('Want to toggle todo with id ' + todo.id);

		this.showSpinner();

		db.collection('todos').doc(todo.id).update({
			completed: !todo.completed,
		}).then(() => {
			// firestore has updated the todo
			this.getTodos();
		}).catch(err => {
			console.error(err);
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div id="App" className="container my-5">
					{
						this.state.showSpinner
						? (
							<div id="spinner" className="spinner-border text-primary" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						) : ''
					}

					<h1>TODOs</h1>

					<ul className="nav">
						<li className="nav-item">
							<NavLink exact to="/" className="nav-link">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" className="nav-link">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" className="nav-link">Contact</NavLink>
						</li>
					</ul>

					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<Route path='/todo/:id' component={SingleTodo} />

					{/* <TodoList
						todos={this.state.todos}
						onTodoItemAdd={this.handleTodoAdd}
						onTodoItemDelete={this.handleTodoDelete}
						onTodoItemToggle={this.handleTodoToggle}
					/> */}
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
