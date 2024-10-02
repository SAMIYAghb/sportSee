import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserDataFromMock } from "../service/mockUser";
import { getUserDataFromApi } from "../service/apiUser";
import { useNavigate, useOutletContext } from 'react-router-dom';


export const useUserData = () => {
  const { userId } = useOutletContext(); 
  // console.log(userId)
  const { useMock } = useContext(MockDataContext);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null); // Track any error
  const navigate = useNavigate(); // For redirecting

  useEffect(() => {
    const fetchData = async () => {
      let data;
      try {
      if (useMock) {
        data = getUserDataFromMock(userId);
        // console.log(data)
        if (!data) {
          throw new Error('User not found in mock data');
        }
      } else {
        data = await getUserDataFromApi(userId);
          // console.log(data)
        // console.log(data.userInfos)
        // console.log(data.userInfos.firstName)
      }
// console.log(userData)

      setUserData(data)
    } catch (err) {
      setError(err); // Catch and set the error
      navigate('/error');
    }
    };
    if (userId) {
      fetchData(); // Fetch data if userId exists
    }
    // fetchData();
  }, [useMock, userId, navigate]);
  return userData;

}

