/**
 * Awesome Recipies.
 *
 */

// connect to firestore
const db = firebase.firestore();

// get reference to #recipies
const recipiesEl = document.querySelector('#recipies');

db.collection('recipies').get()
	.then(snapshot => {
		// loop over the documents in the snapshot
		snapshot.docs.forEach(doc => {
			const recipie = doc.data();
			console.log("recipie title", recipie.title);

			recipiesEl.innerHTML += `<li>${recipie.title} (a year ago)</li>`;
		});
	})
	.catch(err => {
		console.error(err);
	});
