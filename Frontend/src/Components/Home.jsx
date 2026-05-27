import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import developer from "../assets/developer.avif";

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
const [email, setEmail] = useState("");
  const handleSubscribe = async () => {

  try {

    const response = await fetch("https://echocare-ai.onrender.com/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    alert(data.message);

    setEmail("");

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }

};
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Voice-Based Access",
      desc: "Access patient records instantly using secure voice commands.",
      icon: "fa-solid fa-microphone",
    },
    {
      title: "Data Security",
      desc: "End-to-end encryption ensures complete privacy.",
      icon: "fa-solid fa-lock",
    },
    {
      title: "Doctor Friendly",
      desc: "Clean and intuitive UI for professionals.",
      icon: "fa-solid fa-user-doctor",
    },
    {
      title: "24/7 AI Support",
      desc: "Instant guidance anytime with AI assistance.",
      icon: "fa-regular fa-comment",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
          <button
    className="ai-btn"
    onClick={() => navigate("/freechat")}
  >
    <i class="fa-regular fa-comment"></i> AI Assistant
  </button>
        <div className="hero-content">
          <h1>Echocare</h1>
          <p className="tagline">"Where technology meets compassionate care"</p>
          <p className="subtext">
            Secure, voice-powered healthcare platform for doctors and patients.
          </p>

          <div className="new-hero-buttons">
            <button onClick={() => navigate("/signin")} className="new-btn primary">
              Login
            </button>
            <button onClick={() => setShowModal(true)} className="new-btn secondary">
              Dashboard
            </button>
            
          </div>
        </div>
         <div className="hero-right">
      <span className="text-rotate">
        <span>
          <span>WELCOME</span>
          <span>ECHOCARE</span>
            <span>LISTEN</span>
           <span>UNDERSTAND</span>
           <span>ANALYZE</span>
           <span>PROTECT</span>
             <span>ASSIST</span>
            <span>CARE</span>
        </span>
      </span>
    </div>

      </section>

      {/* FEATURES */}
      <section className="home-features reveal">
        <h2>Echocare at a Glance</h2>

        <div className="home-features-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className="home-feature-card reveal"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
         
      </section>

      {/* EXPERTS */}
      <section className="experts reveal">
        <h2>Our Experts</h2>

        <div className="experts-grid">
          <div className="expert-card reveal">
            <h3>Dr. Ananya Sharma</h3>
            <span>Senior Cardiologist</span>
            <p>
              Echocare has transformed the way I access patient data. 
        The voice-based system saves time and improves decision-making during critical cases.
            </p>
          </div>

          <div className="expert-card reveal" style={{ transitionDelay: "0.2s" }}>
            <h3>Dr. Rohan Mehta</h3>
            <span>General Physician</span>
            <p>The platform is intuitive and highly secure. 
        Echocare makes patient record management seamless while ensuring data privacy.</p>
          </div>
        </div>
      </section>

      <section className="developer reveal">
  <div className="developer-container">

    {/* LEFT IMAGE */}
    <div className="developer-image">
      <img src={developer} alt="Developer" />
    </div>

    {/* RIGHT CARD */}
    <div className="developer-card">
      <span className="dev-tag">Developed By</span>
      <h2>Megha Sainia</h2>
      <p>
        Driven by the idea of simplifying healthcare through technology, 
      I built Echocare to innovate secure, voice-powered access to medical data 
      and create a more connected healthcare experience.
      </p>
    </div>

  </div>
      </section>
      {/* FAQ */}
      <section className="faq reveal">
  <h2 className="faq-heading">Frequently Asked Questions</h2>

  {[
    {
      q: "Is Echocare secure for medical data?",
      a: "Yes. Echocare uses end-to-end encryption and secure authentication to ensure complete privacy and data protection.",
    },
    {
      q: "How does voice-based access work?",
      a: "Doctors and patients can access records using secure voice commands, making the process fast, hands-free, and efficient.",
    },
    {
      q: "Can patients access their own records?",
      a: "Absolutely. Echocare provides transparent and easy access for patients to view their medical history anytime.",
    },
    {
      q: "Is Echocare suitable for hospitals and clinics?",
      a: "Yes, it is scalable for individuals, clinics, and large hospitals.",
    },
    {
      q: "How accurate is the AI assistance?",
      a: "It provides guidance based on verified medical data and best practices.",
    },
    {
      q: "Can Echocare integrate with existing systems?",
      a: "Yes, it integrates with EHR systems via secure APIs.",
    },
    {
      q: "What happens during downtime?",
      a: "Secure backups and recovery systems minimize disruptions.",
    },
    {
      q: "Is patient data shared with third parties?",
      a: "No. Data is never shared and follows strict privacy standards.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className={`faq-item ${activeFAQ === i ? "active" : ""}`}
    >
      <button className="faq-question" onClick={() => toggleFAQ(i)}>
        {item.q}
        <span className="arrow">{activeFAQ === i ? "▴" : "▾"}</span>
      </button>

      <div className="faq-answer">
        <p>{item.a}</p>
      </div>
    </div>
  ))}
</section>
     
      <section className="subscribe reveal">
        <h2>Echocare</h2>
        <p> Subscribe for the latest updates, features, and health innovations</p>

        <div className="subscribe-box">
          <input type="email"
           placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
  <div className="footer-container">

    {/* LEFT SIDE */}
    <div className="footer-left">
      <div className="footer-brand">
        <h2>Echocare</h2>
        <p>
          Innovating healthcare with secure, voice-powered and AI-driven solutions
          for doctors and patients.
        </p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#experts">Our Experts</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#subscribe">Subscribe</a></li>
        </ul>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p><i class="fa-regular fa-envelope"></i> Email: support@echocare.com</p>
      <p><i class="fa-solid fa-phone"></i> Phone: +91 8840963045</p>
    </div>

  </div>

  <div className="new-footer-bottom">
    <p>© 2026 Echocare. Developed by Megha Sainia</p>
  </div>
</footer>

     
      {showModal && (
        <div className="modal">
          <div className="modal-card">
            <i class="fa-solid fa-file-shield"></i>
            <h2>Access Dashboard</h2>
            <p>Login to view personalized data and records</p>

            <div className="modal-actions">
              <button onClick={() => navigate("/signin")}>Login</button>
              <button onClick={() => navigate("/app/dashboard")}>
                Continue as Guest
              </button>
            </div>

            <span onClick={() => setShowModal(false)} className="close">
              ✕
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;