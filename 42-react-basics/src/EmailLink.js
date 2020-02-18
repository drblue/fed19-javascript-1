import React, { Component } from 'react'

class EmailLink extends Component {
	render() {
		const { email } = this.props;
		return (
			<a href={`mailto:${email}`} className="email-link">
				{email}
			</a>
		)
	}
}

export default EmailLink
