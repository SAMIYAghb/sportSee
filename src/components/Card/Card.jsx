import style from './Card.module.css'
import PropTypes from 'prop-types';

const Card = ({ icon, value, iconTitle, name }) => {
    return (
        <div className={style.card}>
            <img src={icon} alt={iconTitle} className={style.iconImg} />
            <div className={style.cardContent}>
                <h3 className={style.value}>{value}</h3>
                <p className={style.name}>{name}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    iconTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Card;
