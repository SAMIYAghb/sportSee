import '../../App.css';
import { useUserData } from '../../hooks/useUserData';
import style from '../../pages/Home/Home.module.css';


const Hello = () => {
    const userData = useUserData();

    return (
        <div className={style.heading}>
            <h1>Bonjour <span className={style.name}>{userData?.userInfos?.firstName} </span> </h1>
            <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Hello
