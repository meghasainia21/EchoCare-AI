import { createContext, useState, useEffect } from "react";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {

  // 🔥 LOAD from localStorage
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  // ADD
  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  // DELETE
  const deletePatient = (index) => {
    const updated = patients.filter((_, i) => i !== index);
    setPatients(updated);
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient, deletePatient }}>
      {children}
    </PatientContext.Provider>
  );
};