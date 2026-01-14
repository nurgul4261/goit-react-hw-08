import React from "react";
import styles from "../../components/LoginForm/LoginForm.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h2>Giriş Yap</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;