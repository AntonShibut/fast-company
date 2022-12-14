import React, { useEffect, useState } from 'react'
import api from './api'
import Users from './components/users'

const App = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		api.users.fetchAll().then((data) => setUsers(data))
	}, [])

	console.log(users)

	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter((user) => user._id !== userId))
	}

	const handleTongleBookMark = (id) => {
		const changeBookmark = users.map((user) => {
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
			<Users
				users={users}
				onDelete={handleDelete}
				onTongle={handleTongleBookMark}
			/>
		</>
	)
}

export default App
