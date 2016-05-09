import Faker, {fake} from 'faker'

const generateUser = () => {
	return {
		firstName: fake("{{name.firstName}}"),
		lastName: fake("{{name.lastName}}"),
		dateOfBirth: fake("{{date.past}}")
	};
}

const generateUsers = (n) => {
	let users = [];
	for (let i = 0; i < n; i++) {
		users.push(generateUser());
	}
	return users;
}

const intState = generateUsers(10000);

const sortByFirstName = (users) => {
	return users;
}

const sortByLastName = (users) => {
	return users;
}

const sortByDOB = (users) => {
	return users.slice()
		.sort(function(userA, userB) {
			return getTime(userA.dateOfBirth) - getTime(userB.dateOfBirth);
		})

	function getTime(timestamp) {
		return new Date(timestamp).getTime();
	}
}

export default (state = intState, action) => {
	switch (action.type) {
		case 'SORT_BY_FIRST':
			return state;
		case 'SORT_BY_LAST':
			return state;
		case 'SORT_BY_DOB':
			return sortByDOB(state);
		default:
			return state;
	}

	return state;
};