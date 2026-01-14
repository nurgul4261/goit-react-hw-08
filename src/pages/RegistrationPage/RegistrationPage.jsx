import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <h2>Kayıt Ol</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;