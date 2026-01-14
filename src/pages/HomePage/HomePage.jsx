import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Telefon Rehberine Hoşgeldiniz</h1>
      <p>Giriş yaparak veya kayıt olarak rehberinizi yönetebilirsiniz.</p>
    </div>
  );
};

export default HomePage;