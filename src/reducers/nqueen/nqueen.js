const intState = {
	numberOfSquares: 1,
	answer: null
}

const calculateNQueen = (state, n) => {
	return {
		numberOfSquares: n,
		answer: 'NQUEEN'
	};
}

export default (state = intState, action) => {
	switch (action.type) {
		case 'CALCULATE_NQUEEN':
			return calculateNQueen(state, action.number);
		default:
			return state;
	}
}