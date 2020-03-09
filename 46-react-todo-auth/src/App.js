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
		loading: true,
	}

	componentDidMount() {
		// save reference to onAuthStateChanged listener so we can unsubscribe from events when unmounted to prevent memory leaks
		this.onAuthStateChangedListener = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.setState({
					user: {
						email: authUser.email,
					},
					loading: false,
				});
			} else {
				this.setState({
					user: null,
					loading: false,
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
				{
					this.state.loading
					? (
						<div id="loader">
							<div id="loader-content">Loading...</div>
						</div>
					) : (
						<div id="App">
							<Navigation />

							<div className="container my-5">
								<Switch>
									<Route exact path='/' component={TodoList} />
									<Route path='/login' component={Login} />
									<Route path='/todo/:id' component={SingleTodo} />
									<Route component={NotFound} />
								</Switch>
							</div>
						</div>
					)
				}
			</BrowserRouter>
		)
	}
}

export default App;
