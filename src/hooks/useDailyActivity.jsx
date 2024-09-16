import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../context/MockDataContext";
import { getDailyActivityFromMock } from "../service/mockUser";
import { getDailyActivityFromApi } from "../service/apiUser";

const useDailyActivity = () => {
    const userId = 18;
    const { useMock } = useContext(MockDataContext);
    const [dailyActivity, setDailyActivity] = useState();
    // const [weights, setWeights] = useState([]);
    // const [calories, setCalories] = useState([]);
    // const [days, setDays] = useState([]);
    
    // Fonction pour extraire les poids et les calories des sessions
    // const extractData = (sessions) => {
    //     const days = [];
    //     const weights = [];
    //     const calories = [];

    //     sessions.forEach(session => {
    //         days.push(session.day);
    //         weights.push(session.kilogram);
    //         calories.push(session.calories);
    //     });

    //     setDays(days);
    //     setWeights(weights);
    //     setCalories(calories);
    // };

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
