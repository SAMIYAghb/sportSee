import { useContext, useEffect, useState } from 'react'
import { getUserPerformanceFromMock } from '../service/mockUser';
import { getUserPerformanceFromApi } from '../service/apiUser';
import { MockDataContext } from '../context/MockDataContext';
/**
 * 
 * @returns custom hook pour récupérer les performance de chaque utilisateur
 */

const usePerformance = () => {
    // const { userId } = useParams();
    const userId = 12;
    const { useMock } = useContext(MockDataContext);
    const [performance, setPerformance] =  useState();

    useEffect(() => {
        const fetchData = async () => {
          let data;
          if (useMock) {
            data = getUserPerformanceFromMock(userId);
            // console.log(data)
          } else {
            data = await getUserPerformanceFromApi(userId);
            // console.log(data)
          }
          setPerformance(data);
          
        };
    
        // console.log(performance);
        fetchData();
    
    
      }, [useMock, userId]);


      return performance;
    
}

export default usePerformance
