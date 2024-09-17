
// import { useEffect ,useState} from 'react';
// import { getUserDataFromMock } from './../service/mockUser';
// import { getUserDataFromApi } from './../service/apiUser';
// // import { useParams } from 'react-router-dom';


// const useAccountsData = (useMock = false) => {
//     const [users, setUsers] = useState([]);
//     // const { userId } = useParams();
//     useEffect(() => {
//         const fetchUsers = async () => {
//             const userIds = [12, 18];
//             const fetchedUsers = [];
      
//             for (const id of userIds) {
//               try {
//                 const userData = useMock
//                   ? await getUserDataFromMock(id)
//                   : await getUserDataFromApi(id);
//                 fetchedUsers.push(userData);
//                 console.log(users)
//               } catch (error) {
//                 console.error(
//                   `Erreur lors de la récupération des données de l'utilisateur: ${error.message}`
//                 );
//               }
//             }
      
//             setUsers(fetchedUsers);
//           };
      
//           fetchUsers();
//     }, [useMock])
    
// }

// export default useAccountsData
