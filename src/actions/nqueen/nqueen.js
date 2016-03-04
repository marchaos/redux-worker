const calculateNQueen = (n) => {
	return function(dispatch) {
		dispatch({
			type: 'START_NQUEEN'
		});

		setTimeout(function() {
			dispatch({
				type: 'CALCULATE_NQUEEN',
				number: n
			});

			dispatch({
				type: 'COMPLETE_NQUEEN'
			});
		}, 200);
		
	}
}

export default {
	calculateNQueen
}