import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
	items,
	valeyProperty,
	contentProperty,
	onItemSelect,
	selectedItem
}) => {
	return (
		<ul className="list-group">
			{items.map((item) => (
				<li
					key={item[valeyProperty]}
					className={
						'list-group-item' + (item === selectedItem ? ' active' : '')
					}
					onClick={() => onItemSelect(item)}
					role="button"
				>
					{item[contentProperty]}
				</li>
			))}
		</ul>
	)
}
GroupList.defaultProps = {
	valeyProperty: '_id',
	contentProperty: 'name'
}

GroupList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	valeyProperty: PropTypes.string.isRequired,
	contentProperty: PropTypes.string.isRequired,
	onItemSelect: PropTypes.func,
	selectedItem: PropTypes.object
}

export default GroupList
