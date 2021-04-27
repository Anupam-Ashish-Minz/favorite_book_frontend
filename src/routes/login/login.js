import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.baseContainer}>
      <form action="/login" method="POST">
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" />
        <button className="loginButton" type="submit">login</button>
        <Link className={styles.navlink} to="/register" >Don't have a account sign up</Link>
      </form>
    </div>
  );
};

export default Login;
