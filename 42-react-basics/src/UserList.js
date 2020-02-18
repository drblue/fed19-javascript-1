import React from 'react';
import UserProfile from './UserProfile';

class UserList extends React.Component {

	state = {
		neo: {
			name: "Keanu Reeves",
			age: 55,
			email: "neo@the-matrix.org",
		},
		morpheus: {
			name: "Samuel L. Jackson",
			age: 70,
			email: "morpheus@the-matrix.org",
		},
	}

	render() {
		return (
			<div className="user-list">
				<UserProfile
					user={this.state.neo}
				/>

				<UserProfile
					user={this.state.morpheus}
				/>
			</div>
		)
	}
}

export default UserList
