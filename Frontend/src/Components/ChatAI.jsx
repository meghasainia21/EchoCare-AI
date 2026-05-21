import "../css/Chat.css";
import { useState } from "react";

const EchoCareAI = () => {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text:
        "👋 Welcome to EchoCare AI. Describe your symptoms for intelligent medical guidance."
    }
  ]);

const sendMessage = async () => {

  if (input.trim() === "")
    return;

  const userMsg = {
    type: "user",
    text: input
  };

  // USER MESSAGE SHOW
  setMessages((prev) => [
    ...prev,
    userMsg
  ]);

  const currentInput = input;

  setInput("");

  
  // TYPING MESSAGE
  setMessages((prev) => [
    ...prev,
    {
      type: "bot",
      text: "Typing..."
    }
  ]);

  try {

    const response =
      await fetch(
        "http://localhost:4001/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: currentInput
          })
        }
      );

    const data =
      await response.json();

    
    
    setMessages((prev) => {

      const updated =
        [...prev];

      updated.pop();

      return [
        ...updated,
        {
          type: "bot",
          text: data.reply
        }
      ];

    });

  } catch (error) {

    console.log(error);

  }

};


  return (

    <div className="echo-page">

      

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>



      

      <nav className="navbar">

        <div className="logo">

          <div className="logo-circle">
            🤖
          </div>

          <div>
            <h2>EchoCare AI</h2>
            <p>Advanced Intelligent Healthcare System</p>
          </div>

        </div>


        <div className="nav-right">

          <button className="nav-btn">
            AI Powered
          </button>

          <button className="nav-btn secondary">
            Secure Platform
          </button>

        </div>

      </nav>



      {/* HERO */}

      <section className="hero-section">


        {/* LEFT */}

        <div className="hero-left">

          <div className="tag">
             Smart AI Healthcare Assistant
          </div>

          <h1>
            Next Gen
            <span> Medical </span>
            Experience
          </h1>

          <p>
            Experience AI-powered healthcare with real-time symptom intelligence, precision specialist matching, and a seamless futuristic care experience.
          </p>



          {/* BUTTONS */}

          <div className="hero-buttons">

            <button className="primary-btn">
              Start Diagnosis
            </button>

            <button className="glass-btn">
              Explore AI
            </button>

          </div>


<div className="feature-grid">

  <div className="feature-card">
    <span>⚡</span>
    <h3>Instant Symptom Check</h3>
    <p>
      Get quick AI-powered insights based on your symptoms in seconds.
    </p>
  </div>

  <div className="feature-card">
    <span>🔒</span>
    <h3>Secure & Private</h3>
    <p>
      Your medical conversations and data stay safe and confidential.
    </p>
  </div>

  <div className="feature-card">
    <span>🧠</span>
    <h3>Smart Health Insights</h3>
    <p>
      Receive personalized recommendations powered by intelligent AI.
    </p>
  </div>

  <div className="feature-card">
    <span>🩺</span>
    <h3>Find the Right Doctor</h3>
    <p>
      Connect with specialists best suited for your health concerns.
    </p>
  </div>

</div>


         <div className="stats-row">

  <div className="stat-box">
    <div className="stat-glow"></div>
    <h2>98%</h2>
    <h4>Prediction Accuracy</h4>
    <p>
      Smart AI models trained to deliver reliable health insights instantly.
    </p>
  </div>

  <div className="stat-box">
    <div className="stat-glow"></div>
    <h2>24/7</h2>
    <h4>Always Available</h4>
    <p>
      Access healthcare guidance anytime without waiting for appointments.
    </p>
  </div>

  <div className="stat-box">
    <div className="stat-glow"></div>
    <h2>50K+</h2>
    <h4>Users Assisted</h4>
    <p>
      Thousands trust EchoCare AI for faster and smarter medical support.
    </p>
  </div>

</div>
        </div>
        <div className="chat-side">

         
          <div className="floating-card">
            💙 Trusted by Modern Patients
          </div>


          <div className="chat-card">

            <div className="chat-top">

              <div className="chat-profile">

                <div className="bot-icon">
                  🤖
                </div>

                <div>
                  <h3>EchoCare AI</h3>
                  <span>Online Medical Assistant</span>
                </div>

              </div>


              <div className="online-dot">
                ● Live
              </div>

            </div>

            <div className="quick-box">

              <button>
                Chest Pain
              </button>

              <button>
                Fever
              </button>

              <button>
                Anxiety
              </button>

              <button>
                Skin Rash
              </button>

            </div>



           

            <div className="chat-body">

              {
                messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`message ${msg.type}`}
                  >

                    <div className="bubble">
                      {msg.text}
                    </div>

                  </div>

                ))
              }

            </div>



           

            <div className="chat-input">

              <input
                type="text"
                placeholder="Describe symptoms..."
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
              />

              <button
                onClick={sendMessage}
              >
                Send
              </button>

            </div>

          </div>

        </div>
      
      </section>
  <footer className="mini-footer">

  <div className="mini-footer-top">

    <div className="mini-brand">
      <div className="mini-logo"></div>
      <h2>EchoCare AI</h2>
    </div>

    <div className="mini-links">
      <a href="/">Features</a>
      <a href="/">Doctors</a>
      <a href="/">Privacy</a>
      <a href="/">Support</a>
    </div>

  </div>

  <div className="mini-divider"></div>

  <div className="mini-footer-bottom">

    <p>
      © 2026 EchoCare AI • Smart Healthcare Assistant
    </p>

    <div className="mini-socials">
      <a href="/">𝕏</a>
      <a href="/">◉</a>
      <a href="/">⌘</a>
    </div>

  </div>

</footer>
    </div>

  );
};

export default EchoCareAI;