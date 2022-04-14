import React, { Fragment } from "react";
import styles from "./Header.module.css";
import Img from "../../assets/productivity.jpg";

const Header = () => {
  const user = null;
  return (
    <Fragment>
      <div className={styles.header}>
        <h1>TO-DO LIST</h1>
        <div>
          {user ? (
            <div>
              <h2>{user.result.name.charAt(0)}</h2>
              <button className={styles.ctmBtn}>Log out</button>
            </div>
          ) : (
            <div>
              <button className={styles.ctmBtn}>Log in</button>
              <button className={styles.ctmBtn}>Sign in</button>
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
