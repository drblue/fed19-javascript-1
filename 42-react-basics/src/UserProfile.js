import React, { Component } from 'react'
import EmailLink from './EmailLink'

class UserProfile extends Component {

	state = {
		greeting: "says hello",
	}

	// handleClick(e) {
	handleClick = (e) => {
		console.log('this in handleClick:', this);
		console.log('greeting:', this.state.greeting);
	}

	render() {
		console.log('this in render:', this);

		const { name, age, email } = this.props.user;
		return (
			<div className="user-profile">
				<div>Name: {name}</div>
				<div>Age: {age}</div>
				<div>E-mail: <EmailLink email={email} /></div>

				<p>{this.state.greeting}</p>

				<button onClick={this.handleClick} className="btn btn-info">Say hello</button>
			</div>
		)
	}
}

export default UserProfile
