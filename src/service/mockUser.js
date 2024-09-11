
import { users } from './../data/mockApi';

/** 
 * 
* Récupérer user information from mock data
**/
export const getUserDataFromMock = (userId) => {
    try {
      const mockUser = users.find((user) => user.data.id === Number(userId));
      console.log(mockUser)
  
      if (mockUser) {
        console.log(mockUser)
        return mockUser.data;
      } else {
        throw new Error("Utilisateur non trouvé dans les données mock");
      }
    } catch (error) {
      console.error(error);
    }
  };