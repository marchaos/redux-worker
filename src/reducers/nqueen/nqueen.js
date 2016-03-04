const intState = {
	isCalculating: false,
	numberOfSquares: 1,
	answer: null
}

const startNQueen = (state) => {
	return Object.assign({}, state, {
		isCalculating: true,
		answer: null
	});
}

const calculateNQueen = (state, n) => {
	return {
		numberOfSquares: n,
		isCalculating: true,
		answer: solve(+n).length
	};
}

const completeNQueen = (state) => {
	return Object.assign({}, state, {
		isCalculating: false
	});
}

export default (state = intState, action) => {
	switch (action.type) {
		case 'START_NQUEEN':
			return startNQueen(state);
		case 'CALCULATE_NQUEEN':
			return calculateNQueen(state, action.number);
		case 'COMPLETE_NQUEEN':
			return completeNQueen(state);
		default:
			return state;
	}
}

function solve (n,z) {
    var sol = [];

	var _solve = function(board){
		var nx = board.length;

		if (board.length === n){
			sol.push(board);
			return;
		}

		for (var i = 0; i<n; i++){
			var legal = true;
			for (var j=0; j<board.length; j++){
				var ox = j;
				var oy = board[j];
				var slope = Math.abs((nx-ox)/(i-oy));
				if(i===oy || slope === 1){
				    legal = false;
				    break;
				}
			}
			if(legal){
				board.push(i);
				_solve(board)
				board.pop();
			}
		}
	}

	if(z!==undefined){
		_solve([z])
	} else {
		_solve([])
	}

	return sol;
}