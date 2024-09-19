import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getDailyActivityFromMock } from "../service/mockUser";
import { getDailyActivityFromApi } from "../service/apiUser";
import { useOutletContext } from 'react-router-dom';

const useDailyActivity = () => {
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
            setDailyActivity(data);
        };
        // console.log(performance);
        fetchData();
    }, [useMock, userId]);
    return dailyActivity;
}
export default useDailyActivity
