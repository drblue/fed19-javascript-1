let email = "jn@thehiveresistance.com";
email = "some@dude.org";
email = "bgates@microsoft.com";
email = "some.brittish.dude@bt.co.uk";
email = "hi.mate@at.co.au";

let indexOfAt = email.indexOf('@');
let indexOfLastDot = email.lastIndexOf('.');
let emailLength = email.length;
let domain = email.slice(indexOfAt + 1, indexOfLastDot);

console.log("Domain without topdomain for email " + email + " is " + domain);
