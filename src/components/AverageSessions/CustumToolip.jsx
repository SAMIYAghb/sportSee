import PropTypes from 'prop-types'
import style from './AverageSessions.module.css'

function CustomToolTip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<div className={style.tooltip}>
				<p>{payload[0].value + ' min'}</p>
			</div>
		)
	}
	return null
}

CustomToolTip.propTypes = {
	/**
	 * Whether or not the tooltip is active
	 */
	active: PropTypes.bool,
	/**
	 * The payload of the tooltip
	 */
	payload: PropTypes.arrayOf(PropTypes.object),
}

export default CustomToolTip
