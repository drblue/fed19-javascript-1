const setBackgroundColor = (color) => {
	document.querySelector('body').style.backgroundColor = color;
}

const setTitle = (title) => {
	document.querySelector('h1').innerText = title;
}

export {
	setBackgroundColor,
	setTitle,
};
