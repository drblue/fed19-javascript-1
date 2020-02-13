import React from 'react'
import ReactDOM from 'react-dom'

function formatName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {
	firstName: 'Pelle',
	lastName: 'Persson',
}
const msg = (
	<h1>
		Hello, {formatName(user)} ☀️!
	</h1>
)

ReactDOM.render(
	msg,
	document.querySelector('#root')
)
