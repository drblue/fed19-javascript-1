import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function formatName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {
	firstName: 'Pelle',
	lastName: 'Persson',
	avatarUrl: 'https://i.pravatar.cc/150?img=58',
}

const msg = (
	<div className="user">
		<h1>
			Hello, {formatName(user)} ☀️!
		</h1>
		<img src={user.avatarUrl} />
	</div>
)

ReactDOM.render(
	msg,
	document.querySelector('#root')
)
