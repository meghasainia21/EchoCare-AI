import { useContext, useState,useEffect  } from "react";
import { PatientContext } from "../Context/PatientContext";
import "../css/Dashboard.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Dashboard() {
  const { patients, addPatient } = useContext(PatientContext);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    specialization: "",
    risk: "",
  });
  const [time, setTime] = useState("");
const [date, setDate] = useState("");
const [day, setDay] = useState("");

useEffect(() => {
  const updateClock = () => {
    const now = new Date();

    setTime(
      now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );

    setDate(
      now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );

    setDay(
      now.toLocaleDateString("en-IN", {
        weekday: "long",
      })
    );
  };

  updateClock(); // run once
  const interval = setInterval(updateClock, 1000);

  return () => clearInterval(interval);
}, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePatient = () => {
    if (!form.name || !form.age) return;

    addPatient({
      ...form,
      age: Number(form.age), // 🔥 FIX
    });

    setShowModal(false);
    setForm({
      name: "",
      age: "",
      gender: "",
      specialization: "",
      risk: "",
    });
  };

  // ================= CALCULATIONS =================

  const total = patients.length;
  const highRisk = patients.filter(p => p.risk !== "Normal Risk").length;
  const normal = patients.filter(p => p.risk === "Normal Risk").length;
  
const quotes = [
  "- Strong body, steady mind. 🌱",
  "- Care today creates comfort tomorrow.",
  "- Breathe. Reset. Recover 🌿",
  "- Drink at least 8 glasses of water daily 💧",
  "- Small health steps today = big results tomorrow",
  "- Regular checkups save lives ❤️",
  "- Sleep is the best medicine",
  "- Move your body every day 🚶‍♂️",
  "- A healthy heart is a happy heart ❤️",
  "- Prevention is better than cure",
  "- Take a deep breath. Your body loves oxygen 💙",
];

const [quote, setQuote] = useState(quotes[0]);
useEffect(() => {
  const interval = setInterval(() => {
    const randomQuote =
      quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(randomQuote);
  }, 5000);

  return () => clearInterval(interval);
},[]);
  // ================= CHART DATA =================

// Gender Count
const genderCount = { Male: 0, Female: 0, Other: 0 };
patients.forEach(p => p.gender && genderCount[p.gender]++);

// Gender (Bar)
const genderData = {
  labels: Object.keys(genderCount),
  datasets: [
    {
      label: "",
      data: Object.values(genderCount),
      backgroundColor: ["#3b82f6", "#ec4899", "#10b981"],
    borderColor: ["#2563eb", "#db2777", "#059669"],
    borderWidth: 1,
    },
  ],
};

// Age Groups
const ageGroup = [0, 0, 0, 0];

patients.forEach(p => {
  const age = Number(p.age);

  if (age <= 18) ageGroup[0]++;
  else if (age <= 30) ageGroup[1]++;
  else if (age <= 50) ageGroup[2]++;
  else ageGroup[3]++;
});

const ageData = {
  labels: ["0-18", "19-30", "31-50", "50+"],
  datasets: [
    {
      label: "",
      data: ageGroup,
      backgroundColor: [
  "#22c55e", // green
  "#3b82f6", // blue
  "#f59e0b", // orange
  "#ec4899", // pink
],
    },
  ],
};

// Specialization (Pie)
const specCount = {};
patients.forEach(p => {
  if (!p.specialization) return;
  specCount[p.specialization] =
    (specCount[p.specialization] || 0) + 1;
});

const specData = {
  labels: Object.keys(specCount),
  datasets: [
    {
      label: "",
      data: Object.values(specCount),
      backgroundColor: [
  "#8b5cf6", // violet
  "#3b82f6", // blue
  "#22c55e", // green
  "#f59e0b", // orange
  "#ec4899", // pink
  "#ef4444", // red
  "#14b8a6", // teal
  "#eab308", // yellow
  "#6366f1", // indigo
  "#f97316", // dark orange
  "#06b6d4", // cyan
  "#84cc16", // lime
],
    },
  ],
};

// Risk Overview (NEW Pie)
const riskCount = {};
patients.forEach(p => {
  if (!p.risk) return;
  riskCount[p.risk] = (riskCount[p.risk] || 0) + 1;
});

const riskData = {
  labels: Object.keys(riskCount),
  datasets: [
    {
      data: Object.values(riskCount),
      backgroundColor: [
  "#00F5D4",
  "#F15BB5",
  "#FEE440",
  "#00BBF9",
  "#8B5CF6",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#3B82F6",
  "#EC4899"
],
    },
  ],
};

// Common Chart Options
const commonOptions = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      ticks: { color: "#94a3b8" },
      grid: { color: "rgba(255,255,255,0.05)" },
    },

    y: {
      ticks: { color: "#94a3b8" },
      grid: { color: "rgba(255,255,255,0.05)" },
    },
  },
};
  return (
  <div className="dashboard">

      <div className="topbar">
        <h1>Dashboard Analytics</h1>
        <button className="btn" onClick={() => setShowModal(true)}>
          + Add Patient
        </button>
      </div>

      {/* CARDS */}
      <div className="cards">
        <div className="card">Total Patients<span>{total}</span></div>
        <div className="card">High Risk Patients<span>{highRisk}</span></div>
        <div className="card">Normal Risk Patients<span>{normal}</span></div>
         <div className="card">Critical Alerts Today<span>10</span></div>
      </div>
    <div className="progress-section">

  {/* LEFT SIDE */}
  <div className="progress-grid">
    
    <div className="progress-card">
      Patients
      <div className="progress-bar">
        <div className="progress-fill blue"
          style={{ width: `${total ? (total / 200) * 100 : 0}%` }}
        />
      </div>
    </div>

    <div className="progress-card">
      High Risk
      <div className="progress-bar">
        <div className="progress-fill red"
          style={{ width: `${total ? (highRisk / total) * 100 : 0}%` }}
        />
      </div>
    </div>

    <div className="progress-card">
      Reports
      <div className="progress-bar">
        <div className="progress-fill green"
          style={{ width: "60%" }}
        />
      </div>
    </div>

    <div className="progress-card">
      Recovery Rate (%)
      <div className="progress-bar">
        <div className="progress-fill green"
          style={{ width: `${total ? (normal / total) * 100 : 0}%` }}
        />
      </div>
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="calendar-card">
    <div className="date">{date}</div>
    <div className="time">{time}</div>
    <div className="day">{day}</div>
  </div>

</div>
      {/* CHARTS */}
   <div className="charts">

  {/* PIE 1 */}
  <div className="chart-box">
    <h3 className="chart-title">Risk Overview</h3>
    <Pie data={riskData} options={commonOptions} />
  </div>

  {/* BAR 1 */}
  <div className="chart-box">
    <h3 className="chart-title">Gender Distribution</h3>
    <Bar data={genderData} options={commonOptions} />
  </div>

  {/* PIE 2 */}
  <div className="chart-box">
    <h3 className="chart-title">Medical Specialization Overview</h3>
    <Pie data={specData} options={commonOptions} />
  </div>

  {/* BAR 2 */}
  <div className="chart-box">
    <h3 className="chart-title">Patients By Age Group</h3>
    <Bar data={ageData} options={commonOptions} />
  </div>

</div>

<div className="footer-quote">
  <p>{quote}</p>
</div>
<footer class="app-footer">
  <p class="footer-line1">
    © 2026 Megha Sainia. All rights reserved
  </p>
  <p class="footer-line2">
    Crafted with ❤️ and care
  </p>
</footer>
     
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">

            <h2>Add Patient</h2>

            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />

            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select name="specialization" value={form.specialization} onChange={handleChange}>
              <option value="">Specialization</option>
              <option>Cardiology</option>
              <option>Neurology</option>
             <option>Orthopedics</option>
            <option>Dermatology</option>
             <option>Pediatrics</option>
             <option>General Physician</option>
             <option>Gynecology</option>
             <option>Psychiatry</option>
              <option>ENT</option>
             <option>Ophthalmology</option>
                  <option>Oncology</option>
             <option>Gastroenterology</option>
            </select>

            <select name="risk" value={form.risk} onChange={handleChange}>
              <option value="">Risk</option>
               <option>Normal Risk</option>
  <option>High Blood Pressure (Hypertension)</option>
  <option>Heart Disease Risk</option>
  <option>Diabetes</option>
  <option>Obesity</option>
  <option>Respiratory Issues (Asthma / COPD)</option>
  <option>Kidney Disease</option>
  <option>Liver Disorder</option>
  <option>Thyroid Disorder</option>
  <option>High Cholesterol</option>
            </select>
          <select
  name="status"
  value={form.status}
  onChange={handleChange}
>
  <option value="">Select Status</option>
  <option value="Admitted">Admitted</option>
  <option value="Discharged">Discharged</option>
</select>
            <div className="modal-buttons">
              <button onClick={savePatient}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;