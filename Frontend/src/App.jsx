import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PatientProvider } from "./Context/PatientContext"; 

import Landing from "./Components/Landing";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Patients from "./Components/Patients";
import Doctors from "./Components/Doctors";
import Appointments from "./Components/Appointments";
import Reports from "./Components/Reports";
import VoiceAI from "./Components/VoiceAI";
import Help from "./Components/Help";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ChatAI from "./Components/ChatAI";
import Register from "./Components/Register";
function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="voice" element={<VoiceAI />} />
          <Route path="help" element={<Help />} />
          
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PatientProvider> 
        <Routes>
          
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/freechat" element={<ChatAI />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/*" element={<Layout />} />
        </Routes>
      </PatientProvider>
    </BrowserRouter>
  );
}

export default App;