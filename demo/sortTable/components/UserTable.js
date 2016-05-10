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
			<div key={`table-row-${i}`}
				style={{
					display: 'flex',
					flexFlow: 'row nowrap'
				}}>
				<div className='user-table--row'>{user.firstName}</div>
				<div className='user-table--row'>{user.lastName}</div>
				<div className='user-table--row'>{user.dateOfBirth.slice(4, 15)}</div>
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

	render() {
		const {
			users = []
		} = this.props;

		const {
			isSorting
		} = this.state;

		return (
			<div 
				style={{
					display: 'flex',
					flexFlow: 'column nowrap',
					position: 'relative',
					flex: 1,
					overflow: 'hidden'
				}}>
				<div
					style={{
						display: 'flex',
						flexFlow: 'row nowrap',
						flex: '0 0 auto'
					}}>
					<div className='user-table--header'
						onClick={this.sortFirstName.bind(this)}>
						First Name
					</div>
					<div className='user-table--header'
						onClick={this.sortLastName.bind(this)}>
						Last Name
					</div>
					<div className='user-table--header'
						onClick={this.sortDoB.bind(this)}>
						Date of Birth
					</div>
				</div>
				<div className='user-table--body'>
					{users.map(this.makeOneRow)}
				</div>
			</div>
		);
	}
}

export default Table;