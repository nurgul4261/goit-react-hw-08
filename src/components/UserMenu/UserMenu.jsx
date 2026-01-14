import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <span className={styles.username}>Hoşgeldin, {user.name}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logOut())}
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default UserMenu;