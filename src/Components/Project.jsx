import React from "react";

import {
  FaLocationDot,
  FaHouse,
  FaRoad,
  FaTree,
  FaBuilding,
  FaChartLine,
  FaCheck,
  FaCar,
  FaCity,
  FaArrowRight,
} from "react-icons/fa6";

// =====================================================
// IMAGE IMPORTS
// =====================================================

import heroImage from "../assets/Ramayana_city (3).png";
import overviewImage from "../assets/Ramayana_city (3).png";
import masterPlanImage from "../assets/project-map.jpg";

const Project = () => {
  const GOLD = "#D0B15B";
  const DARK = "#171717";
  const WHITE = "#ffffff";

  // =====================================================
  // PROJECT IMAGES
  // =====================================================

  const PROJECT_IMAGES = {
    hero: heroImage,
    overview: overviewImage,
    masterPlan: masterPlanImage,
  };

  // =====================================================
  // PROJECT HIGHLIGHTS
  // =====================================================

  const highlights = [
    {
      icon: <FaLocationDot />,
      title: "Prime Location",
      text: "Strategically located with convenient connectivity to major roads and important destinations.",
    },
    {
      icon: <FaHouse />,
      title: "Residential Plots",
      text: "Well-planned residential plots designed for comfortable living and future growth.",
    },
    {
      icon: <FaRoad />,
      title: "Excellent Connectivity",
      text: "Easy access to nearby roads, markets, schools and other essential facilities.",
    },
    {
      icon: <FaTree />,
      title: "Green Environment",
      text: "Planned surroundings with open spaces and a peaceful residential atmosphere.",
    },
    {
      icon: <FaBuilding />,
      title: "Planned Development",
      text: "A thoughtfully planned development focused on better infrastructure and living experience.",
    },
    {
      icon: <FaChartLine />,
      title: "Investment Potential",
      text: "A residential destination suitable for both end users and long-term investment.",
    },
  ];

  // =====================================================
  // AMENITIES
  // =====================================================

  const amenities = [
    "Wide Internal Roads",
    "Green & Open Spaces",
    "Street Lighting",
    "Planned Drainage",
    "Residential Development",
    "Easy Road Connectivity",
    "Peaceful Environment",
    "Essential Infrastructure",
  ];

  return (
    <>
      <style>
        {`
          /* =========================================
             GLOBAL
          ========================================= */

          .project-section {
            position: relative;
            overflow: hidden;
          }

          /* =========================================
             HERO
          ========================================= */

          .hero-project {
            position: relative;
            min-height: 570px;
            overflow: hidden;
            background-color: #171717;
          }

          .hero-project-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            z-index: 0;
          }

          .hero-project-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.58);
            z-index: 1;
          }

          .hero-project-content {
            position: relative;
            z-index: 2;
          }

          /* =========================================
             CARDS
          ========================================= */

          .project-card {
            transition: all 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.10) !important;
          }

          .dark-card {
            background: rgba(255, 255, 255, 0.055);
            border: 1px solid rgba(255, 255, 255, 0.12);
            transition: all 0.3s ease;
          }

          .dark-card:hover {
            border-color: rgba(208, 177, 91, 0.45);
            transform: translateY(-2px);
          }

          /* =========================================
             ICON BOX
          ========================================= */

          .icon-box {
            width: 52px;
            height: 52px;
            min-width: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: ${GOLD};
            background: rgba(208, 177, 91, 0.12);
            font-size: 21px;
          }

          /* =========================================
             AMENITIES
          ========================================= */

          .amenity-item {
            transition: all 0.3s ease;
          }

          .amenity-item:hover {
            transform: translateX(4px);
            border-color: rgba(208, 177, 91, 0.45) !important;
          }

          /* =========================================
             BUTTONS
          ========================================= */

          .project-button {
            transition: all 0.3s ease;
          }

          .project-button:hover {
            transform: translateY(-2px);
          }

          /* =========================================
             IMAGES
          ========================================= */

          .project-image {
            width: 100%;
            display: block;
            object-fit: cover;
          }

          .master-plan-image {
            width: 100%;
            display: block;
            object-fit: contain;
            background: #ffffff;
          }

          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 767px) {
            .hero-project {
              min-height: 540px;
            }

            .hero-project h1 {
              font-size: 2.5rem !important;
            }

            .hero-project-bg {
              object-position: center center;
            }

            .project-section {
              padding-top: 3rem !important;
              padding-bottom: 3rem !important;
            }

            .project-section .container {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }

            .project-image {
              height: 300px !important;
            }

            .master-plan-image {
              max-height: 350px !important;
            }

            .icon-box {
              width: 46px;
              height: 46px;
              min-width: 46px;
              font-size: 18px;
            }
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: WHITE,
          color: DARK,
          overflowX: "hidden",
        }}
      >
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="hero-project">
          {/* REAL HERO IMAGE */}
          <img
            src={PROJECT_IMAGES.hero}
            alt="Ramayna City"
            className="hero-project-bg"
          />

          {/* DARK OVERLAY */}
          <div className="hero-project-overlay"></div>

          {/* HERO CONTENT */}
          <div className="container py-5 hero-project-content">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span
                  className="d-inline-block px-3 py-2 mb-3 rounded-pill fw-semibold"
                  style={{
                    backgroundColor: GOLD,
                    color: "#fff",
                    fontSize: "12px",
                    letterSpacing: "0.8px",
                  }}
                >
                  PREMIUM RESIDENTIAL PROJECT
                </span>

                <h1
                  className="display-3 fw-bold text-white mb-3"
                  style={{
                    letterSpacing: "0.5px",
                  }}
                >
                  Ramayna City
                </h1>

                <p
                  className="text-white fs-5 mb-3"
                  style={{
                    maxWidth: "680px",
                    lineHeight: "1.6",
                  }}
                >
                  A thoughtfully planned residential destination designed for
                  modern living, peaceful surroundings and long-term value.
                </p>

                <p className="text-white mb-4">
                  <FaLocationDot
                    className="me-2"
                    style={{
                      color: GOLD,
                    }}
                  />
                  Lucknow, Uttar Pradesh
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="btn px-4 py-2 fw-semibold project-button"
                    style={{
                      backgroundColor: GOLD,
                      color: "#fff",
                      border: `1px solid ${GOLD}`,
                    }}
                  >
                    Enquire Now
                    <FaArrowRight className="ms-2" />
                  </a>

                  <a
                    href="#overview"
                    className="btn btn-outline-light px-4 py-2 fw-semibold project-button"
                  >
                    Explore Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            QUICK STATS
        ================================================== */}

        <section
          className="project-section"
          style={{
            backgroundColor: WHITE,
            marginTop: "-45px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div className="container">
            <div
              className="bg-white rounded-3 shadow p-3"
              style={{
                borderTop: `3px solid ${GOLD}`,
              }}
            >
              <div className="row g-3 text-center">
                <div className="col-6 col-lg-3">
                  <h5
                    className="fw-bold mb-1"
                    style={{ color: GOLD }}
                  >
                    Ramayna City
                  </h5>

                  <small className="text-muted">Project</small>
                </div>

                <div className="col-6 col-lg-3">
                  <h5
                    className="fw-bold mb-1"
                    style={{ color: GOLD }}
                  >
                    Residential
                  </h5>

                  <small className="text-muted">Development</small>
                </div>

                <div className="col-6 col-lg-3">
                  <h5
                    className="fw-bold mb-1"
                    style={{ color: GOLD }}
                  >
                    9+
                  </h5>

                  <small className="text-muted">
                    Plot Configurations
                  </small>
                </div>

                <div className="col-6 col-lg-3">
                  <h5
                    className="fw-bold mb-1"
                    style={{ color: GOLD }}
                  >
                    Lucknow
                  </h5>

                  <small className="text-muted">
                    Uttar Pradesh
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            OVERVIEW — DARK
        ================================================== */}

        <section
          id="overview"
          className="project-section py-5"
          style={{
            backgroundColor: DARK,
            color: "#fff",
          }}
        >
          <div className="container py-lg-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <img
                  src={PROJECT_IMAGES.overview}
                  alt="Ramayna City"
                  className="project-image img-fluid rounded-4 shadow w-100"
                  style={{
                    height: "390px",
                  }}
                />
              </div>

              <div className="col-lg-6">
                <span
                  className="fw-semibold text-uppercase"
                  style={{
                    color: GOLD,
                    letterSpacing: "2px",
                    fontSize: "12px",
                  }}
                >
                  About The Project
                </span>

                <h2 className="fw-bold mt-2 mb-3">
                  Welcome to{" "}
                  <span style={{ color: GOLD }}>
                    Ramayna City
                  </span>
                </h2>

                <p
                  className="text-white-50 mb-3"
                  style={{
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  Ramayna City is a thoughtfully planned residential project
                  created for people looking for a peaceful and well-connected
                  place to build their dream home.
                </p>

                <p
                  className="text-white-50 mb-3"
                  style={{
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  The project combines residential planning, convenient
                  connectivity and a comfortable environment.
                </p>

                <div className="row g-3 mt-2">
                  <div className="col-sm-6">
                    <div
                      className="p-3 rounded-3 dark-card"
                      style={{
                        borderLeft: `3px solid ${GOLD}`,
                      }}
                    >
                      <FaHouse
                        className="mb-2"
                        style={{
                          color: GOLD,
                        }}
                      />

                      <div className="fw-semibold">
                        Residential Plots
                      </div>

                      <small className="text-white-50">
                        Planned for comfortable living
                      </small>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div
                      className="p-3 rounded-3 dark-card"
                      style={{
                        borderLeft: `3px solid ${GOLD}`,
                      }}
                    >
                      <FaLocationDot
                        className="mb-2"
                        style={{
                          color: GOLD,
                        }}
                      />

                      <div className="fw-semibold">
                        Strategic Location
                      </div>

                      <small className="text-white-50">
                        Convenient connectivity
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            HIGHLIGHTS — WHITE
        ================================================== */}

        <section
          className="project-section py-5"
          style={{
            backgroundColor: WHITE,
          }}
        >
          <div className="container py-lg-4">
            <div className="text-center mb-4">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                Project Highlights
              </span>

              <h2 className="fw-bold mt-2 mb-2">
                Everything You Need for a Better Tomorrow
              </h2>

              <p
                className="text-muted mx-auto mb-0"
                style={{
                  maxWidth: "650px",
                  fontSize: "14px",
                }}
              >
                A balanced combination of location, infrastructure and
                lifestyle.
              </p>
            </div>

            <div className="row g-3">
              {highlights.map((item, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >
                  <div
                    className="project-card bg-white rounded-4 p-3 h-100 shadow-sm"
                    style={{
                      border: "1px solid #eeeeee",
                    }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div className="icon-box">
                        {item.icon}
                      </div>

                      <div>
                        <h6 className="fw-bold mb-2">
                          {item.title}
                        </h6>

                        <p
                          className="text-muted mb-0"
                          style={{
                            lineHeight: "1.55",
                            fontSize: "13px",
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            AMENITIES — DARK
        ================================================== */}

        <section
          className="project-section py-5"
          style={{
            backgroundColor: DARK,
          }}
        >
          <div className="container py-lg-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <span
                  className="fw-semibold text-uppercase"
                  style={{
                    color: GOLD,
                    letterSpacing: "2px",
                    fontSize: "12px",
                  }}
                >
                  Amenities & Infrastructure
                </span>

                <h2 className="text-white fw-bold mt-2 mb-3">
                  Designed Around Your Lifestyle
                </h2>

                <p
                  className="text-white-50 mb-0"
                  style={{
                    lineHeight: "1.7",
                    fontSize: "14px",
                  }}
                >
                  From internal roads to planned open spaces, every element is
                  focused on creating a comfortable residential environment.
                </p>
              </div>

              <div className="col-lg-7">
                <div className="row g-2">
                  {amenities.map((amenity, index) => (
                    <div
                      className="col-md-6"
                      key={index}
                    >
                      <div
                        className="amenity-item d-flex align-items-center p-2 rounded-3"
                        style={{
                          backgroundColor:
                            "rgba(255,255,255,0.055)",
                          border:
                            "1px solid rgba(255,255,255,0.10)",
                        }}
                      >
                        <span
                          className="d-flex align-items-center justify-content-center rounded-circle me-2"
                          style={{
                            width: "32px",
                            height: "32px",
                            minWidth: "32px",
                            backgroundColor: GOLD,
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        >
                          <FaCheck />
                        </span>

                        <span
                          className="text-white fw-semibold"
                          style={{
                            fontSize: "13px",
                          }}
                        >
                          {amenity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            LOCATION — WHITE
        ================================================== */}

        <section
          className="project-section py-5"
          style={{
            backgroundColor: WHITE,
          }}
        >
          <div className="container py-lg-4">
            <div className="text-center mb-4">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                Strategic Location
              </span>

              <h2 className="fw-bold mt-2 mb-2">
                Well Connected to the City
              </h2>

              <p
                className="text-muted mx-auto mb-0"
                style={{
                  maxWidth: "650px",
                  fontSize: "14px",
                }}
              >
                A location that keeps your everyday destinations within
                convenient reach.
              </p>
            </div>

            <div className="row g-3">
              <div className="col-lg-5">
                <div
                  className="h-100 rounded-4 p-4 project-card"
                  style={{
                    backgroundColor: "#fafafa",
                    border: "1px solid #eeeeee",
                  }}
                >
                  <h5 className="fw-bold mb-3">
                    Ramayna City Location
                  </h5>

                  <div className="d-flex gap-3 mb-3">
                    <div className="icon-box">
                      <FaLocationDot />
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Address
                      </h6>

                      <p className="text-muted mb-0 small">
                        Lucknow, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-3">
                    <div className="icon-box">
                      <FaCar />
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Connectivity
                      </h6>

                      <p className="text-muted mb-0 small">
                        Convenient access to major roads and important
                        destinations.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="icon-box">
                      <FaCity />
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Nearby Development
                      </h6>

                      <p className="text-muted mb-0 small">
                        Located in a developing residential and investment
                        corridor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div
                  className="rounded-4 overflow-hidden shadow-sm"
                  style={{
                    minHeight: "390px",
                  }}
                >
                  <iframe
                    title="Ramayna City Location"
                    src="https://www.google.com/maps?q=Lucknow%20Uttar%20Pradesh&output=embed"
                    width="100%"
                    height="390"
                    style={{
                      border: 0,
                      display: "block",
                    }}
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            MASTER PLAN — DARK
        ================================================== */}

        <section
          className="project-section py-5"
          style={{
            backgroundColor: DARK,
          }}
        >
          <div className="container py-lg-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div
                  className="rounded-4 overflow-hidden"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={PROJECT_IMAGES.masterPlan}
                    alt="Ramayna City Master Plan"
                    className="master-plan-image img-fluid w-100"
                    style={{
                      maxHeight: "480px",
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <span
                  className="fw-semibold text-uppercase"
                  style={{
                    color: GOLD,
                    letterSpacing: "2px",
                    fontSize: "12px",
                  }}
                >
                  Master Plan
                </span>

                <h2 className="text-white fw-bold mt-2 mb-3">
                  A Thoughtfully Planned Community
                </h2>

                <p
                  className="text-white-50"
                  style={{
                    lineHeight: "1.7",
                    fontSize: "14px",
                  }}
                >
                  The master plan is designed to create a well-organized
                  residential environment with proper access roads, plot
                  planning and open spaces.
                </p>

                <p
                  className="text-white-50"
                  style={{
                    lineHeight: "1.7",
                    fontSize: "14px",
                  }}
                >
                  Explore the layout to understand the overall planning and
                  positioning of the residential plots.
                </p>

                <a
                  href="/contact"
                  className="btn px-4 py-2 mt-2 fw-semibold project-button"
                  style={{
                    backgroundColor: GOLD,
                    color: "#fff",
                    borderColor: GOLD,
                  }}
                >
                  Enquire About Availability
                  <FaArrowRight className="ms-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            CTA — WHITE
        ================================================== */}

        <section
          className="project-section py-5"
          style={{
            backgroundColor: WHITE,
          }}
        >
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-2">
                  Find Your Perfect Plot at{" "}
                  <span style={{ color: GOLD }}>
                    Ramayna City
                  </span>
                </h2>

                <p className="text-muted mb-0">
                  Get complete project details, plot availability and pricing
                  information from our team.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                <a
                  href="/contact"
                  className="btn px-4 py-2 fw-bold project-button"
                  style={{
                    backgroundColor: DARK,
                    color: "#fff",
                    border: `1px solid ${DARK}`,
                  }}
                >
                  Contact Us
                  <FaArrowRight className="ms-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;