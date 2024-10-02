import axios from "axios";
import { transformPerformanceData } from "./transformPerformanceData";
import { transformDailyActivityData } from "./transformDailyActivityData";
import { transformeUserData } from "./transformeUserData";


export const getUserDataFromApi = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      // console.log(response)
      // console.log(response.data.data)
      return transformeUserData(response.data.data);
      // return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const getUserPerformanceFromApi = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
      // console.log(response)
      // console.log(response.data.data)
      // console.log(response.data.data.data)
      // console.log(response.data.data.kind)
      if (response.data?.data) {
        const transformedData = transformPerformanceData(response.data.data.data);
        return { ...response.data.data, data: transformedData };
      } else {
        throw new Error("Utilisateur non trouvé dans les données API");
      }
    } catch (error) {
      console.error(error);
    }
  };

  export const getUserAverageSessionFromApi = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
      // console.log(response.data)
      // console.log(response.data.data)

      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  export const getDailyActivityFromApi = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
      // console.log(response.data)
      // console.log(response.data.data)

      // return response.data.data;
      return transformDailyActivityData(response.data.data.sessions);
    } catch (error) {
      console.error(error);
    }
  }

