import { useContext, useEffect, useState } from 'react'
import { getUserPerformanceFromMock } from '../service/mockUser';
import { getUserPerformanceFromApi } from '../service/apiUser';
import { MockDataContext } from '../context/MockDataContext';
import { useOutletContext } from 'react-router-dom';
/**
 * 
 * @returns custom hook pour récupérer les performance de chaque utilisateur
 */

const usePerformance = () => {
  const { userId } = useOutletContext();
  const { useMock } = useContext(MockDataContext);
  const [performance, setPerformance] = useState();
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (useMock) {
          data = getUserPerformanceFromMock(userId);
          // console.log(data)
        } else {
          data = await getUserPerformanceFromApi(userId);
          // console.log(data)
        }
        setPerformance(data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      }
    };
    // console.log(performance);
    // console.log(performance?.kind);
    // console.log(performance?.data);
    fetchData();
  }, [useMock, userId]);
  return {performance, error};
}

export default usePerformance
