// export const transformeUserData = (data)=> {
//     return {
//         todayScore: data.todayScore || 0,
//         score: data.score || 0,
//       };
// }

// Format the data here
export const transformeUserData = (data)=> {
    return {
    todayScore: data.todayScore || 0,
    score: data.score || 0,
    ...data // Include any other properties you want to keep
  }
  }