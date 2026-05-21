import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleRegister = async () => {

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log(userCredential.user);

      alert("Account Created Successfully");
        navigate("/signin");
    } catch (error) {

      console.log(error);

      alert(error.message);

    }

  };

  return (
    <div className="login-page">

      <section className="login-hero">

        <div className="login-container">

          <h2>Create Account</h2>

          <p className="subtitle">
            Register to continue
          </p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-btn"
            onClick={handleRegister}
          >
            Register
          </button>

        </div>

      </section>

    </div>
  );
};

export default Register;