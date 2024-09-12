import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserDataFromMock } from "../service/mockUser";
import { getUserDataFromApi } from "../service/apiUser";

const useUserData = () => {
  const userId = 12;
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
      }

      setUserData(data)
    };
    fetchData();
  }, [useMock, userId]);
  return userData;

}

export default useUserData
