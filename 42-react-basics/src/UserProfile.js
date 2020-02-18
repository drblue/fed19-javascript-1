import React, { Component } from 'react'
import EmailLink from './EmailLink'

class UserProfile extends Component {

	state = {
		greeting: "says hello",
	}

	handleCopy = e => {
		e.preventDefault();
		alert('No copying, thief!');
	}

	// handleClick(e) {
	handleClick = (e) => {
		console.log('this in handleClick:', this);
		console.log('greeting:', this.state.greeting);
	}

	handleMouseOver = e => {
		console.log('handleMouseOver', e.target);
		e.target.style.fontWeight = 'bold';
	}

	render() {
		console.log('this in render:', this);

		const { name, age, email } = this.props.user;
		return (
			<div className="user-profile">
				<div onMouseOver={this.handleMouseOver}>Name: {name}</div>
				<div>Age: {age}</div>
				<div>E-mail: <EmailLink email={email} /></div>

				<p onCopy={this.handleCopy}>{this.state.greeting}</p>

				<button onClick={this.handleClick} className="btn btn-info">Say hello</button>
			</div>
		)
	}
}

export default UserProfile
