
import React, { useState } from "react";
import "../css/Help.css";

const NearbyHelp = () => {

  const [loading, setLoading] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const hospitals = [

    {
      name: "SGPGI Hospital",
      city: "Lucknow",
      distance: "3.2 km",
      speciality: "Neurology • Kidney • Cancer",
      status: "24/7 Emergency",
      maps:
        "https://www.google.com/maps/place/Sanjay+Gandhi+Postgraduate+Institute+of+Medical+Sciences+(SGPGIMS)/",
    },

    {
      name: "Apollo Hospital",
      city: "Lucknow",
      distance: "5.1 km",
      speciality: "Cardiology • ICU • Trauma",
      status: "Open Now",
      maps:
        "https://www.google.com/maps/place/Apollomedics+Super+Speciality+Hospitals/",
    },

    {
      name: "Medanta Hospital",
      city: "Lucknow",
      distance: "6.4 km",
      speciality: "Heart • Orthopedic • ICU",
      status: "Available",
      maps:
        "https://www.google.com/maps/place/Medanta+Hospital+Lucknow/",
    },

    {
      name: "KGMU",
      city: "Lucknow",
      distance: "7.3 km",
      speciality: "Emergency • Surgery • Research",
      status: "24/7 Open",
      maps:
        "https://www.google.com/maps/place/King+George's+Medical+University/",
    },

  ];

  const topHospitals = [

    {
      name: "AIIMS Delhi",
      city: "New Delhi",
      speciality: "Trauma & Cardiology",
      rating: "4.9",
    },
    {
      name: "AIIMS Bhopal",
      city: "Bhopal",
      speciality: "Trauma & Cardiology",
      rating: "4.7",
    },

    {
      name: "Medanta",
      city: "Gurgaon",
      speciality: "Heart Institute",
      rating: "4.8",
    },

    {
      name: "Apollo Hospitals",
      city: "Chennai",
      speciality: "Advanced Surgery",
      rating: "4.8",
    },

    {
      name: "Fortis Hospital",
      city: "Mumbai",
      speciality: "Critical Care",
      rating: "4.7",
    },

    {
      name: "SGPGI",
      city: "Lucknow",
      speciality: "Cancer & Neurology",
      rating: "4.8",
    },

  ];

  const enableLocation = () => {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(

      () => {

        setTimeout(() => {

          setLoading(false);
          setLocationEnabled(true);

        }, 1500);

      },

      () => {

        setLoading(false);

        alert("Location access denied");

      }

    );

  };

  return (

    <div className="nearby-page">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="nearby-container">

        {/* LEFT */}

        <div className="left-section">

          <h1>
            Find Nearby Hospitals
          </h1>

          <p>
            Enable live location to instantly discover
            trusted hospitals and emergency care centers
            near you.
          </p>

          <div className="help-feature-boxes">

            <div className="help-feature-card">
              Emergency Support
            </div>

            <div className="help-feature-card">
              Live GPS Access
            </div>

            <div className="help-feature-card">
              Verified Hospitals
            </div>

          </div>

          <button
            className="location-btn"
            onClick={enableLocation}
          >

            {
              loading
                ? "Detecting Location..."
                : "Enable Location"
            }

          </button>

        </div>

        {/* RIGHT */}

        <div className="right-section">

          <div className="hospital-panel">

            <div className="panel-header">

              <h2>Nearby Hospitals</h2>

              {
                locationEnabled &&
                <span className="live-badge">
                  LIVE
                </span>
              }

            </div>

            {

              !locationEnabled ? (

                <div className="empty-box">

                  <div className="location-icon">
                    📍
                  </div>

                  <p>
                    Enable location to view nearby hospitals
                  </p>

                </div>

              ) : (

                <div className="hospital-list">

                  {

                    hospitals.map((hospital, index) => (

                      <div
                        className="hospital-card"
                        key={index}
                      >

                        <div>

                          <h3>{hospital.name}</h3>

                          <p className="city">
                            📍 {hospital.city}
                          </p>

                          <p className="speciality">
                            {hospital.speciality}
                          </p>

                          <small>
                            {hospital.status}
                          </small>

                        </div>

                        <div className="hospital-right">

                          <span>
                            {hospital.distance}
                          </span>

                          <a
                            href={hospital.maps}
                            target="_blank"
                            rel="noreferrer"
                            className="direction-btn"
                          >
                            View Directions
                          </a>

                        </div>

                      </div>

                    ))

                  }

                </div>

              )

            }

          </div>

        </div>

      </div>

      

      <div className="help-footer-hospitals">
         <h2>India's Top Trusted Hospitals</h2>
        

        <div className="help-floating-track">

          {

            [...topHospitals, ...topHospitals].map((hospital, index) => (

              <div
                className="help-floating-card"
                key={index}
              >

                <div className="help-floating-top">

                  <h3>{hospital.name}</h3>

                  <span>
                    ⭐ {hospital.rating}
                  </span>

                </div>

                <p>
                  📍 {hospital.city}
                </p>

                <div className="help-floating-speciality">
                  {hospital.speciality}
                </div>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

};

export default NearbyHelp;