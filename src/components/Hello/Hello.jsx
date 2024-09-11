
import { useContext, useEffect, useState } from "react";
import '../../App.css';
import style from '../../pages/Home/Home.module.css';
import { getUserDataFromApi } from "../../service/apiUser";
import { getUserDataFromMock } from "../../service/mockUser";
import { MockDataContext } from './../../context/MockDataContext';

const Hello = () => {
    const { useMock } = useContext(MockDataContext);
    const [userData, setUserData] = useState(null);
    const  userId = 12;

    useEffect(() => {
        const fetchData = async () => {
          let data;
          if (useMock) {
            data = getUserDataFromMock(userId);
            console.log(data)
          } else {
            console.log(data)
            data = await getUserDataFromApi(userId);
          }
          setUserData(data);
        };
    
        fetchData();
      }, [useMock, userId]);
    
      if (!userData) {
        return <div>Loading...</div>;
      }
    return (
        <div className={style.heading}>
            <h1>Bonjour <span className={style.name}>{userData.userInfos.firstName} </span> </h1>
            <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Hello
