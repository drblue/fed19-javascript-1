import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NotFound from "./components/pages/NotFound";
import TodoList from "./components/pages/TodoList";
import SingleTodo from './components/pages/SingleTodo';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<BrowserRouter>
				<div id="App" className="container my-5">
					<Switch>
						<Route exact path='/' component={TodoList} />
						<Route path='/todo/:id' component={SingleTodo} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
