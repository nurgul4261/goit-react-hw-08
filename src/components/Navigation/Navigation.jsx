import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Ana Sayfa
      </NavLink>
      <NavLink to="/contacts" className={styles.link}>
        Rehber
      </NavLink>
    </nav>
  );
};

export default Navigation;