import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword1, setEnteredPassword1] = useState("");
  const [enteredPassword2, setEnteredPassword2] = useState("");

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const password1ChangeHandler = (event) => {
    setEnteredPassword1(event.target.value);
  };

  const password2ChangeHandler = (event) => {
    setEnteredPassword2(event.target.value);
  };

  const registerHandler = () => {
    if (
      enteredEmail.length > 0 &&
      enteredEmail.includes("@") &&
      enteredPassword1.length > 0 &&
      enteredPassword2.length > 0 &&
      enteredPassword1 === enteredPassword2
    ) {
      const user = {
        email: enteredEmail,
        password: enteredPassword1,
      };
      console.log(user);
      axios
        .post("http://localhost:8080/users/register", user)
        .then((response) => console.log("User registered"))
        .catch((error) => {
          console.error("There was an error!", error);
        });
      setEnteredEmail("");
      setEnteredPassword1("");
    } else {
      alert("WRONG INPUT");
    }
  };

  return (
    <form onSubmit={registerHandler}>
      <div className={styles.contents}>
        <div className={styles.content}>
          <label> E-mail</label>
          <input type="text" onChange={emailChangeHandler} />
        </div>
        <div className={styles.content}>
          <label>Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            onChange={password1ChangeHandler}
          />
          <button className={styles.passBtn} onClick={togglePassword}>
            show/hide
          </button>
        </div>
        <div className={styles.content}>
          <label>Repeat Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            onChange={password2ChangeHandler}
          />
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.customBtn} ${styles.submit}`}
            type="submit"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
