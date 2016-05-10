import React, {Component, PropTypes} from 'react';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFirstNameReverse: false,
			isLastNameReverse: false,
			isDoBReverse: false
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
			isFirstNameReverse: !isFirstNameReverse
		});
		this.props.onClickFirstName(isFirstNameReverse);
	}

	sortLastName() {
		let {isLastNameReverse} = this.state;
		this.setState({
			isLastNameReverse: !isLastNameReverse
		});
		this.props.onClickLastName(isLastNameReverse);
	}

	sortDoB() {
		let {isDoBReverse} = this.state;
		this.setState({
			isDoBReverse: !isDoBReverse
		});
		this.props.onClickDoB(isDoBReverse);
	}

	render() {
		const {
			users = []
		} = this.props;

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
					{users.map(this.makeOneRow)}
				</tbody>
			</table>
		);
	}
}

export default Table;