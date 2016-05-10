import React, {Component, PropTypes} from 'react';
import LoadingSpinner from './Spinner.js';
import Infinite from 'react-infinite';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFirstNameReverse: false,
			isLastNameReverse: false,
			isDoBReverse: false,
			isSorting: false
		}
	}

	makeOneRow(user, i) {
		return (
			<div key={`table-row-${i}`}>
				<div>{user.firstName}</div>
				<div>{user.lastName}</div>
				<div>{user.dateOfBirth.slice(4, 15)}</div>
			</div>
		)
	}

	componentWillReceiveProps() {
		this.setState({ isSorting: false });
	}

	sortFirstName() {
		let {isFirstNameReverse} = this.state;

		this.setState({
			isFirstNameReverse: !isFirstNameReverse,
			isSorting: true
		});

		setTimeout(() => {
			this.props.onClickFirstName(isFirstNameReverse);
		}, 200);
	}

	sortLastName() {
		let {isLastNameReverse} = this.state;

		this.setState({
			isLastNameReverse: !isLastNameReverse,
			isSorting: true
		});

		setTimeout(() => {
			this.props.onClickLastName(isLastNameReverse);
		}, 200);
	}

	sortDoB() {
		let {isDoBReverse} = this.state;

		this.setState({
			isDoBReverse: !isDoBReverse,
			isSorting: true
		});

		setTimeout(() => {
			this.props.onClickDoB(isDoBReverse);
		}, 200);
	}

	getStylesIfSorting(isSorting) {
		if (isSorting) {

			return {
				opacity: '0.5',
			}
		}

		return {};
	}

	getSpinnerStyles() {
		let spinnerStyles = {
			position: "absolute",
			display: "flex",
			"marginLeft": "auto",
	    "marginRight": "auto",
	    "left": "0",
	    "right": "0",
	    "marginTop": "auto",
	    "marginBottom": "auto",
	    "top": "40px",
	    "bottom": "0"
		}

		return spinnerStyles;
	}

	render() {
		const {
			users = []
		} = this.props;

		const {
			isSorting
		} = this.state;

		const sortingStyles = this.getStylesIfSorting(isSorting);

		return (
			<div style={{position:"relative"}}>

				<div style={sortingStyles}>
					<div>
							<div onClick={this.sortFirstName.bind(this)}>First Name</div>
							<div onClick={this.sortLastName.bind(this)}>Last Name</div>
							<div onClick={this.sortDoB.bind(this)}>Date of Birth</div>
					</div>
					<div>
						<div>{(isSorting) ? <LoadingSpinner style={this.getSpinnerStyles()}/> : null }</div>
						<Infinite containerHeight={500} elementHeight={25}>
						{ users.map(this.makeOneRow)}
						</Infinite>
					</div>
				</div>
			</div>
		);
	}
}

export default Table;