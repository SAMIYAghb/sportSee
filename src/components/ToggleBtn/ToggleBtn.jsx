import  { useState } from 'react';
import styles from './ToggleBtn.module.css';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';


//The onToggle is passed from the Sidebar component, and the button toggles between user 12 and user 18.
const ToggleBtn = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();
  
  const toggleSwitch = () => {
    const newUserId = !isOn ? 18 : 12;
    setIsOn(!isOn);
    // onToggle(!isOn ? 18 : 12); // Pass the userId to the onToggle function
    onToggle(newUserId); // Passe l'`userId` à la fonction `onToggle`
    navigate(`/user/${newUserId}`); // Change l'URL
  };

  return (
    <div
      className={`${styles.toggle} ${isOn ? styles.on : ''}`}
      onClick={toggleSwitch}
    >
      <span className={styles.number}>{isOn ? '18' : '12'}</span>
      <div className={styles.circle}></div>
    </div>
  );
};
ToggleBtn.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
export default  ToggleBtn;
