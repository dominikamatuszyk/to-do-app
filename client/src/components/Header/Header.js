import React, { Fragment } from "react";
import styles from "./Header.module.css";
import Img from "../../assets/productivity.jpg";

const Header = () => {
  const tokenStr = localStorage.getItem("jwtToken");
  const logoutHandler = () => {
    localStorage.setItem("jwtToken", "");
    window.location.reload(false);
  };

  return (
    <Fragment>
      <div className={styles.header}>
        <h1>TO-DO LIST</h1>
        <div>
          {tokenStr !== "" && (
            <div>
              {console.log(localStorage.getItem("username"))}
              <button className={styles.disabled}>
                {localStorage.getItem("username").charAt(0).toLocaleUpperCase()}
              </button>
              <button className={styles.ctmBtn} onClick={logoutHandler}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles["main-image"]}>
        <img src={Img} alt="laptop with coffee" />
      </div>
    </Fragment>
  );
};

export default Header;
