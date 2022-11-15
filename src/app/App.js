import React, { useState } from 'react'
import SearchStatus from './components/searchStatus'
import api from './api'
import Users from './components/users'

const App = () => {
	const [users, setUsers] = useState(api.users.fetchAll())

	console.log(users)

	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter((user) => user._id !== userId))
	}

	const handleTongleBookMark = (id) => {
		let changeBookmark = users.map((user) => {
			console.log(id)
			if (user._id === id) {
				return { ...user, bookmark: !user.bookmark }
			}
			return user
		})
		setUsers(changeBookmark)
	}

	return (
		<>
			<h2>
				<SearchStatus length={users.length} />
			</h2>
			<Users
				users={users}
				onDelete={handleDelete}
				onTongle={handleTongleBookMark}
			/>
		</>
	)
}

export default App
