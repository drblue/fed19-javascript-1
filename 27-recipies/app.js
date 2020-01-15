/**
 * Awesome Recipies.
 *
 */

// connect to firestore
const db = firebase.firestore();

// get reference to #recipies
const recipiesEl = document.querySelector('#recipies');
const newRecipieForm = document.querySelector('#new-recipie');

const addRecipieToList = (recipie) => {
	const created = moment.unix(recipie.created_at.seconds);
	recipiesEl.innerHTML += `<li>${recipie.title} (${created.fromNow()})</li>`;
};

newRecipieForm.addEventListener('submit', e => {
	// stop form from being submitted
	e.preventDefault();

	const now = new Date();
	const recipie = {
		title: newRecipieForm.recipie_title.value,
		created_at: firebase.firestore.Timestamp.fromDate(now)
	};

	// add a new document to the 'recipies' collection
	db.collection('recipies').add(recipie)
		.then(res => {
			console.log("recipie added to collection", res);
			/**
			 * @todo
			 *
			 * 1. clear input field(s)
			 * 2. reload recipies from database
			 * 3. show message that recipie was added successfully
			 */
		})
		.catch(err => {
			console.error(err);
		});
});

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
