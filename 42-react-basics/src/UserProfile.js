import React, { Component } from 'react'
import EmailLink from './EmailLink'

class UserProfile extends Component {
	render() {
		const { name, age, email } = this.props;
		return (
			<div className="user-profile">
				<div>Name: {name}</div>
				<div>Age: {age}</div>
				<div>E-mail: <EmailLink email={email} /></div>
			</div>
		)
	}
}

export default UserProfile
