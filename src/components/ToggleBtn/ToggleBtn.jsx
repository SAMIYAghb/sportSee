import  { useState } from 'react';
import styles from './ToggleBtn.module.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
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

export default ToggleSwitch;
