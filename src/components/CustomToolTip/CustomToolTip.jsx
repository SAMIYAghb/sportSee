import PropTypes from 'prop-types'
// import style from './CustomToolTip.module.css'

function CustomToolTip({ active, payload, formatters, tooltipClass }) {
	if (active && payload && payload.length) {
		return(
			<div className={tooltipClass}>
				{/* <p>{payload[0].value + ' min'}</p> */}
				{payload.map((item, index) => (
          <p key={index}>{formatters[index] ? formatters[index](item.value) : item.value}</p>
        ))}
			</div>
		)
	}
	return null
}

CustomToolTip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.arrayOf(PropTypes.object),
	formatters: PropTypes.arrayOf(PropTypes.func),
  	tooltipClass: PropTypes.string,
}

export default CustomToolTip
