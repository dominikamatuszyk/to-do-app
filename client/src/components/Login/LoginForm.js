import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = () => {
    console.log(
      enteredEmail.length,
      enteredEmail.includes("@"),
      enteredPassword.toString().length
    );
    if (
      enteredEmail.length > 0 &&
      enteredEmail.includes("@") &&
      enteredPassword.toString().length > 0
    ) {
      const user = {
        email: enteredEmail,
        password: enteredPassword,
      };
      axios
        .post("http://localhost:8080/users/login", user)
        .then((token) =>
          localStorage.setItem("jwtToken", JSON.stringify(token)),
          localStorage.setItem("username", user.email)
        )
        .then((response) => console.log("User logged in"))
        .catch((error) => {
          console.error("There was an error!", error);
          alert("unsuccessful");
        });
      setEnteredEmail("");
      setEnteredPassword("");
    } else {
      alert("WRONG INPUT");
    }
    window.location.reload(false);
  };

  return (
    <form onSubmit={loginHandler}>
      <div className={styles.contents}>
        <div className={styles.content}>
          <label> E-mail</label>
          <input type="text" onChange={emailChangeHandler} />
        </div>
        <div className={styles.content}>
          <label>Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            onChange={passwordChangeHandler}
          />
          <button className={styles.passBtn} onClick={togglePassword}>
            show/hide
          </button>
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.customBtn} ${styles.submit}`}
            type="submit"
          >
            Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
