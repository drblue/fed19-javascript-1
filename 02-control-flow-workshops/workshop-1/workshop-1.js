/**
 * WORKSHOP
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 *
 *    minst 8 tecken varav minst ett specialtecken enligt nedan ✅
 *    eller har minst 12 tecken och minst en siffra ✅
 *    eller har minst 16 tecken ✅
 *
 * Specialtecken: @, $, %, *, ^, <, >, ?, !, (, ), [, ], {, }, '
 */

const SPECIAL_CHARS = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

const NUMBERS = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

let password;
// password = "password"; // inte giltigt
password = "passw?rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secr3tpassword"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

// Check if `password` has at least one special char
let has_special_char = false;
for (let i = 0; i < SPECIAL_CHARS.length; i++) {
	if (password.includes(SPECIAL_CHARS[i])) {
		has_special_char = true;
	}
}

// Check if `password` has at least one number
let has_number = false;
for (let i = 0; i < NUMBERS.length; i++) {
	if (password.includes(NUMBERS[i])) {
		has_number = true;
	}
}

// check if `password` matches criteria
if (password.length >= 8 && has_special_char) {
	console.log("Password is at least 8 chars and has at least one special char");

} else if (password.length >= 12 && has_number) {
	console.log("Password is at least 12 chars and has at least one numeric char");

} else if (password.length >= 16) {
	console.log("Password is at least 16 chars");

} else {
	console.log("Password is not secure enough, my grandma can crack it!");
}
