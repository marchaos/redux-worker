import React, {Component, PropTypes} from 'react';

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
			<tr key={`table-row-${i}`}>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.dateOfBirth.slice(4, 15)}</td>
			</tr>
		)
	}

	sortFirstName() {
		let {isFirstNameReverse} = this.state;

		this.setState({
			isFirstNameReverse: !isFirstNameReverse,
			isSorting: true
		});

		setTimeout(() => {
			this.props.onClickFirstName(isFirstNameReverse);
			this.setState({ isSorting: false });
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
			this.setState({ isSorting: false });
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
			this.setState({ isSorting: false });
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
			<table>
				<thead>
					<tr>
						<th onClick={this.sortFirstName.bind(this)}>First Name</th>
						<th onClick={this.sortLastName.bind(this)}>Last Name</th>
						<th onClick={this.sortDoB.bind(this)}>Date of Birth</th>
					</tr>
				</thead>
				<tbody>
					{ isSorting ? <div>Sorting...</div> : users.map(this.makeOneRow)}
				</tbody>
			</table>
		);
	}
}

export default Table;