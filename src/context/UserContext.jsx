import { createContext, useState} from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const fetchUserData = async(userId) =>{
        try{
            const response = await axios.get(`http://localhost:3000/user/${userId}`);
            console.log(response)
            console.log(response.data)
            setUserData(response.data)
        }
        catch (error) {
            setError(error.message);
        }
    }

  return (
        <UserContext.Provider value={{ userData, error, fetchUserData }}>
            {children}
        </UserContext.Provider>
  )
}
UserProvider.propTypes = {
    children : PropTypes.node.isRequired,
}
export { UserContext, UserProvider };
