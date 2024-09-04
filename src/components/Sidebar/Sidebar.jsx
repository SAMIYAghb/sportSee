import style from './Sidebar.module.css'
import yoga from '../../assets/picto-meditation.png'
import swin from '../../assets/picto-swimming.png'
import bicycle from '../../assets/picto-cycling.png'
import barbell from '../../assets/picto-bodybuilding.png'

const Sidebar = () => {
  return (
    <div className={style.verticalNavigator}>
      <div className={style.iconsContainer} >
        <img src={yoga} alt="yoga" className={style.icon} />
        <img src={swin} alt="swin" className={style.icon}  />
        <img src={bicycle} alt="bicycle" className={style.icon}  />
        <img src={barbell} alt="barbell" className={style.icon}  />
      </div>
      <p className={style.copyright}>Copyright, SportSee 2020</p>
    </div>
  )
}

export default Sidebar
