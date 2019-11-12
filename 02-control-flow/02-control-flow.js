/**
 * switch-statements
 */

/**
 * 0 = User
 * 1 = Manager
 * 2 = Baws
 * 3 = Admin
 */
const USER_LEVEL = 1;

let human_user_level;

switch (USER_LEVEL) {
	case 0:
		human_user_level = "User";
		break;

	case 1:
		human_user_level = "Manager";
		break;

	case 2:
		human_user_level = "Baws";
		break;

	case 3:
		human_user_level = "Admin";
		break;

	default:
		human_user_level = "Guest";
		break;
}

alert(`Your user level is: ${human_user_level}`);
