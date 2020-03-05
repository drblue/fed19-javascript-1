import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyD4xtlHcpBkLYqnskwWM949FwNTHMw84lk",
	authDomain: "awesome-todos-a6c59.firebaseapp.com",
	databaseURL: "https://awesome-todos-a6c59.firebaseio.com",
	projectId: "awesome-todos-a6c59",
	storageBucket: "awesome-todos-a6c59.appspot.com",
	messagingSenderId: "283405509159",
	appId: "1:283405509159:web:3a1f61013218902ddea402",
}

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

export { db }
