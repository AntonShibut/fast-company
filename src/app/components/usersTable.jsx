import React from 'react'
import PropTypes from 'prop-types'
import User from './user'

const UserTable = ({ users, onSort, ...rest }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th onClick={() => onSort('name')}> Имя</th>
					<th> Качества</th>
					<th onClick={() => onSort('profession.name')}> Профессия</th>
					<th onClick={() => onSort('completedMeetings')}> Встретился, раз</th>
					<th onClick={() => onSort('rate')}> Оценка</th>
					<th onClick={() => onSort('bookmark')}> Избранное</th>
					<th> </th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<User key={user._id} {...user} {...rest} />
				))}
			</tbody>
		</table>
	)
}

UserTable.propTypes = {
	users: PropTypes.array.isRequired,
	onSort: PropTypes.func.isRequired
}

export default UserTable
