import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Johan';
const msg = <h1>Hello, {name}! 2 + 2 = {2+2}</h1>;

ReactDOM.render(
	msg,
	document.querySelector('#root')
);
