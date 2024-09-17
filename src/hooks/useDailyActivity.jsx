import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getDailyActivityFromMock } from "../service/mockUser";
import { getDailyActivityFromApi } from "../service/apiUser";
// import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const useDailyActivity = () => {
    // const userId = 12;
    // const { userId } = useParams();
    const { userId } = useOutletContext(); 
    const { useMock } = useContext(MockDataContext);
    const [dailyActivity, setDailyActivity] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            let data;
            if (useMock) {
                data = getDailyActivityFromMock(userId);
                // console.log(data)
            } else {
                data = await getDailyActivityFromApi(userId);
                // console.log(data)
            }
            // Supposons que data contient les sessions directement
            // if (data && data.sessions) {
            //     extractData(data.sessions);
            // }
            setDailyActivity(data);
        };
        // console.log(performance);
        fetchData();
    }, [useMock, userId]);
    return dailyActivity;
    // return { dailyActivity, days, weights, calories };
}
export default useDailyActivity
