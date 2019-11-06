// let name = "Bill Gates";
// let email = "bgates@microsoft.com";
// let phone = "1-555-BGATES";
let name = "Tony Stark";
let email = "tony@starkindustries.com";
let phone = "1-555-IRONMAN";

// "User Bill Gates can be reached at bgates@microsoft.com or via phone 1-555-BGATES."

// String Concatenation
// let msg = "User " + name + " can be reached at " + email + " or via phone " + phone + ".";
// console.log(msg);

// Template Strings/Literals
// let msg = `User ${name} can be reached at ${email} or by phone ${phone}.`;
// console.log(msg);

// HTML
let title = "My Fancy Blog Post";
let author = "Influencer99";
let likes = "-1";
/*
let html = "<article>" +
	"<h1>" + title + "</h1>" +
	"<p>By " + author + ". Number of likes: " + likes + "</p>" +
	"</article>";
*/
let html =
	`<article>
		<h1>${title}</h1>
		<p>By ${author}. Number of likes: ${likes}</p>
	</article>`;

console.log(html);
