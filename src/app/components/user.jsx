import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{props.qualities.map((qualitie) => (
					<Qualitie key={qualitie._id} {...qualitie} />
				))}
			</td>
			<td>{props.profession.name}</td>
			<td>{props.completedMeetings}</td>
			<td>{props.rate} /5</td>
			<td>
				<BookMark
					status={props.bookmark}
					{...props}
					onTongle={props.onTongle}
				/>
			</td>
			<td>
				<button
					className="btn btn-danger m-2"
					onClick={() => props.onDelete(props._id)}
				>
					Delete
				</button>
			</td>
		</tr>
	)
}

export default User
