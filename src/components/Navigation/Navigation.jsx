import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ isLoggedIn }) => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Ana Sayfa
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Rehber
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;