import { useState } from "react";
import "../css/Doctors.css";
import doctorMale from "../assets/doctor-male.webp";
import doctorFemale from "../assets/doctor-female.webp";

const data = [
  {
    name: "General Physician",
    desc: "Trusted first contact for overall health, infections, and routine checkups",

    docs: [
      {
        name: "Dr. Ankit Sharma",
        degree: "MBBS, MD (Internal Medicine)",
        rating: "4.8",
        exp: "10+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 6PM",
        img: doctorMale,
      },

      {
        name: "Dr. Neha Singh",
        degree: "MBBS, PGDGM",
        rating: "4.6",
        exp: "8+ yrs Exp.",
        status: "🔴 Not Available",
        time: "10AM - 5PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Rahul Verma",
        degree: "MBBS, MD (General Medicine)",
        rating: "4.9",
        exp: "15+ yrs Exp.",
        status: "🟢 Available",
        time: "11AM - 7PM",
        img: doctorMale,
      },

      {
        name: "Dr. Priya Kapoor",
        degree: "MBBS, DNB",
        rating: "4.7",
        exp: "8+ yrs Exp.",
        status: "🟢 Available",
        time: "9AM - 4PM",
        img: doctorFemale,
      },
    ],
  },

  {
    name: "Cardiologist",
    desc: "Experienced in diagnosing heart conditions, BP, and cardiac health",

    docs: [
      {
        name: "Dr. Arjun Mehta",
        degree: "MBBS, DM (Cardiology)",
        rating: "4.9",
        exp: "14+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 6PM",
        img: doctorMale,
      },

      {
        name: "Dr. Kavita Sharma",
        degree: "MBBS, MD, DM (Cardiology)",
        rating: "4.7",
        exp: "11+ yrs Exp.",
        status: "🟢 Available",
        time: "9AM - 4PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Rohit Verma",
        degree: "MBBS, DM (Cardiology)",
        rating: "4.8",
        exp: "13+ yrs Exp.",
        status: "🔴 Not Available",
        time: "11AM - 7PM",
        img: doctorMale,
      },

      {
        name: "Dr. Neha Gupta",
        degree: "MBBS, DNB (Cardiology)",
        rating: "4.6",
        exp: "9+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 5PM",
        img: doctorFemale,
      },
    ],
  },

  {
    name: "Dermatologist",
    desc: "Advanced skin, hair, and nail care with modern dermatology treatment.",

    docs: [
      {
        name: "Dr. Riya Khanna",
        degree: "MBBS, MD (Dermatology)",
        rating: "4.8",
        exp: "9+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 5PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Aman Malhotra",
        degree: "MBBS, DDVL",
        rating: "4.7",
        exp: "8+ yrs Exp.",
        status: "🟡 Limited Slots",
        time: "11AM - 6PM",
        img: doctorMale,
      },

      {
        name: "Dr. Sneha Kapoor",
        degree: "MBBS, MD (Skin & VD)",
        rating: "4.9",
        exp: "11+ yrs Exp.",
        status: "🟢 Available",
        time: "9AM - 4PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Rahul Bansal",
        degree: "MBBS, DNB (Dermatology)",
        rating: "4.6",
        exp: "7+ yrs Exp.",
        status: "🔴 Not Available",
        time: "10AM - 3PM",
        img: doctorMale,
      },
    ],
  },

  {
    name: "ENT Specialist",
    desc: "Expert care for sinus, hearing, throat, and ear-related problems.",

    docs: [
      {
        name: "Dr. Rakesh Malhotra",
        degree: "MBBS, MS (ENT)",
        rating: "4.7",
        exp: "12+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 6PM",
        img: doctorMale,
      },

      {
        name: "Dr. Neha Arora",
        degree: "MBBS, DNB (ENT)",
        rating: "4.8",
        exp: "10+ yrs Exp.",
        status: "🟢 Available",
        time: "9AM - 3PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Amit Bansal",
        degree: "MBBS, MS (ENT)",
        rating: "4.6",
        exp: "9+ yrs Exp.",
        status: "🔴 Not Available",
        time: "11AM - 7PM",
        img: doctorMale,
      },

      {
        name: "Dr. Pooja Nair",
        degree: "MBBS, MS (ENT)",
        rating: "4.9",
        exp: "14+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 5PM",
        img: doctorFemale,
      },
    ],
  },

  {
    name: "Gastroenterologist",
    desc: "Expert care for stomach, liver, and digestive health disorders with gastroenterology treatment",

    docs: [
      {
        name: "Dr. Manav Bhattacharya",
        degree: "MBBS, DM (Gastroenterology)",
        rating: "4.8",
        exp: "13+ yrs Exp.",
        status: "🟢 Available",
        time: "10AM - 6PM",
        img: doctorMale,
      },

      {
        name: "Dr. Radhika Narayanan",
        degree: "MBBS, MD, DM (Gastroenterology)",
        rating: "4.7",
        exp: "11+ yrs Exp.",
        status: "🟡 Limited Slots",
        time: "9AM - 4PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Ishani Sengupta",
        degree: "MBBS, MD (Gastroenterology)",
        rating: "4.6",
        exp: "9+ yrs Exp.",
        status: "🔴 Not Available",
        time: "10AM - 3PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Devansh Purohit",
        degree: "MBBS, DM (Gastroenterology)",
        rating: "4.9",
        exp: "15+ yrs Exp.",
        status: "🟢 Available",
        time: "11AM - 7PM",
        img: doctorMale,
      },
    ],
  },

  {
    name: "Gynecologist",
    desc: "Comprehensive women’s healthcare from routine exams to reproductive care",

    docs: [
      {
        name: "Dr. Meera Iyer",
        degree: "MBBS, MD (Obstetrics & Gynecology)",
        rating: "4.9",
        exp: "14+ yrs Exp.",
        status: "🟢 Available",
        time: "9AM - 3PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Shalini Gupta",
        degree: "MBBS, DGO",
        rating: "4.7",
        exp: "10+ yrs Exp.",
        status: "🟡 Limited Slots",
        time: "10AM - 6PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Anjali Sharma",
        degree: "MBBS, MD (Gynecology)",
        rating: "4.8",
        exp: "12+ yrs Exp.",
        status: "🟢 Available",
        time: "11AM - 5PM",
        img: doctorFemale,
      },

      {
        name: "Dr. Pooja Bhatia",
        degree: "MBBS, DNB (Obstetrics & Gynecology)",
        rating: "4.6",
        exp: "8+ yrs Exp.",
        status: "🟢 Available",
        time: "9AM - 4PM",
        img: doctorFemale,
      },
    ],
  },
  {
  name: "Psychiatrist",
  desc: "Professional mental healthcare support for emotional wellness, stress, anxiety, and therapy.",

  docs: [
    {
      name: "Dr. Aarav Choudhury",
      degree: "MBBS, MD (Psychiatry)",
      rating: "4.8",
      exp: "12+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Meera Krishnamurthy",
      degree: "MBBS, DPM",
      rating: "4.7",
      exp: "10+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 4PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Dev Mallick",
      degree: "MBBS, MD (Psychiatry)",
      rating: "4.9",
      exp: "15+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 7PM",
      img: doctorMale,
    },

    {
      name: "Dr. Tanvi Chitnis",
      degree: "MBBS, MD (Psychiatry)",
      rating: "4.6",
      exp: "8+ yrs Exp.",
      status: "🔴 Not Available",
      time: "10AM - 3PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Nikhil Suryavanshi",
      degree: "MBBS, DNB (Psychiatry)",
      rating: "4.8",
      exp: "11+ yrs Exp.",
      status: "🟢 Available",
      time: "12PM - 8PM",
      img: doctorMale,
    },

    {
      name: "Dr. Aditi Jhaveri",
      degree: "MBBS, MD (Psychiatry)",
      rating: "4.7",
      exp: "9+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "10AM - 5PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Karthik Subramanian",
      degree: "MBBS, MD (Psychiatry)",
      rating: "4.9",
      exp: "14+ yrs Exp.",
      status: "🟢 Available",
      time: "9AM - 4PM",
      img: doctorMale,
    },

    {
      name: "Dr. Rituparna Basu",
      degree: "MBBS, DPM",
      rating: "4.8",
      exp: "13+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 6PM",
      img: doctorFemale,
    },
  ],
},

{
  name: "Neurologist",
  desc: "Specialized treatment for brain, nerve, spinal cord, and neurological disorders.",

  docs: [
    {
      name: "Dr. Aditya Menon",
      degree: "MBBS, DM (Neurology)",
      rating: "4.9",
      exp: "15+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Radhika Nair",
      degree: "MBBS, MD, DM (Neurology)",
      rating: "4.8",
      exp: "12+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 3PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Kunal Bansal",
      degree: "MBBS, DNB (Neurology)",
      rating: "4.7",
      exp: "9+ yrs Exp.",
      status: "🔴 Not Available",
      time: "11AM - 7PM",
      img: doctorMale,
    },

    {
      name: "Dr. Sneha Deshmukh",
      degree: "MBBS, DM (Neurology)",
      rating: "4.8",
      exp: "11+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 5PM",
      img: doctorFemale,
    },
  ],
},
{
  name: "Pediatrician",

  desc: "Experienced child healthcare specialists for newborn care, and children's wellness",

  docs: [
    {
      name: "Dr. Aarush Mehta",
      degree: "MBBS, MD (Pediatrics)",
      rating: "4.8",
      exp: "12+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Sneha Kapoor",
      degree: "MBBS, DCH",
      rating: "4.7",
      exp: "10+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 4PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Vivaan Rao",
      degree: "MBBS, MD (Pediatrics)",
      rating: "4.9",
      exp: "15+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 7PM",
      img: doctorMale,
    },

    {
      name: "Dr. Ananya Iyer",
      degree: "MBBS, MD (Pediatrics)",
      rating: "4.6",
      exp: "8+ yrs Exp.",
      status: "🔴 Not Available",
      time: "10AM - 3PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Kunal Sharma",
      degree: "MBBS, DNB (Pediatrics)",
      rating: "4.8",
      exp: "11+ yrs Exp.",
      status: "🟢 Available",
      time: "12PM - 8PM",
      img: doctorMale,
    },

    {
      name: "Dr. Riya Bansal",
      degree: "MBBS, MD (Pediatrics)",
      rating: "4.7",
      exp: "9+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "10AM - 5PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Arjun Desai",
      degree: "MBBS, MD (Pediatrics)",
      rating: "4.9",
      exp: "14+ yrs Exp.",
      status: "🟢 Available",
      time: "9AM - 4PM",
      img: doctorMale,
    },

    {
      name: "Dr. Mehak Verma",
      degree: "MBBS, DCH",
      rating: "4.8",
      exp: "13+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 6PM",
      img: doctorFemale,
    },
  ],
},
{
  name: "Oncologist",
  desc: "Advanced cancer diagnosis, chemotherapy, radiation, and oncology care specialists.",

  docs: [
    {
      name: "Dr. Arvind Bhagat",
      degree: "MBBS, DM (Medical Oncology)",
      rating: "4.9",
      exp: "14+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Shalini Grover",
      degree: "MBBS, MD (Oncology)",
      rating: "4.8",
      exp: "12+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 4PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Kunal Bhatia",
      degree: "MBBS, DM (Medical Oncology)",
      rating: "4.7",
      exp: "11+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 7PM",
      img: doctorMale,
    },

    {
      name: "Dr. Vaishali Iyer",
      degree: "MBBS, MD (Radiation Oncology)",
      rating: "4.6",
      exp: "9+ yrs Exp.",
      status: "🔴 Not Available",
      time: "10AM - 3PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Devendra Rathore",
      degree: "MBBS, DM (Oncology)",
      rating: "4.8",
      exp: "13+ yrs Exp.",
      status: "🟢 Available",
      time: "12PM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Poonam Aggarwal",
      degree: "MBBS, MD (Medical Oncology)",
      rating: "4.7",
      exp: "10+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 5PM",
      img: doctorFemale,
    },
  ],
},

{
  name: "Orthopedics",
  desc: "Expert treatment for bones, joints, fractures, arthritis, and mobility problems.",

  docs: [
    {
      name: "Dr. Rohan Kapoor",
      degree: "MBBS, MS (Orthopedics)",
      rating: "4.8",
      exp: "12+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Amit Tandon",
      degree: "MBBS, MS (Orthopedics)",
      rating: "4.9",
      exp: "15+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 7PM",
      img: doctorMale,
    },

    {
      name: "Dr. Neha Sood",
      degree: "MBBS, MS (Orthopedics)",
      rating: "4.6",
      exp: "8+ yrs Exp.",
      status: "🔴 Not Available",
      time: "10AM - 3PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Karan Malhotra",
      degree: "MBBS, D.Ortho",
      rating: "4.8",
      exp: "11+ yrs Exp.",
      status: "🟢 Available",
      time: "12PM - 8PM",
      img: doctorMale,
    },

    {
      name: "Dr. Pooja Chatterjee",
      degree: "MBBS, MS (Orthopedics)",
      rating: "4.7",
      exp: "10+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 5PM",
      img: doctorFemale,
    },
  ],
},

{
  name: "Ophthalmologist",
  desc: "Specialized eye care experts for vision, cataract, retina, and laser treatments.",

  docs: [
    {
      name: "Dr. Siddharth Venkataraman",
      degree: "MBBS, MS (Ophthalmology)",
      rating: "4.8",
      exp: "13+ yrs Exp.",
      status: "🟢 Available",
      time: "10AM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Ishita Mukherjee",
      degree: "MBBS, DNB (Ophthalmology)",
      rating: "4.7",
      exp: "10+ yrs Exp.",
      status: "🟡 Limited Slots",
      time: "9AM - 4PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Pranav Deshpande",
      degree: "MBBS, MS (Ophthalmology)",
      rating: "4.9",
      exp: "15+ yrs Exp.",
      status: "🟢 Available",
      time: "11AM - 7PM",
      img: doctorMale,
    },

    {
      name: "Dr. Roshni Pillai",
      degree: "MBBS, MS (Ophthalmology)",
      rating: "4.6",
      exp: "9+ yrs Exp.",
      status: "🔴 Not Available",
      time: "10AM - 3PM",
      img: doctorFemale,
    },

    {
      name: "Dr. Advaith Reddy",
      degree: "MBBS, DO (Ophthalmology)",
      rating: "4.8",
      exp: "12+ yrs Exp.",
      status: "🟢 Available",
      time: "12PM - 6PM",
      img: doctorMale,
    },

    {
      name: "Dr. Tanisha Bhardwaj",
      degree: "MBBS, MS (Ophthalmology)",
      rating: "4.9",
      exp: "14+ yrs Exp.",
      status: "🟢 Available",
      time: "9AM - 5PM",
      img: doctorFemale,
    },
  ],
},
];

export default function Doctors() {
  
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <div className="doctors-section">
      <h1 className="doctors-title">Browse Doctors by Specialization</h1>
      <p className="doctor-sub">Find verified specialists for your healthcare needs here</p>

     <div className="new-doctor-grid">
  {data.map((item, i) => (
    <div key={i} className="new-doctor-card">
      
      <h2>{item.name}</h2>

      <button
        className="new-doctor-btn"
        onClick={() => setSelectedDoctor(item)}
      >
        Click here for doctors
      </button>

      <p>{item.desc}</p>

    </div>
  ))}
</div>
      
    {selectedDoctor && (
  <div className="new-doctor-modal">

    <div className="new-doctor-modal-content">

      <span
        className="close-btn"
        onClick={() => setSelectedDoctor(null)}
      >
        ✖
      </span>

      <h2 className="new-modal-title">
        {selectedDoctor.name} Specialists
      </h2>

      <div className="new-modal-grid">
        {selectedDoctor.docs.map((doc, i) => (

          <div key={i} className="new-doctor-profile-card">

            <img
              src={doc.img}
              alt={doc.name}
              className="new-doc-doctor-img"
            />

            <h3>{doc.name}</h3>

            <p className="degree">{doc.degree}</p>

            <p className="spec">{selectedDoctor.name}</p>

            <div className="info">
              <span>⭐ {doc.rating}</span>
              <span>{doc.exp}</span>
            </div>

            <div className="extra">
              <span>{doc.status}</span>
              <span>🕒 {doc.time}</span>
            </div>

            <button className="bookNowBtn">
              Know More
            </button>

          </div>

        ))}
      </div>

    </div>

  </div>
)}
    </div>
  );
}