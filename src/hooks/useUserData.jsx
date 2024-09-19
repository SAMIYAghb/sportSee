import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserDataFromMock } from "../service/mockUser";
import { getUserDataFromApi } from "../service/apiUser";
import { useOutletContext } from 'react-router-dom';


export const useUserData = () => {
  const { userId } = useOutletContext(); 
  // console.log(userId)
  const { useMock } = useContext(MockDataContext);
  const [userData, setUserData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (useMock) {
        data = getUserDataFromMock(userId);
        // console.log(data)
      } else {
        data = await getUserDataFromApi(userId);
          // console.log(data)
        // console.log(data.userInfos)
        // console.log(data.userInfos.firstName)
      }
// console.log(userData)
      setUserData(data)
    };
    fetchData();
  }, [useMock, userId]);
  return userData;

}

