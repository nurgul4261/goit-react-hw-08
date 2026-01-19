import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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