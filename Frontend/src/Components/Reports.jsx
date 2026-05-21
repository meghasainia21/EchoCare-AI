import { useState } from "react";
import "../css/Reports.css";

function Reports() {
  const [showTable, setShowTable] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);
 const reports = [

  {
    name: "Rahul Sharma",
    type: "Blood Test",
    visitId: "V101",
    date: "12 Apr 2026",
    status: "Normal",
    advice: "Stay hydrated and take rest",
    prescription: "Paracetamol 500mg",
  },

  {
    name: "Ananya Verma",
    type: "Skin Allergy",
    visitId: "V102",
    date: "13 Apr 2026",
    status: "Mild Infection",
    advice: "Avoid dust exposure and use moisturizer",
    prescription: "Cetirizine 10mg",
  },

  {
    name: "Rohan Mehta",
    type: "Heart Checkup",
    visitId: "V103",
    date: "14 Apr 2026",
    status: "Stable",
    advice: "Reduce oily food and exercise daily",
    prescription: "Aspirin 75mg",
  },

  {
    name: "Priya Singh",
    type: "Diabetes Test",
    visitId: "V104",
    date: "15 Apr 2026",
    status: "High Sugar",
    advice: "Maintain strict diet control",
    prescription: "Metformin 500mg",
  },

  {
    name: "Arjun Kapoor",
    type: "Eye Examination",
    visitId: "V105",
    date: "16 Apr 2026",
    status: "Normal",
    advice: "Reduce screen time",
    prescription: "Lubricating Eye Drops",
  },

  {
    name: "Sneha Patel",
    type: "Dental Checkup",
    visitId: "V106",
    date: "17 Apr 2026",
    status: "Cavity Detected",
    advice: "Avoid sugary foods",
    prescription: "Pain Relief Gel",
  },

  {
    name: "Vikram Joshi",
    type: "Orthopedic Consultation",
    visitId: "V107",
    date: "18 Apr 2026",
    status: "Minor Fracture",
    advice: "Avoid heavy lifting",
    prescription: "Calcium Supplements",
  },

  {
    name: "Neha Gupta",
    type: "Neurology Scan",
    visitId: "V108",
    date: "19 Apr 2026",
    status: "Observation Required",
    advice: "Take proper sleep",
    prescription: "Vitamin B12",
  },

  {
    name: "Aditya Roy",
    type: "General Checkup",
    visitId: "V109",
    date: "20 Apr 2026",
    status: "Normal",
    advice: "Maintain healthy lifestyle",
    prescription: "Multivitamins",
  },

  {
    name: "Kritika Malhotra",
    type: "Thyroid Test",
    visitId: "V110",
    date: "21 Apr 2026",
    status: "Thyroid Imbalance",
    advice: "Regular medication required",
    prescription: "Levothyroxine",
  },

  {
    name: "Aman Tiwari",
    type: "Chest X-Ray",
    visitId: "V111",
    date: "22 Apr 2026",
    status: "Mild Infection",
    advice: "Avoid cold beverages",
    prescription: "Azithromycin",
  },

  {
    name: "Simran Kaur",
    type: "ENT Checkup",
    visitId: "V112",
    date: "23 Apr 2026",
    status: "Throat Infection",
    advice: "Drink warm fluids",
    prescription: "Cough Syrup",
  },

  {
    name: "Kabir Nair",
    type: "Liver Function Test",
    visitId: "V113",
    date: "24 Apr 2026",
    status: "Stable",
    advice: "Avoid alcohol and junk food",
    prescription: "Liver Support Tablets",
  },

  {
    name: "Pooja Chawla",
    type: "Pregnancy Checkup",
    visitId: "V114",
    date: "25 Apr 2026",
    status: "Healthy",
    advice: "Regular prenatal care",
    prescription: "Iron Supplements",
  },

  {
    name: "Dev Malhotra",
    type: "Kidney Test",
    visitId: "V115",
    date: "26 Apr 2026",
    status: "Normal",
    advice: "Drink more water",
    prescription: "No medication required",
  },

  {
    name: "Ishita Rao",
    type: "Mental Health Session",
    visitId: "V116",
    date: "27 Apr 2026",
    status: "Stress Detected",
    advice: "Practice meditation daily",
    prescription: "Mild Anxiety Relief",
  },

  {
    name: "Yash Arora",
    type: "Blood Pressure Check",
    visitId: "V117",
    date: "28 Apr 2026",
    status: "High BP",
    advice: "Reduce salt intake",
    prescription: "Amlodipine",
  },

  {
    name: "Tanvi Desai",
    type: "Vitamin Test",
    visitId: "V118",
    date: "29 Apr 2026",
    status: "Vitamin D Deficiency",
    advice: "Sunlight exposure recommended",
    prescription: "Vitamin D3 Capsules",
  },

  {
    name: "Karan Oberoi",
    type: "Physiotherapy Session",
    visitId: "V119",
    date: "30 Apr 2026",
    status: "Recovering",
    advice: "Continue stretching exercises",
    prescription: "Pain Relief Spray",
  },

  {
    name: "Meera Sethi",
    type: "Skin Consultation",
    visitId: "V120",
    date: "1 May 2026",
    status: "Acne Detected",
    advice: "Use gentle skincare products",
    prescription: "Acne Control Cream",
  }

];

  
  const filtered = reports.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="reports-section">

    <div className="ai-text">
  Providing Smart Reports for {" "}
  <span className="text-rotate">
    <span>
      <span className="bg-teal">Patient</span>
      <span className="bg-red">Doctors</span>
      <span className="bg-blue">Clinics</span>
    </span>
  </span>
</div>
     
      <div className="report-cards">

        <div className="report-card" onClick={() => setShowTable(true)}>
          <h3>📄 View Reports</h3>
          <p>Access all patient medical reports</p>
        </div>

        <div className="report-card">
          <h3>🔍 Smart Search</h3>
          <p>Find reports instantly using filters</p>
        </div>

        <div className="report-card">
          <h3>⬇️ Download</h3>
          <p>Download reports securely anytime</p>
        </div>

      </div>
  
      {showTable && (
        <div className="report-content">

          <h1 className="reports-title">Patient Medical Reports</h1>

          <input
            className="search-box"
            placeholder="Search by patient name..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <table className="report-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Visit ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Prescription</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.type}</td>
                  <td>{r.visitId}</td>
                  <td>{r.date}</td>
                  <td>
                    <span className={`status ${r.status}`}>
                      {r.status}
                    </span>
                  </td>

                 
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => setSelectedReport(r)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
  <div className="activity-feed">

  <div className="feed-header">
    <h2>Live Activity Feed</h2>
    <span className="live-dot"></span>
  </div>

  <div className="feed-container">

    <div className="feed-item">
      <div className="feed-icon">📄</div>

      <div className="feed-info">
        <h4>
          Dr. Jain uploaded Rahul Sharma's Blood Test report
        </h4>

        <p>
          Result Status: Positive for Malaria • 2 mins ago
        </p>
      </div>
    </div>

    <div className="feed-item">
      <div className="feed-icon">🩺</div>

      <div className="feed-info">
        <h4>
          Dr. Verma reviewed ECG report of Ananya Verma
        </h4>

        <p>
          Critical heart rhythm detected • 5 mins ago
        </p>
      </div>
    </div>

    <div className="feed-item">
      <div className="feed-icon">💊</div>

      <div className="feed-info">
        <h4>
          Prescription updated for Aman Singh
        </h4>

        <p>
          Antibiotics dosage changed • 9 mins ago
        </p>
      </div>
    </div>

    <div className="feed-item">
      <div className="feed-icon">🧪</div>

      <div className="feed-info">
        <h4>
          Lab report generated for Neha Kapoor
        </h4>

        <p>
          Thyroid levels slightly elevated • 14 mins ago
        </p>
      </div>
    </div>

    <div className="feed-item">
      <div className="feed-icon">🚑</div>

      <div className="feed-info">
        <h4>
          Emergency report added by Dr. Khan
        </h4>

        <p>
          Accident trauma patient admitted • 18 mins ago
        </p>
      </div>
    </div>

  </div>

</div>
    
      {selectedReport && (
        <div className="popup-overlay">
          <div className="popup-box">

            <span
              className="close-btn"
              onClick={() => setSelectedReport(null)}
            >
              ✕
            </span>

            <h2>Doctor Advice</h2>

            <p><b>Advice:</b> {selectedReport.advice}</p>
            <p><b>Prescription:</b> {selectedReport.prescription}</p>

          </div>
        </div>
      )}

    </div>
  );
}

export default Reports;