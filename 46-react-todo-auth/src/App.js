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
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.setState({
					user: {
						email: authUser.email,
					}
				});
			} else {
				this.setState({
					user: null,
				});
			}
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div id="App">
					<Navigation />

					<div className="container my-5">
						{
							this.state.user
							? (<p>You are logged as {this.state.user.email}!</p>)
							: (<p>No one is logged in.</p>)
						}

						<Switch>
							<Route exact path='/' component={TodoList} />
							<Route path='/login' component={Login} />
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
