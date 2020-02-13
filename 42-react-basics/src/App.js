import React from 'react'
import Welcome from './Welcome'

class App extends React.Component {
	render() {
		return (
			<div>
				<Welcome name="Knatte" />
				<Welcome name="Fnatte" />
				<Welcome name="Tjatte" />
			</div>
		)
	}
}

export default App
