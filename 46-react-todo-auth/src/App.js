import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Navigation from './components/navigation/Navigation';
import NotFound from "./components/pages/NotFound";
import SingleTodo from './components/pages/SingleTodo';
import TodoList from "./components/pages/TodoList";

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<BrowserRouter>
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
			</BrowserRouter>
		)
	}
}

export default App;
