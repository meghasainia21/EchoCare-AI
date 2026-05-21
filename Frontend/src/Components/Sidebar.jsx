import { NavLink, useNavigate } from "react-router-dom";
import "../css/Landing.css";

function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    { path: "/app/dashboard", name: "Dashboard" },
    { path: "/app/patients", name: "Patients" },
    { path: "/app/doctors", name: "Doctors" },
    { path: "/app/appointments", name: "Appointments" },
    { path: "/app/reports", name: "Reports" },
    { path: "/app/voice", name: "Voice Assistant" },
    { path: "/app/help", name: "Quick Help Nearby" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/home"); 
  };

  return (
    <div className="sidebar">
      <h2>EchoCare</h2>

      <ul>
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        <button><li className="logout" onClick={handleLogout}>
          Logout
        </li></button>
      </ul>
    </div>
  );
}

export default Sidebar;