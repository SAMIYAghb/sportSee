import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserDataFromMock } from "../service/mockUser";
import { getUserDataFromApi } from "../service/apiUser";


const useScore = () => {
  // const { userId } = useParams();
  const userId = 12;
  const { useMock } = useContext(MockDataContext);
  const [score, setScore] =  useState();


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
      setScore(data.todayScore);
      
    };

    // console.log(score);
    fetchData();


  }, [useMock, userId]);


  return score;

}

export default useScore
