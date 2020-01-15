/**
 * Awesome Recipies.
 *
 */

// connect to firestore
const db = firebase.firestore();

// get reference to #recipies
const recipiesEl = document.querySelector('#recipies');

const addRecipieToList = (recipie) => {
	recipiesEl.innerHTML += `<li>${recipie.title} (a year ago)</li>`;
};

db.collection('recipies').get()
	.then(snapshot => {
		// loop over the documents in the snapshot
		snapshot.docs.forEach(doc => {
			addRecipieToList(doc.data());
		});
	})
	.catch(err => {
		console.error(err);
	});
