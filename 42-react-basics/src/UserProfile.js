import React, { Component } from 'react'
import EmailLink from './EmailLink'

class UserProfile extends Component {

	state = {
		hasSaidHello: false,
	}

	// handleClick(e) {
	handleClick = (e) => {
		const greeting = this.state.hasSaidHello
			? 'says goodbye'
			: 'says hello'

		alert(`${this.props.user.name} ${greeting}`);

		// DON'T DO THIS!!
		// this.state.greeting = "says goodbye"

		// DO THIS!
		this.setState({
			hasSaidHello: !this.state.hasSaidHello,
		});
	}

	render() {
		const { name, age, email } = this.props.user;
		return (
			<div className="user-profile">
				<div>Name: {name}</div>
				<div>Age: {age}</div>
				<div>E-mail: <EmailLink email={email} /></div>

				<button onClick={this.handleClick} className="btn btn-info">Say hello</button>
			</div>
		)
	}
}

export default UserProfile
