import axios from "axios";


export const getUserDataFromApi = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      // console.log(response)
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };