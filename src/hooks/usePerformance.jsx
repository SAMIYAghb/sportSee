import { useContext, useEffect, useState } from 'react'
import { getUserPerformanceFromMock } from '../service/mockUser';
import { getUserPerformanceFromApi } from '../service/apiUser';
import { MockDataContext } from '../context/MockDataContext';
import { useOutletContext } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
/**
 * 
 * @returns custom hook pour récupérer les performance de chaque utilisateur
 */

const usePerformance = () => {
    // const { userId } = useParams();
    // const userId = 12;
    const { userId } = useOutletContext(); 
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
        // console.log(performance?.kind);
        // console.log(performance?.data);
        fetchData();
      }, [useMock, userId]);
      return performance;   
}

export default usePerformance
