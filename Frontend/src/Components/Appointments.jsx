import React, { useEffect, useState } from "react";
import "../css/Appointments.css";

const helplines = [
  "🚨 Emergency: 112",
    "🚑 Ambulance: 102",
    "🧑‍⚕️ Health Helpline: 1075",
    "👩 Women Helpline: 1091",
    "🧒 Child Helpline: 1098",
    "🧠 Mental Health: 9152987821",
    "❤️ Blood Bank Helpline: 104",
    "🦠 COVID Helpline: 1075",
    "🚭 Tobacco Quitline: 1800-11-2356",
    "👴 Senior Citizen Helpline: 14567",
    "🆘 Disaster Management: 108",
    "🧬 Organ Donation Helpline: 1800-103-7100",
    "🧘 Wellness & AYUSH: 14443",
];

const doctorDatabase = {
  Physician: ["Dr. Ankit Sharma", "Dr. Neha Singh", "Dr. Rahul Verma","Dr. Priya Kapoor"],
  Cardiologist: ["Dr. Arjun Mehta", "Dr. Kavita Sharma","Dr. Rohit Verma","Dr. Neha Gupta"],
  Dermatologist: ["Dr. Riya Khanna", "Dr. Aman Malhotra ","Dr. Sneha Kapoor","Dr. Rahul Bansal"],
  ENT: [
    "Dr. Rakesh Malhotra",
    "Dr. Neha Arora",
    "Dr. Amit Bansal",
    "Dr. Pooja Nair",
  ],

  Gastroenterologist: [
    "Dr. Manav Bhattacharya",
    "Dr. Radhika Narayanan",
    "Dr. Ishani Sengupta",
    "Dr. Devansh Purohit",
  ],

  Gynecologist: [
    "Dr. Meera Iyer",
    "Dr. Shalini Gupta",
    "Dr. Anjali Sharma",
    "Dr. Pooja Bhatia",
  ],

  Psychiatrist: [
    "Dr. Aarav Choudhury",
    "Dr. Meera Krishnamurthy",
    "Dr. Dev Mallick",
    "Dr. Tanvi Chitnis",
    "Dr. Nikhil Suryavanshi",
    "Dr. Aditi Jhaveri",
    "Dr. Karthik Subramanian",
    "Dr. Rituparna Basu",
  ],

  Neurologist: [
    "Dr. Aditya Menon",
    "Dr. Radhika Nair",
    "Dr. Kunal Bansal",
    "Dr. Sneha Deshmukh",
  ],

  Pediatrician: [
    "Dr. Aarush Mehta",
    "Dr. Sneha Kapoor",
    "Dr. Vivaan Rao",
    "Dr. Ananya Iyer",
    "Dr. Kunal Sharma",
    "Dr. Riya Bansal",
    "Dr. Arjun Desai",
    "Dr. Mehak Verma",
  ],

  Oncologist: [
    "Dr. Arvind Bhagat",
    "Dr. Shalini Grover",
    "Dr. Kunal Bhatia",
    "Dr. Vaishali Iyer",
    "Dr. Devendra Rathore",
    "Dr. Poonam Aggarwal",
  ],

  Orthopedics: [
    "Dr. Rohan Kapoor",
    "Dr. Amit Tandon",
    "Dr. Neha Sood",
    "Dr. Karan Malhotra",
    "Dr. Pooja Chatterjee",
  ],

  Ophthalmologist: [
    "Dr. Siddharth Venkataraman",
    "Dr. Ishita Mukherjee",
    "Dr. Pranav Deshpande",
    "Dr. Roshni Pillai",
    "Dr. Advaith Reddy",
    "Dr. Tanisha Bhardwaj",
  ],

};

const specialists = [
  {
    name: "Dr. Neha Singh",
    role: "General Physician",
    hospital: "City Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  },

  {
    name: "Dr. Rohit Verma",
    role: "Cardiologist",
    hospital: "Heart Care Clinic",
    image:
      "https://cdn-icons-png.flaticon.com/512/2785/2785482.png",
  },

  {
    name: "Dr. Rakesh Malhotra",
    role: "ENT Specialist",
    hospital: "AIIMS Bhopal",
    image:
      "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
  },

  {
    name: "Dr. Ishani Sengupta",
    role: "Gastroenterologist",
    hospital: "Apollo Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  },

  {
    name: "Dr. Meera Iyer",
    role: "Gynecologist",
    hospital: "AIIMS Delhi",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Dev Mallick",
    role: "Psychiatrist",
    hospital: "GMC Nagpur",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Kunal Bansal",
    role: "Neurologist",
    hospital: "Fortis Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Vivaan Rao",
    role: "Pediatrician",
    hospital: "Saket City Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Devendra Rathore",
    role: "Oncologist",
    hospital: "AIIMS Rishikesh",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Neha Sood",
    role: "Orthopedics Specialist",
    hospital: "Max Super Specialty Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Siddharth Venkataraman",
    role: "Ophthalmologist",
    hospital: "Medanta Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    name: "Dr. Tanisha Bhardwaj",
    role: "Ophthalmologist",
    hospital: "Tata Memorial Hospital",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  
];

export default function AppointmentPage() {

  const [currentHelpline, setCurrentHelpline] =
    useState(0);

  const [showHistory, setShowHistory] =
    useState(false);

  const [bookingHistory, setBookingHistory] =
    useState([]);

  const [popup, setPopup] = useState(false);

  const [popupData, setPopupData] =
    useState(null);

  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: "",

    bloodGroup: "",

    city: "",

    symptom: "",

    specialization: "",

    doctor: "",

    date: "",

    time: "",

    emergency: false,
  });

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentHelpline((prev) =>
        (prev + 1) % helplines.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const handleChange = (e) => {

    const { name, value, type, checked } =
      e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const aiSuggestion = () => {

  const text = form.symptom.toLowerCase();

  // CARDIOLOGIST
  if (
    text.includes("heart") ||
    text.includes("chest pain") ||
    text.includes("bp") ||
    text.includes("blood pressure") ||
    text.includes("heartbeat") ||
    text.includes("cardiac") ||
    text.includes("palpitations") ||
    text.includes("shortness of breath") ||
    text.includes("dizziness") ||
    text.includes("fainting") ||
    text.includes("swelling") ||
    text.includes("fatigue") ||
    text.includes("angina") ||
    text.includes("arrhythmia") ||
    text.includes("hypertension") ||
    text.includes("hypotension") ||
    text.includes("heart attack") ||
    text.includes("stroke") ||
    text.includes("high cholesterol") ||
    text.includes("low cholesterol") ||
    text.includes("cardiomyopathy") ||
    text.includes("pericarditis") ||
    text.includes("endocarditis") ||
    text.includes("valve disease") 
  ) {
    return "❤️ Cardiac symptoms detected. Cardiologist consultation recommended.";
  }

  // DERMATOLOGIST
  if (
    text.includes("skin") ||
    text.includes("rash") ||
    text.includes("pimple") ||
    text.includes("acne") ||
    text.includes("itching") ||
    text.includes("allergy") ||
    text.includes("eczema") ||
    text.includes("psoriasis") ||
    text.includes("dermatitis") ||
    text.includes("hives") ||
    text.includes("blister") ||
    text.includes("scaly") ||
    text.includes("redness") ||
    text.includes("dry skin") ||
    text.includes("oily skin") ||
    text.includes("sensitive skin") ||
    text.includes("sunburn") ||
    text.includes("skin infection") ||
    text.includes("fungal infection") ||
    text.includes("bacterial infection") ||
    text.includes("pigmentation") ||
    text.includes("skin cancer") ||
    text.includes("mole") ||
    text.includes("wart") ||
    text.includes("skin tag") ||
    text.includes("rosacea")
  ) {
    return "✨ Skin related symptoms found. Dermatologist suggested.";
  }

  // NEUROLOGIST
  if (
    text.includes("headache") ||
    text.includes("migraine") ||
    text.includes("brain") ||
    text.includes("dizziness") ||
    text.includes("seizure") ||
    text.includes("memory") ||
    text.includes("numbness") ||
    text.includes("tingling") ||
    text.includes("weakness") ||
    text.includes("paralysis") ||
    text.includes("tremor") ||
    text.includes("confusion") ||
    text.includes("loss of consciousness") ||
    text.includes("stroke") ||
    text.includes("multiple sclerosis") ||
    text.includes("Parkinson's")
  ) {
    return "🧠 Neurological symptoms detected. Neurologist recommended.";
  }

  // ORTHOPEDIC
  if (
    text.includes("bone") ||
    text.includes("joint") ||
    text.includes("knee") ||
    text.includes("back pain") ||
    text.includes("fracture") ||
    text.includes("shoulder") ||
    text.includes("hip") ||
    text.includes("arthritis") ||
    text.includes("osteoporosis") ||
    text.includes("scoliosis") ||
    text.includes("sprain") ||
    text.includes("strain") ||
    text.includes("dislocation") ||
    text.includes("tendon") ||
    text.includes("ligament") ||
    text.includes("muscle") ||
    text.includes("cartilage") ||
    text.includes("bursitis") ||
    text.includes("gout") ||
    text.includes("rheumatoid") ||
    text.includes("spondylitis") ||
    text.includes("fibromyalgia") ||
    text.includes("sciatica") ||
    text.includes("herniated disc")
  ) {
    return "🦴 Bone or joint issue detected. Orthopedic specialist recommended.";
  }

  // GENERAL PHYSICIAN
  if (
    text.includes("fever") ||
    text.includes("cold") ||
    text.includes("cough") ||
    text.includes("weakness") ||
    text.includes("infection") ||
    text.includes("viral") ||
    text.includes("bacterial") ||
    text.includes("fatigue") ||
    text.includes("body ache") ||
    text.includes("chills") ||
    text.includes("sore throat") ||
    text.includes("runny nose") ||
    text.includes("congestion") ||
    text.includes("headache") ||
    text.includes("diarrhea") ||
    text.includes("vomiting") ||
    text.includes("nausea") ||
    text.includes("loss of appetite")
  ) {
    return "🌡️ Common health symptoms detected. General Physician suggested.";
  }

  // ENT
  if (
    text.includes("ear") ||
    text.includes("nose") ||
    text.includes("throat") ||
    text.includes("hearing") ||
    text.includes("sinus") ||
    text.includes("tonsil") ||
    text.includes("adenoid") ||
    text.includes("nasal") ||
    text.includes("sore throat") ||
    text.includes("earache") ||
    text.includes("runny nose") ||
    text.includes("congestion") ||
    text.includes("cough") ||
    text.includes("hoarseness") ||
    text.includes("dizziness") ||
    text.includes("vertigo") ||
    text.includes("tinnitus") ||
    text.includes("sinusitis") ||
    text.includes("otitis") ||
    text.includes("pharyngitis") ||
    text.includes("laryngitis") ||
    text.includes("nasopharyngitis") 
  ) {
    return "👂 ENT related symptoms found. ENT specialist recommended.";
  }

  // PEDIATRICIAN
  if (
    text.includes("baby") ||
    text.includes("child") ||
    text.includes("kid") ||
    text.includes("newborn") ||
    text.includes("vaccination") ||
    text.includes("immunization") ||
    text.includes("pediatric") ||
    text.includes("growth") ||
    text.includes("development") ||
    text.includes("feeding") ||
    text.includes("colic") ||
    text.includes("teething") ||
    text.includes("diaper") ||
    text.includes("temper tantrum") ||
    text.includes("childhood illness") ||
    text.includes("school health") ||
    text.includes("adolescent health") ||
    text.includes("pediatric infection") 
  ) {
    return "🧒 Child healthcare symptoms detected. Pediatrician suggested.";
  }

  // GYNECOLOGIST
  if (
    text.includes("pregnancy") ||
    text.includes("period") ||
    text.includes("menstrual") ||
    text.includes("pcod") ||
    text.includes("women") ||
    text.includes("uterus") ||
    text.includes("ovary") ||
    text.includes("breast") ||
    text.includes("pap smear") ||
    text.includes("hysterectomy") ||
    text.includes("endometriosis") ||
    text.includes("fibroids") ||
    text.includes("menopause") ||
    text.includes("pms") ||
    text.includes("dysmenorrhea") ||
    text.includes("vaginal") ||
    text.includes("cervical") ||
    text.includes("gynecological infection") ||
    text.includes("infertility") ||
    text.includes("pcos") ||
    text.includes("sexual health") ||
    text.includes("contraception") ||
    text.includes("breast lump") ||
    text.includes("gynecological cancer")
  ) {
    return "🌸 Women's health symptoms detected. Gynecologist consultation recommended.";
  }

  // GASTROENTEROLOGIST
  if (
    text.includes("stomach") ||
    text.includes("digestion") ||
    text.includes("gas") ||
    text.includes("acidity") ||
    text.includes("ulcer") ||
    text.includes("vomit") ||
    text.includes("nausea") ||
    text.includes("diarrhea") ||
    text.includes("constipation") ||
    text.includes("ibs") ||
    text.includes("crohn's") ||
    text.includes("colitis") ||
    text.includes("gastroenteritis") ||
    text.includes("liver") ||
    text.includes("pancreas") ||
    text.includes("hepatitis") ||
    text.includes("cirrhosis") ||
    text.includes("gallbladder") ||
    text.includes("jaundice") ||
    text.includes("appendicitis") 
  ) {
    return "🍽️ Digestive health issue detected. Gastroenterologist suggested.";
  }

  // PSYCHIATRIST
  if (
    text.includes("stress") ||
    text.includes("anxiety") ||
    text.includes("depression") ||
    text.includes("mental") ||
    text.includes("panic") ||
    text.includes("overthinking") ||
    text.includes("insomnia") ||
    text.includes("mood") ||
    text.includes("emotional") ||
    text.includes("psychological") ||
    text.includes("therapy") ||
    text.includes("counseling") ||
    text.includes("mental health") ||
    text.includes("suicidal") ||
    text.includes("self-harm") ||
    text.includes("bipolar") ||
    text.includes("schizophrenia") ||
    text.includes("ocd") ||
    text.includes("ptsd") ||
    text.includes("addiction") ||
    text.includes("adhd") ||
    text.includes("autism") 
  ) {
    return "🧘 Mental wellness symptoms found. Psychiatrist recommended.";
  }

  // OPHTHALMOLOGIST
  if (
    text.includes("eye") ||
    text.includes("vision") ||
    text.includes("blur") ||
    text.includes("red eyes") ||
    text.includes("eye pain") ||
    text.includes("dry eyes") ||
    text.includes("watery eyes") ||
    text.includes("eye infection") ||
    text.includes("cataract") ||
    text.includes("glaucoma") ||
    text.includes("macular degeneration") ||
    text.includes("retinopathy") ||
    text.includes("conjunctivitis") ||
    text.includes("eye strain") ||
    text.includes("double vision") ||
    text.includes("floaters") ||
    text.includes("eye injury") ||
    text.includes("vision loss") ||
    text.includes("color blindness") ||
    text.includes("night blindness") ||
    text.includes("dry eye syndrome") ||
    text.includes("corneal abrasion") ||
    text.includes("uveitis") ||
    text.includes("ocular migraine") ||
    text.includes("diabetic retinopathy") ||
    text.includes("retinal detachment")
  ) {
    return "👁️ Eye related symptoms detected. Ophthalmologist suggested.";
  }

// ONCOLOGIST
if (
  text.includes("cancer") ||
  text.includes("tumor") ||
  text.includes("tumour") ||
  text.includes("chemotherapy") ||
  text.includes("radiation") ||
  text.includes("abnormal lump") ||
  text.includes("biopsy") ||
  text.includes("metastasis") ||
  text.includes("oncology") ||
  text.includes("carcinoma") ||
  text.includes("sarcoma") ||
  text.includes("leukemia") ||
  text.includes("lymphoma") ||
  text.includes("melanoma") ||
  text.includes("cancerous") ||
  text.includes("non-cancerous") ||
  text.includes("malignant") ||
  text.includes("benign") ||
  text.includes("cancer treatment") ||
  text.includes("cancer symptoms") 
) {
  return "🎗️ Possible oncology related symptoms detected. Oncologist consultation recommended.";
}
  return "🤖 AI assistant analyzed symptoms. Please consult a specialist for accurate diagnosis.";
};

  const handleBooking = () => {

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.city ||
      !form.bloodGroup ||
      !form.specialization ||
      !form.doctor ||
      !form.date ||
      !form.time
    ) {
      alert("Please fill all details");
      return;
    }

    const bookingId =
      "MED" +
      Math.floor(Math.random() * 100000);

    const booking = {
      ...form,
      bookingId,
    };

    setBookingHistory([
      ...bookingHistory,
      booking,
    ]);

    setPopupData(booking);

    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 4500);

    setForm({

      name: "",

      email: "",

      phone: "",

      bloodGroup: "",

      city: "",

      symptom: "",

      specialization: "",

      doctor: "",

      date: "",

      time: "",

      emergency: false,
    });
  };

  return (

    <div className="appointment-page">

      {/* PARTICLES */}

      <div className="particle particle1"></div>
      <div className="particle particle2"></div>
      <div className="particle particle3"></div>
      <div className="particle particle4"></div>

      {/* HELPLINE */}

      <div className="helpline-bar">
        {helplines[currentHelpline]}
      </div>

      {/* HISTORY BUTTON */}

      <button
        className="history-top-btn"
        onClick={() =>
          setShowHistory(!showHistory)
        }
      >
        View History
      </button>

      {/* HISTORY POPUP */}

      {showHistory && (

        <div className="history-popup">

          <div className="history-popup-header">

            <h2>
              Appointment History
            </h2>

            <button
              onClick={() =>
                setShowHistory(false)
              }
            >
              ✕
            </button>

          </div>

          {bookingHistory.length === 0 ? (

            <p className="empty-history">
              No Appointments Yet
            </p>

          ) : (

            bookingHistory.map((item, index) => (

              <div
                className="history-card"
                key={index}
              >

                <h3>{item.name}</h3>

                <p>
                  📧 {item.email}
                </p>

                <p>
                  📞 {item.phone}
                </p>

                <p>
                  🩸 {item.bloodGroup}
                </p>

                <p>
                  📍 {item.city}
                </p>

                <p>
                  👨‍⚕️ {item.doctor}
                </p>

                <p>
                  🏥 {item.specialization}
                </p>

                <p>
                  📅 {item.date}
                </p>

                <p>
                  ⏰ {item.time}
                </p>

                <span>
                  #{item.bookingId}
                </span>

              </div>

            ))

          )}

        </div>

      )}

      {/* HERO */}

      <section className="appoint-hero-section">

        <h1 className="appoint-main-heading">
          Book Your Appointment
        </h1>

        <p>
         Experience seamless AI-powered healthcare with smart appointment booking and personalized care in one platform.
        </p>

      </section>

      {/* FORM */}

      <div className="glass-card">

        {/* ROW 1 */}

        <div className="input-grid">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

        </div>

        {/* ROW 2 */}

        <div className="input-grid">

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <select
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
          >

            <option value="">
              Blood Group
            </option>

            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB-</option>
            <option>O-</option>

          </select>

        </div>

        {/* ROW 3 */}

        <div className="input-grid">

          <input
            type="text"
            name="city"
            placeholder="City / Location"
            value={form.city}
            onChange={handleChange}
          />

          <select
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
          >

            <option value="">
              Choose Specialization
            </option>

            {Object.keys(
              doctorDatabase
            ).map((item, index) => (

              <option
                key={index}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

      

        <textarea
          name="symptom"
          placeholder="Describe symptoms..."
          value={form.symptom}
          onChange={handleChange}
        />

       

        <div className="ai-box">
          {aiSuggestion()}
        </div>

        

        <div className="input-grid">

          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
          >

            <option value="">
              Choose Doctor
            </option>

            {form.specialization &&
              doctorDatabase[
                form.specialization
              ].map((doctor, index) => (

                <option
                  key={index}
                  value={doctor}
                >
                  {doctor}
                </option>

              ))}

          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

        </div>

        {/* TIME */}

        <div className="input-grid">

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

        </div>

        {/* EMERGENCY */}

        <div className="emergency-row">

          <label className="switch">

            <input
              type="checkbox"
              name="emergency"
              checked={form.emergency}
              onChange={handleChange}
            />

            <span className="slider"></span>

          </label>

          <p>
            Emergency Priority Booking
          </p>

        </div>

        {/* BUTTON */}

        <button
          className="book-btn"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>

      </div>

      {/* SUCCESS POPUP */}

      {popup && popupData && (

        <div className="popup-card">

          <h2>
            Appointment Confirmed ✅
          </h2>

          <p>
            Booking ID:
            {" "}
            {popupData.bookingId}
          </p>

          <p>
            Doctor:
            {" "}
            {popupData.doctor}
          </p>

          <p>
            Date:
            {" "}
            {popupData.date}
          </p>

          <p>
            Time:
            {" "}
            {popupData.time}
          </p>

        </div>

      )}

      

      <section className="specialists-section">

        <h2>
          Our Trusted Specialists
        </h2>

        <div className="specialists-slider">

          <div className="specialists-track">

            {[...specialists, ...specialists].map(
              (doctor, index) => (

                <div
                  className="doctor-card"
                  key={index}
                >

                  <img
                    src={doctor.image}
                    alt="doctor"
                  />

                  <h3>
                    {doctor.name}
                  </h3>

                  <p>
                    {doctor.role}
                  </p>

                  <p>
                    📍 {doctor.hospital}
                  </p>

                </div>

              )
            )}

          </div>

        </div>
       <footer className="modern-footer">

  <div className="footer-content">

    <h2>
      Need Help?
    </h2>

    <p>
      For any appointment issues, emergency support, or healthcare queries,
      feel free to contact our medical support team anytime.
    </p>

    <div className="footer-contact-grid">

      <div className="footer-contact-card">
        📞 +91 98765 43210
      </div>

      <div className="footer-contact-card">
        ✉️ care@echocarehelp.com
      </div>

      <div className="footer-contact-card">
        🚑 24×7 Emergency Support
      </div>

      <div className="footer-contact-card">
        📍 Bhopal, Madhya Pradesh
      </div>

    </div>

    <div className="footer-bottom">

      <p>
        © 2026 EchoCare • Smart Healthcare Booking Platform
      </p>

    </div>

  </div>

</footer>

      </section>

    </div>
  );
}