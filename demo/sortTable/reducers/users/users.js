import Faker, {fake} from 'faker'

const generateUser = () => {
	return {
		avatarUrl: fake('{{image.imageUrl}}'),
		firstName: fake('{{name.firstName}}'),
		lastName: fake('{{name.lastName}}'),
		dateOfBirth: fake('{{date.past}}')
	};
}

const generateUsers = (n) => {
	let users = [];
	for (let i = 0; i < n; i++) {
		users.push(generateUser());
	}
	return users;
}

const intState = generateUsers(100);

const sortByFirstName = (users, reverse) => {
	return users.slice()
		.sort(function(a, b){
		    if(a.firstName < b.firstName) return reverse ? 1 : -1;
		    if(a.firstName > b.firstName) return reverse ? -1 : 1;
		    return 0;
		});
}

const sortByLastName = (users, reverse) => {
	return users.slice()
		.sort(function(a, b){
		    if(a.lastName < b.lastName) return reverse ? 1 : -1;
		    if(a.lastName > b.lastName) return reverse ? -1 : 1;
		    return 0;
		});
}

const sortByDOB = (users, reverse) => {
	return users.slice()
		.sort(function(userA, userB) {
			let result = reverse ?
				getTime(userA.dateOfBirth) - getTime(userB.dateOfBirth) :
				getTime(userB.dateOfBirth) - getTime(userA.dateOfBirth)
			return result;
		})

	function getTime(timestamp) {
		return new Date(timestamp).getTime();
	}
}

export default (state = intState, action) => {
	switch (action.type) {
		case 'SORT_BY_FIRST':
			return sortByFirstName(state, action.reverse);
		case 'SORT_BY_LAST':
			return sortByLastName(state, action.reverse);
		case 'SORT_BY_DOB':
			return sortByDOB(state, action.reverse);
		default:
			return state;
	}

	return state;
};