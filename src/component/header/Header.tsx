import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cn from "classnames";
import styles from "..header/Header.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from '../../component/auth/authAction'; // Relativer Pfad verwenden

const Header: FC = () => {
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(login({ username: 'kminchelle', password: '0lelplR' }))
  // }, []);

  return (
    <div className={styles.navbar}>
      <div className={cn(styles.navbar, styles.desktopMenu)}>
        {user?.id ?
          <>
            <span >Привет, {user?.firstName}! </span>
            <NavLink to="/" key="home">Home</NavLink>
            <NavLink to="youtube" key="youtube">Youtube</NavLink>
          </> :
          <NavLink to="login" key="login">Login</NavLink>
        }
      </div>
      <div className={cn(styles.navbar, styles.mobileMenu)}>
        <NavLink to="catCard" key="catCard">☰</NavLink>
      </div>
    </div>
  );
};

export default Header;