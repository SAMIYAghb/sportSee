// import { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// // import { MockDataContext } from "../../context/MockDataContext";
// import { getUserDataFromMock } from "../../service/mockUser";
// import { getUserDataFromApi } from "../../service/apiUser";
// import { MockDataContext } from "../../context/MockDataContext";
import ComingSoon from './../../components/CommingSoon/CommingSoon';

// const Profil = () => {
//   const { useMock } = useContext(MockDataContext);
//   // const { userId } = useSearchParams(); // Extract userId from URL
//   const [userData, setUserData] = useState(null);
//   const  userId = 12;
  
//   useEffect(() => {
//     const fetchData = async () => {
//       let data;
//       if (useMock) {
//         data = getUserDataFromMock(userId);
//       } else {
//         data = await getUserDataFromApi(userId);
//       }
//       setUserData(data);
//     };

//     fetchData();
//   }, [useMock, userId]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <h1>User Information</h1>
//       <p>Name: {userData.userInfos.firstName} {userData.userInfos.lastName}</p>
//       <p>Age: {userData.userInfos.age}</p>
//       <p>Score: {userData.todayScore || userData.score}</p>
//       <p>Calories: {userData.keyData.calorieCount}</p>
//     </div>
//   )
// }

// export default Profil



const Profil = () => {
  document.title = 'Profile - SportSee'

	return (
		<section className="profil">
			<ComingSoon />
		</section>
	)
}

export default Profil
