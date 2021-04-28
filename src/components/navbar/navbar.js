import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import menuIcon from '../../assets/menu_icon.svg';
import closeIcon from '../../assets/close_icon.svg';

// this is a comment
const Navbar = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleDropDown = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div className={styles.baseContainer}>
      <div className={styles.bar}>
        <button onClick={toggleDropDown}>
          { isHidden ? <img className={styles.menuButtonImage} src={menuIcon} alt="toggle drop down menu" /> :
          <img className={styles.menuButtonImage} src={closeIcon} alt="toggle drop down menu" /> }
        </button>
      </div>
      <div style={isHidden ? {display: "none"} : {display: "flex"}} className={styles.dropDown}>
        <Link onClick={toggleDropDown} className={styles.navlink} to="/">Home</Link>
        <Link onClick={toggleDropDown} className={styles.navlink} to="/about">About</Link>
        <Link onClick={toggleDropDown} className={styles.navlink} to="/login">{props.isLoggedIn ? <>Profile</> : <>Login</> }</Link>
      </div>
    </div>
  )
};

export default Navbar;
