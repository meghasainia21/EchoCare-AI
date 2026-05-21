import { useContext } from "react";
import { PatientContext } from "../Context/PatientContext";
import "../css/Patient.css";

function Patients() {

  const { patients, deletePatient } = useContext(PatientContext);

  // TOTAL PATIENTS
  const totalPatients = patients.length;

  // ADMITTED PATIENTS
  const admittedPatients = patients.filter(
    (p) => p.status === "Admitted"
  ).length;

  // EMERGENCY PATIENTS
  const emergencyPatients = patients.filter(
    (p) => p.risk === "High"
  ).length;

  return (
    <div className="patients-page">

    
      <h1 className="patient-header">
        Patient Records
      </h1>

      <div className="dashboard-cards">

        
        <div className="dashboard-card total-card">

          <div className="card-icon">
            👨‍⚕️
          </div>

          <div>
            <h2>Total Patients</h2>
            <h1>{totalPatients}</h1>
          </div>

        </div>

        {/* ADMITTED */}
        <div className="dashboard-card admitted-card">

          <div className="card-icon">
            🏥
          </div>

          <div>
            <h2>Admitted Patients</h2>
            <h1>{admittedPatients}</h1>
          </div>

        </div>

        {/* EMERGENCY */}
        <div className="dashboard-card emergency-card">

          <div className="card-icon">
            🚑
          </div>

          <div>
            <h2>Emergency Patients</h2>
            <h1>{emergencyPatients}</h1>
          </div>

        </div>

      </div>

      {/* SEARCH */}
      <input
        className="search-box"
        placeholder="Search patients..."
      />

      {/* TABLE */}
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Specialization</th>
            <th>Risk</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {patients.length === 0 ? (

            <tr>
              <td colSpan="7">
                No patients added
              </td>
            </tr>

          ) : (

            patients.map((p, i) => (

              <tr key={i}>

                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.specialization}</td>
                <td>{p.risk}</td>
                <td>{p.status}</td>

                <td>
                  <button
                    onClick={() => deletePatient(i)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default Patients;