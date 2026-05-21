import React, { useEffect } from "react";
import "../css/Landing.css";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "– Voice-Based Healthcare",
        "– AI-Powered Assistance",
        "– Care That Listens"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="landing">
      <section className="hero-care">
        <div>
          <h1>
            EchoCare <span id="element"></span>
          </h1>

          <p className="subtitle">
            Secure patient records with intelligent voice-based access, built for doctors and patients
          </p>

          <button
            className="cta-btn"
            onClick={() => navigate("/home")}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;