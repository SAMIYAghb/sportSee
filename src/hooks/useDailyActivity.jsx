import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getDailyActivityFromMock } from "../service/mockUser";
import { getDailyActivityFromApi } from "../service/apiUser";
import { useOutletContext } from 'react-router-dom';

const useDailyActivity = () => {
    const { userId } = useOutletContext(); 
    const { useMock } = useContext(MockDataContext);
    const [dailyActivity, setDailyActivity] = useState();
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
            let data;
            if (useMock) {
                data = getDailyActivityFromMock(userId);
                // console.log(data)
            } else {
                data = await getDailyActivityFromApi(userId);
                // console.log(data)
            }
            setDailyActivity(data);
        } catch (err) {
            setError(err.message || "An error occurred while fetching data.");
        }
        };
        // console.log(performance);
        fetchData();
    }, [useMock, userId]);
    return { dailyActivity, error };
}
export default useDailyActivity
