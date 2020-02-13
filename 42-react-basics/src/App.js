import React from 'react'
import UserProfile from './UserProfile'

class App extends React.Component {
	render() {
		return (
			<div id="app" className="container">
				<UserProfile name="Keanu Reeves" age="55" email="neo@the-matrix.org" />
				<UserProfile name="Samuel L. Jackson" age="71" email="me@samuelljackson.com" />
			</div>
		)
	}
}

export default App
