import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleLogin = async () => {

  try {

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    console.log(userCredential.user);

    alert("Login Successful");
   navigate("/app/dashboard");
  } catch (error) {

    console.log(error);

    alert(error.message);

  }

};
  const handleGoogleLogin = async () => {

  try {

    const result = await signInWithPopup(auth, provider);

    console.log(result.user);

    alert("Google Login Successful");
   navigate("/app/dashboard");
  } catch (error) {

    console.log(error);

    alert(error.message);

  }

};
  return (
    <div className="login-page">

      <section className="login-hero">
        <div className="login-container">
          <h2>Sign in to Echocare</h2>
          <p className="subtitle">Welcome back! Please sign in to continue</p>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <input type="email" 
          placeholder="Email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password"
           placeholder="Password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />

          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>
          <p className="register-text">
  Don't have an account?{" "}
  <span onClick={() => navigate("/register")}>
    Register
  </span>
</p>
        </div>
      </section>

    </div>
  );
};

export default Login;