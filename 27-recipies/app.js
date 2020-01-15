/**
 * Awesome Recipies.
 *
 */

// connect to firestore
const db = firebase.firestore();

// get reference to #recipies
const recipiesEl = document.querySelector('#recipies');

const addRecipieToList = (recipie) => {
	const created = moment.unix(recipie.created_at.seconds);
	recipiesEl.innerHTML += `<li>${recipie.title} (${created.fromNow()})</li>`;
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
