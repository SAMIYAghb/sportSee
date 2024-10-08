import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getUserAverageSessionFromMock } from "../service/mockUser";
import { getUserAverageSessionFromApi } from "../service/apiUser";
import { useOutletContext } from 'react-router-dom';

const useSession = () => {
  const { userId } = useOutletContext();
  const { useMock } = useContext(MockDataContext);
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState(null);


  const dayOfTheWeek = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    const fetchData = async () => {
      try {
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

      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      }
    };

    // console.log(sessions);
    fetchData();


  }, [useMock, userId]);


  // console.log(sessions)
  return {sessions, error};

}

export default useSession
