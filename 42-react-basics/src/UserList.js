import React from 'react';
import UserProfile from './UserProfile';

class UserList extends React.Component {

	state = {
		name: "Keanu Reeves",
		age: 55,
		email: "neo@the-matrix.org",
	}

	render() {
		return (
			<div className="user-list">
				<UserProfile name={this.state.name} age={this.state.age} email={this.state.email} />
			</div>
		)
	}
}

export default UserList
