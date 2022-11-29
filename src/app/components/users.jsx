import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './pagination'
import UserTable from './usersTable'
import api from '../api'
import GroupList from './groupList'
import SearchStatus from './searchStatus'

const Users = ({ users, ...rest }) => {
	const pageSize = 4
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfessions] = useState()
	const [selectedProf, setSelectedProf] = useState()
	useEffect(() => {
		api.professions.fetchAll().then((data) => setProfessions(data))
	}, [])

	useEffect(() => setCurrentPage(1), [selectedProf])

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

	const handleSort = (item) => {
		console.log(item)
	}

	const handleProfessionSelect = (item) => {
		setSelectedProf(item)
	}

	const filteredUsers = selectedProf
		? (users.filter((user) => user.profession._id === selectedProf._id))
		: users

	const count = filteredUsers.length

	const userCrop = paginate(filteredUsers, currentPage, pageSize)
	const handleClearFilter = () => {
		setSelectedProf()
	}

	return (
		<div className="d-flex">
			{professions && (
				<div className="d-flex flex-column flex-shrink -0 p-3">
					<GroupList
						selectedItem={selectedProf}
						items={professions}
						onItemSelect={handleProfessionSelect}
					/>
					<button
						className="btn btn-secondary mt-2"
						onClick={handleClearFilter}
					>
						Очистить
					</button>
				</div>
			)}
			<div className="d-flex flex-column">
				<h2>
					<SearchStatus length={count} />
				</h2>
				{count > 0 && (
					<UserTable
						users = {userCrop}
						onSort = {handleSort}
						{...rest}
					/>
				)}
				<div className="d-flex justify-content-center">
					<Pagination
						itemsCount={count}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Users
