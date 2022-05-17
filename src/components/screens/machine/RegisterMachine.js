import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./RegisterMachine.module.css";

const RegisterMachine = ({ history }) => {
  const [machineID, setMachineID] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (!localStorage.getItem("authToken")) {
      setError("Please login");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:9000/machine/",
        {
          machineID,
          type,
        },
        config
      );

      console.log(data);

      history.push();
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={styles["register-screen"]}>
      <form
        className={styles["register-screen__form"]}
        onSubmit={registerHandler}
      >
        <h3 className={styles["register-screen__title"]}>Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">MachineID</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter MachineID"
            value={machineID}
            onChange={(e) => {
              setMachineID(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Type of Machine</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterMachine;
