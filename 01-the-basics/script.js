let email = "jn@thehiveresistance.com";
email = "some@dude.org";
email = "bgates@microsoft.com";
email = "some.brittish.dude@bt.co.uk";
email = "hi.mate@at.co.au";

let indexOfLastDot = email.lastIndexOf('.');
let emailLength = email.length;
let topDomain = email.slice(indexOfLastDot + 1);

console.log("Topdomain for email " + email + " is " + topDomain);
