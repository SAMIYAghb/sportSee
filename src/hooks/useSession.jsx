import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserAverageSessionFromMock } from "../service/mockUser";
import { getUserAverageSessionFromApi } from "../service/apiUser";
// import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const useSession = () => {
    // const userId = 12;
    // const { userId } = useParams();
    const { userId } = useOutletContext(); 
    const { useMock } = useContext(MockDataContext);
    const [sessions, setSessions] = useState([]);


    const dayOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

    useEffect(() => {
        const fetchData = async () => {
          let data;
          if (useMock) {
            data = getUserAverageSessionFromMock(userId);
            // console.log(data)
          } else {
            data = await getUserAverageSessionFromApi(userId);
            // console.log(data)
          }

          // Ensure data and data.sessions exist before proceeding
          if (data && data.sessions) {
            const transformDay = data.sessions.map((session) => ({
              ...session,
              day: dayOfTheWeek[session.day - 1], // Convert day number to corresponding day of the week
            }));
            setSessions(transformDay); // Set the transformed sessions
          } else {
            setSessions([]); // Fallback to an empty array if data is invalid
          }
        };
    
        // console.log(sessions);
        fetchData();
    
    
      }, [useMock, userId]);
    
      
    // console.log(sessions)
      return sessions;
    
}

export default useSession
