import React, {Component, PropTypes} from 'react';

class Table extends Component {
	constructor(props) {
		super(props);
	}

	makeOneRow(user, i) {
		return (
			<tr key={`table-row-${i}`}>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.dateOfBirth}</td>
			</tr>
		)
	}

	render() {
		const {
			users = [],
			onClickFirstName,
			onClickLastName,
			onClickDoB
		} = this.props;

		return (
			<table>
				<thead>
					<tr>
						<th onClick={onClickFirstName}>First Name</th>
						<th onClick={onClickLastName}>Last Name</th>
						<th onClick={onClickDoB}>Date of Birth</th>
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