import React from 'react';
import { Route, BrowserRouter, Switch, Link, NavLink } from 'react-router-dom';
import TodoList from "./components/TodoList";
import SingleTodo from './components/SingleTodo';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div id="App" className="container my-5">
					<Route exact path='/' component={TodoList} />
					<Route path='/todo/:id' component={SingleTodo} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
