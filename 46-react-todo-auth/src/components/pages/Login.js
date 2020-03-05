import React from 'react';
import { auth } from '../../modules/firebase';

class Login extends React.Component {
	state = {
		email: '',
		password: '',
	}

	handleOnChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	handleOnSubmit = e => {
		e.preventDefault();

		const { email, password } = this.state;

		// submit email and password to firebase for authentication
		auth.signInWithEmailAndPassword(email, password)
		.then(credentials => {
			// if successful, redirect to another page
			console.log("Authentication successful!", credentials);

			this.props.history.push('/');
		})
		.catch(err => {
			// if not successful, show alert message
			console.error("Authentication failed!", err);
		})
	}

	render() {
		return (
			<div id="login">
				<h1 className="mb-5">Login</h1>

				<form id="login-form" onSubmit={this.handleOnSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" className="form-control" onChange={this.handleOnChange} />
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" className="form-control" onChange={this.handleOnChange} />
					</div>

					<div className="d-flex justify-content-end">
						<button type="submit" className="btn btn-success">Log in</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
