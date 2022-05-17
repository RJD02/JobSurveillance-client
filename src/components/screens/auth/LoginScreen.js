import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./LoginScreen.module.css";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:9000/api/auth/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={styles["login-screen"]}>
      <form className={styles["login-screen__form"]} onSubmit={loginHandler}>
        <h3 className={styles["login-screen__title"]}>Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password: <Link to="/forgotpassword">Forgot Password?</Link>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <span className={styles["login-screen__subtext"]}>
            Don't have an account? <Link to={"/register"}>Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
