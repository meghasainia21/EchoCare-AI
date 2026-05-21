import { useState, useRef } from "react";
import "../css/VoiceAI.css";

export default function VoiceAI() {

  const [listening, setListening] = useState(false);

  const [userText, setUserText] = useState("...");
  
  const [aiText, setAiText] = useState(
    "Hello! How can I help you today?"
  );

  const recognitionRef = useRef(null);

  
  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;

    recognition.start();

    setListening(true);

    recognition.onresult = (event) => {

      const speech =
        event.results[0][0].transcript;

      setUserText(speech);

     getAIResponse(speech);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  };

  const getAIResponse = async (text) => {

  try {

    const response =
      await fetch(
        "http://localhost:4001/api/voice-ai",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: text
          })
        }
      );

    const data =
      await response.json();

    setAiText(data.reply);

    speak(data.reply);

  } catch (error) {

    console.log(error);

    setAiText(
      "Something went wrong."
    );

  }

};

  
  const speak = (text) => {

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "en-IN";

  speech.rate = 1;

  speech.pitch = 1;

  speech.volume = 1;

  const voices =
    window.speechSynthesis.getVoices();

  const femaleVoice =
    voices.find((voice) =>
      voice.name.includes("Female")
    );

  if (femaleVoice) {
    speech.voice = femaleVoice;
  }

  window.speechSynthesis.speak(speech);
};

  return (

    <div className="va-container">

     
      <div className="va-top">

        <h1 className="va-title">
          EchoCare Voice Assistant
        </h1>

        <p className="va-subtitle">
          Smart AI powered healthcare voice assistant
          for patients, doctors and emergency support.
        </p>

      </div>

      <div className="va-mic-wrapper">

        <div
          className={`va-mic ${
            listening ? "active" : ""
          }`}
          onClick={startListening}
        >
          🎤
        </div>

      </div>

     
      <p className="va-status">

        {listening
          ? "Listening..."
          : "Click mic to start"}

      </p>

      
      <div className="va-box">

        <h3>You said:</h3>

        <p>{userText}</p>

      </div>

      
      <div className="va-box ai">

        <h3>Assistant:</h3>

        <p>{aiText}</p>

      </div>

  
      <div className="how-section">

        <h2>How It Works</h2>

        <div className="how-grid">

          <div className="how-card">
            <span>🎤</span>
            <h3>Voice Input</h3>

            <p>
              Click the mic and speak naturally.
              The assistant captures your voice instantly.
            </p>
          </div>

          <div className="how-card">
            <span>🧠</span>
            <h3>AI Processing</h3>

            <p>
              Smart AI analyzes your request and
              understands healthcare related commands.
            </p>
          </div>

          <div className="how-card">
            <span>🔊</span>
            <h3>Voice Response</h3>

            <p>
              AI responds back with real-time voice
              assistance and smart guidance.
            </p>
          </div>

        </div>

      </div>

      {/* FEATURES */}
      <div className="ai-feature-section">

        <h2>Core Features</h2>

        <div className="ai-feature-grid">

          <div className="ai-feature">
            🚑 Emergency Support
          </div>

          <div className="ai-feature">
            📅 Appointment Assistance
          </div>

          <div className="ai-feature">
            👨‍⚕️ Doctor Recommendations
          </div>

          <div className="ai-feature">
            📄 Medical Report Access
          </div>

          <div className="ai-feature">
            💊 Medicine Reminder Support
          </div>

          <div className="ai-feature">
            🌐 Real-time Voice Interaction
          </div>

        </div>

      </div>

    </div>
  );
}