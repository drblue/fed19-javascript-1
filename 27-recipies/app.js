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

	const recipie_title = newRecipieForm.recipie_title.value.trim();
	if (recipie_title.length < 3) {
		return;
	}

	// clear form fields
	newRecipieForm.reset();

	const now = new Date();
	const recipie = {
		title: recipie_title,
		created_at: firebase.firestore.Timestamp.fromDate(now)
	};

	// add a new document to the 'recipies' collection
	db.collection('recipies').add(recipie)
		.then(res => {
			/**
			 * @todo
			 *
			 * 1. clear input field(s) ✅
			 * 2. reload recipies from database ✅
			 * 3. show message that recipie was added successfully
			 */
			getRecipies();
		})
		.catch(err => {
			console.error(err);
		});
});

const getRecipies = () => {
	document.querySelector('#recipies').innerHTML = "";

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
};

getRecipies();
