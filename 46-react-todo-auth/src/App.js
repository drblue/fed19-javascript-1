import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Navigation from './components/navigation/Navigation';
import NotFound from "./components/pages/NotFound";
import SingleTodo from './components/pages/SingleTodo';
import TodoList from "./components/pages/TodoList";
import { auth } from "./modules/firebase";

class App extends React.Component {

	state = {
		user: null,
	}

	componentDidMount() {
		// save reference to onAuthStateChanged listener so we can unsubscribe from events when unmounted to prevent memory leaks
		this.onAuthStateChangedListener = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.setState({
					user: {
						email: authUser.email,
					},
					currentUser: auth.currentUser,
				});
			} else {
				this.setState({
					user: null,
					currentUser: auth.currentUser,
				});
			}
		});
	}

	componentWillUnmount() {
		// unsubscribe from onAuthStateChanged events to prevent memory leaks
		this.onAuthStateChangedListener();
	}

	render() {
		return (
			<BrowserRouter>
				<div id="App">
					<Navigation user={this.state.user} />

					<div className="container my-5">
						{
							this.state.user
							? (<p>You are logged as {this.state.user.email}!</p>)
							: (<p>No one is logged in.</p>)
						}

						<Switch>
							<Route exact path='/' render={props => (
									<TodoList
										user={this.state.user}
										{...props}
									/>
							)} />

							<Route path='/login' render={props => (
									<Login
										user={this.state.user}
										{...props}
									/>
							)} />

							<Route path='/todo/:id' component={SingleTodo} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
