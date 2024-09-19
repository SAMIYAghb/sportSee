import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserDataFromMock } from "../service/mockUser";
import { getUserDataFromApi } from "../service/apiUser";
// import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';


export const useUserData = () => {
  // const userId = 12;
  // const { userId } = useParams();
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
        // console.log(data.userInfos)
        // console.log(data.userInfos.firstName)
      }

      setUserData(data)
    };
    fetchData();
  }, [useMock, userId]);
  return userData;

}


export const useScore = () => {
  // const { userId } = useParams();
  // const userId = 12;
  const { userId } = useOutletContext(); 
  const { useMock } = useContext(MockDataContext);
  const [score, setScore] =  useState(0);


  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (useMock) {
        data = getUserDataFromMock(userId);
        // console.log(data)
      } else {
        data = await getUserDataFromApi(userId);
        // console.log(data)
      }

      const todayScore = data?.todayScore;

      // Validate todayScore and ensure it's a number
      if (typeof todayScore === 'number' && !isNaN(todayScore)) {
        setScore(todayScore);
      } else {
        setScore(0); // Set fallback value if todayScore is invalid
      }
      
    };

    // console.log(score);
    fetchData();


  }, [useMock, userId]);


  return score;

}
