import React from "react";
import { Link } from "react-router-dom";

import {
  FaLocationDot,
  FaRoad,
  FaBuilding,
  FaTree,
  FaHouse,
  FaChartLine,
  FaCar,
  FaCity,
  FaGraduationCap,
  FaHospital,
  FaCartShopping,
  FaCheck,
} from "react-icons/fa6";

import heroImage from "../assets/Ramayana_city (3).png";

const WhyChoose = () => {
  const GOLD = "#D0B15B";
  const DARK = "#202020";
  const LIGHT = "#F8F7F3";

  const reasons = [
    {
      number: "01",
      icon: <FaBuilding />,
      title: "Grand Entrance",
      text: "A 35-meter-wide grand boulevard with dual 9-meter roads and a lush 17-meter central green belt.",
    },
    {
      number: "02",
      icon: <FaHouse />,
      title: "Bespoke Residential Plots",
      text: "Flexible plot sizes designed to help you build a lasting family legacy.",
    },
    {
      number: "03",
      icon: <FaLocationDot />,
      title: "Strategic Location",
      text: "Direct access to NH56B with upcoming arterial links connecting seamlessly to both the Agra Expressway and Purvanchal Expressway.",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "High-Value Investment",
      text: "An ideal blend of high-growth potential and secure, peaceful living.",
    },
    {
      number: "05",
      icon: <FaHouse />,
      title: "Modern Living",
      text: "A practical residential environment created around today's lifestyle needs.",
    },
    {
      number: "06",
      icon: <FaChartLine />,
      title: "Long-Term Potential",
      text: "A developing location with planned infrastructure for long-term property planning.",
    },
  ];

  const benefits = [
    {
      icon: <FaCar />,
      title: "Easy Accessibility",
      text: "Convenient road access for daily commuting and travelling.",
    },
    {
      icon: <FaCity />,
      title: "Growing Surroundings",
      text: "An area with scope for residential and infrastructure development.",
    },
    {
      icon: <FaTree />,
      title: "Better Lifestyle",
      text: "A residential environment focused on comfort, space and peaceful living.",
    },
    {
      icon: <FaHouse />,
      title: "Dream Home",
      text: "A place where you can plan and build a home for your family.",
    },
    {
      icon: <FaChartLine />,
      title: "Investment Opportunity",
      text: "Suitable for buyers considering residential property for the long term.",
    },
    {
      icon: <FaBuilding />,
      title: "Family Friendly",
      text: "A planned residential setting suitable for families and future generations.",
    },
  ];

  const connectivity = [
    "Major roads and routes",
    "Nearby residential areas",
    "Daily convenience facilities",
    "Educational institutions",
    "Healthcare facilities",
    "Markets and commercial areas",
  ];

  const connectivityCards = [
    {
      icon: <FaRoad />,
      title: "Roads",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
    },
    {
      icon: <FaHospital />,
      title: "Healthcare",
    },
    {
      icon: <FaCartShopping />,
      title: "Shopping",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        color: DARK,
        overflowX: "hidden",
      }}
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="position-relative overflow-hidden"
        style={{
          minHeight: "520px",
          backgroundColor: DARK,
        }}
      >
        {/* HERO IMAGE */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url("${heroImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* BLUR OVERLAY & DARK TINT */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 1,
          }}
        />

        {/* GOLD VERTICAL LINE - LEFT BOTTOM */}
        <div
          className="position-absolute"
          style={{
            width: "4px",
            height: "75px",
            left: "0",
            bottom: "15px",
            backgroundColor: GOLD,
            zIndex: 3,
          }}
        />

        {/* =================================================
            HERO CONTENT - CENTERED & PUSHED FURTHER DOWN
        ================================================== */}

        <div
          className="container position-relative h-100"
          style={{
            zIndex: 3,
            minHeight: "520px",
          }}
        >
          <div
            className="row h-100 align-items-start justify-content-center text-center"
            style={{
              paddingTop: "180px", // Yahan padding aur badha di hai taaki text aur neeche aaye
            }}
          >
            <div className="col-12 col-lg-8">
              {/* LABEL */}
              <span
                className="d-inline-block px-2 py-1 rounded-pill fw-semibold mb-2"
                style={{
                  backgroundColor: GOLD,
                  color: "#ffffff",
                  fontSize: "10px",
                  letterSpacing: "1.2px",
                }}
              >
                WHY RAMAYNA CITY
              </span>

              {/* HEADING */}
              <h1
                className="fw-bold text-white mb-2 mx-auto"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 38px)",
                  lineHeight: "1.2",
                  maxWidth: "600px",
                  textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                }}
              >
                A Place Chosen for{" "}
                <span style={{ color: GOLD }}>Better Living</span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="text-white mb-0 mx-auto"
                style={{
                  maxWidth: "520px",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                }}
              >
                Discover a thoughtfully planned residential destination designed
                around location, connectivity, comfort and future possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION - WHITE
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "1.8px",
                  fontSize: "11px",
                }}
              >
                Why Choose Ramayna City
              </span>

              <h2
                className="fw-bold mt-2 mb-3"
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                }}
              >
                More Than Just a Property
              </h2>

              <p
                className="text-muted mb-0 mx-auto"
                style={{
                  maxWidth: "780px",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                Choosing a property is about more than location. It is about
                connectivity, surroundings, infrastructure, convenience and
                the possibilities it offers for your family's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REASONS - DARK
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: DARK,
        }}
      >
        <div className="container py-4">
          <div className="text-center mb-4">
            <span
              className="fw-semibold text-uppercase"
              style={{
                color: GOLD,
                letterSpacing: "1.8px",
                fontSize: "11px",
              }}
            >
              Key Reasons
            </span>

            <h2
              className="text-white fw-bold mt-2 mb-2"
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
              }}
            >
              Why People Look at Ramayna City
            </h2>

            <p
              className="text-white-50 mx-auto mb-0"
              style={{
                maxWidth: "650px",
                fontSize: "14px",
              }}
            >
              Location, planning, accessibility and residential potential
              come together in one planned destination.
            </p>
          </div>

          <div className="row g-3">
            {reasons.map((reason) => (
              <div className="col-md-6 col-lg-4" key={reason.number}>
                <div
                  className="h-100 p-3 rounded-3"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: "46px",
                        height: "46px",
                        backgroundColor: `${GOLD}22`,
                        color: GOLD,
                        fontSize: "19px",
                      }}
                    >
                      {reason.icon}
                    </div>

                    <span
                      className="fw-bold"
                      style={{
                        color: GOLD,
                        fontSize: "12px",
                      }}
                    >
                      {reason.number}
                    </span>
                  </div>

                  <h5
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    {reason.title}
                  </h5>

                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                    }}
                  >
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGIC LOCATION - WHITE
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "1.8px",
                  fontSize: "11px",
                }}
              >
                Strategic Location
              </span>

              <h2
                className="fw-bold mt-2 mb-3"
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                }}
              >
                Location That Adds Convenience
              </h2>

              <p
                className="text-muted mb-2"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                Location plays an important role when choosing a home or
                property. Ramayna City focuses on accessibility and
                connectivity with the surrounding area.
              </p>

              <p
                className="text-muted mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                Its residential positioning offers a balance between peaceful
                surroundings and everyday convenience.
              </p>

              <Link
                to="/contact"
                className="btn px-3 py-2 fw-semibold"
                style={{
                  backgroundColor: GOLD,
                  color: "#ffffff",
                  borderColor: GOLD,
                  fontSize: "13px",
                }}
              >
                Know More About Location →
              </Link>
            </div>

            <div className="col-lg-6">
              <div
                className="p-3 p-lg-4 rounded-3"
                style={{
                  backgroundColor: LIGHT,
                  border: "1px solid #eeeeee",
                }}
              >
                <h5 className="fw-bold mb-3">Nearby Convenience</h5>

                <div className="row g-2">
                  {connectivity.map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      <div className="d-flex align-items-center py-1">
                        <span
                          className="d-flex align-items-center justify-content-center rounded-circle me-2"
                          style={{
                            minWidth: "28px",
                            height: "28px",
                            backgroundColor: GOLD,
                            color: "#ffffff",
                            fontSize: "11px",
                          }}
                        >
                          <FaCheck />
                        </span>

                        <span
                          className="fw-semibold"
                          style={{
                            fontSize: "13px",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECTIVITY - DARK
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: DARK,
        }}
      >
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "1.8px",
                  fontSize: "11px",
                }}
              >
                Connectivity
              </span>

              <h2
                className="text-white fw-bold mt-2 mb-2"
                style={{
                  fontSize: "clamp(25px, 4vw, 36px)",
                }}
              >
                Stay Connected With What Matters
              </h2>

              <p
                className="text-white-50 mb-0"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Convenient connectivity can make everyday life easier and
                support the long-term relevance of a residential location.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="row g-2">
                {connectivityCards.map((item, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <div
                      className="text-center p-3 rounded-3 h-100"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        style={{
                          color: GOLD,
                          fontSize: "23px",
                        }}
                      >
                        {item.icon}
                      </div>

                      <p
                        className="text-white fw-semibold mb-0 mt-2"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFESTYLE BENEFITS - WHITE
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-4">
          <div className="text-center mb-4">
            <span
              className="fw-semibold text-uppercase"
              style={{
                color: GOLD,
                letterSpacing: "1.8px",
                fontSize: "11px",
              }}
            >
              Lifestyle Benefits
            </span>

            <h2
              className="fw-bold mt-2 mb-0"
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
              }}
            >
              Designed Around Everyday Life
            </h2>
          </div>

          <div className="row g-3">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="d-flex gap-3 p-3 rounded-3 h-100"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e8e8e8",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      minWidth: "46px",
                      height: "46px",
                      backgroundColor: `${GOLD}18`,
                      color: GOLD,
                      fontSize: "18px",
                    }}
                  >
                    {benefit.icon}
                  </div>

                  <div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      {benefit.title}
                    </h6>

                    <p
                      className="text-muted mb-0"
                      style={{
                        lineHeight: "1.5",
                        fontSize: "12px",
                      }}
                    >
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DIFFERENCE - DARK
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: DARK,
        }}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "1.8px",
                  fontSize: "11px",
                }}
              >
                The Ramayna City Difference
              </span>

              <h2
                className="text-white fw-bold mt-2 mb-3"
                style={{
                  fontSize: "clamp(26px, 4vw, 38px)",
                }}
              >
                A Thoughtful Approach to Residential Development
              </h2>

              <p
                className="text-white-50 mb-0"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                Ramayna City brings together location, planning,
                accessibility and lifestyle to create a practical residential
                environment for today and tomorrow.
              </p>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="text-center p-3">
                <div
                  className="mx-auto mb-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "54px",
                    height: "54px",
                    backgroundColor: GOLD,
                    color: "#ffffff",
                    fontSize: "20px",
                  }}
                >
                  1
                </div>

                <h6 className="text-white fw-bold mb-1">Location</h6>

                <p
                  className="text-white-50 mb-0"
                  style={{ fontSize: "12px" }}
                >
                  Focus on accessibility and connectivity.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-3">
                <div
                  className="mx-auto mb-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "54px",
                    height: "54px",
                    backgroundColor: GOLD,
                    color: "#ffffff",
                    fontSize: "20px",
                  }}
                >
                  2
                </div>

                <h6 className="text-white fw-bold mb-1">Planning</h6>

                <p
                  className="text-white-50 mb-0"
                  style={{ fontSize: "12px" }}
                >
                  A structured approach towards development.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-3">
                <div
                  className="mx-auto mb-2 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "54px",
                    height: "54px",
                    backgroundColor: GOLD,
                    color: "#ffffff",
                    fontSize: "20px",
                  }}
                >
                  3
                </div>

                <h6 className="text-white fw-bold mb-1">Lifestyle</h6>

                <p
                  className="text-white-50 mb-0"
                  style={{ fontSize: "12px" }}
                >
                  A residential environment focused on comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA - DARK
      ===================================================== */}

      <section
        className="py-4"
        style={{
          backgroundColor: DARK,
          borderTop: `1px solid rgba(208,177,91,0.2)`,
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span
                className="fw-semibold text-uppercase d-block mb-2"
                style={{
                  color: GOLD,
                  letterSpacing: "1.5px",
                  fontSize: "11px",
                }}
              >
                Explore Ramayna City
              </span>

              <h3
                className="text-white fw-bold mb-2"
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: "1.2",
                }}
              >
                Ready to Know More About{" "}
                <span style={{ color: GOLD }}>Ramayna City?</span>
              </h3>

              <p
                className="text-white-50 mb-0"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                }}
              >
                Get complete project information and connect with our team
                to explore the opportunities at Ramayna City.
              </p>
            </div>

            <div className="col-lg-4 text-center text-lg-end mt-3 mt-lg-0">
              <Link
                to="/contact"
                className="btn px-4 py-2 fw-bold rounded-2"
                style={{
                  backgroundColor: GOLD,
                  color: "#ffffff",
                  border: `1px solid ${GOLD}`,
                  fontSize: "13px",
                }}
              >
                Enquire Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChoose;
