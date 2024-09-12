
import { userPerformance, users, userSessions } from './../data/mockApi';

/** 
 * 
* Récupérer user information from mock data
**/
export const getUserDataFromMock = (userId) => {
    try {
      const mockUser = users.find((user) => user.data.id === Number(userId));
      // console.log(mockUser)
  
      if (mockUser) {
        // console.log(mockUser)
        return mockUser.data;
      } else {
        throw new Error("Utilisateur non trouvé dans les données mock");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  





  export const getUserPerformanceFromMock = (userId) => {
    try {
      const mockPerformance = userPerformance.find((performance) => performance.userId === Number(userId));
      // console.log(mockPerformance)
  
      if (mockPerformance) {
        return mockPerformance.data;
      } else {
        throw new Error("Utilisateur non trouvé dans les données mock");
      }
    } catch (error) {
      console.error(error);
    }
  };



  export const getUserAverageSessionFromMock = (userId) =>{
    try {
      const mockSession = userSessions.find((session) => session.userId === Number(userId));
      // console.log(mockSession)
  
      if (mockSession) {
        // console.log(mockSession)
        return mockSession.sessions;
      } else {
        throw new Error("Utilisateur non trouvé dans les données mock");
      }
    } catch (error) {
      console.error(error);
    }
  }