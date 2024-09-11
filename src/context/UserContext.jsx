// import { createContext, useState} from 'react'
// import axios from 'axios';
// import PropTypes from 'prop-types';

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
  
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState(null);

//     const fetchUserData = async(userId) =>{
//         console.log('Fetching data for userId:', userId);
//         try{
//             // const response = await axios.get(`http://localhost:3000/user/${userId}`);
//             const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);

//             console.log(response);
//             console.log(response.data);
//             setUserData(response.data)
//         }
//         catch (error) {
//             console.error('Error fetching user data:', error);
//             setError(error.message);
//         }
//     }

//   return (
//         <UserContext.Provider value={{ userData, error, fetchUserData }}>
//             {children}
//         </UserContext.Provider>
//   )
// }
// UserProvider.propTypes = {
//     children : PropTypes.node.isRequired,
// }
// export { UserContext, UserProvider };

import React from "react";
/**
 * définir le contexte pour gérer l'état useMock, qui
 *  permet de basculer entre les données mock et l api.
 * 
 * Ce contexte crée une valeur par défaut pour useMock (qui est false par défaut, signifiant qu'on' utilises des données réelles) et une fonction vide setUseMock, qui sera remplacée par un véritable setter lorsque j'utiliseras dans mon application.
 * 
 * Il me permet de passer cette valeur (useMock) à d'autres composants de mon application sans avoir à les transmettre manuellement à chaque niveau.
 * 
 * permer d'avoir la flexibilité de basculer entre des données simulées (mock) et des données réelles,
 */
export const MockDataContext = React.createContext({
  useMock: false,
  setUseMock: () => {},
});