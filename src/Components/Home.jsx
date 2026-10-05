import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// =====================================================
// ASSETS
// =====================================================
import heroVideo from "../assets/video.mp4";

import aboutImage from "../assets/image_553ff82f.jpg.jpeg";
import highwayImage from "../assets/highway.jpg";
import airportImage from "../assets/airport.jpg";
import agraExpresswayImage from "../assets/agra-expressway.jpg";
import purvanchalExpresswayImage from "../assets/purvanchal-expressway.jpg";
import railwayImage from "../assets/railway-station.jpg";
import hospitalImage from "../assets/hospital.jpg";
import schoolImage from "../assets/school.jpg";
import marketImage from "../assets/market.jpg";

import ramayanaCityImage from "../assets/Ramayana_city (3).png";

// =====================================================
// COLORS
// =====================================================
const GOLD = "#D0B15B";
const DARK = "#111111";
const DARK2 = "#181818";
const WHITE = "#FFFFFF";

// =====================================================
// STAT COUNTER COMPONENT
// =====================================================
const StatCounter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericMatch = endValue.match(/(\d+)/);

    if (!numericMatch) {
      setCount(endValue);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [endValue]);

  const formattedValue =
    typeof count === "number"
      ? `${count}${endValue.replace(/\d+/g, "")}`
      : count;

  return <span>{formattedValue}</span>;
};

// =====================================================
// DECORATIVE GEOMETRIC BACKGROUND
// =====================================================
const GeometricBackground = ({ dark = false }) => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: dark ? 0.028 : 0.035,
          backgroundImage: `
            linear-gradient(rgba(208,177,91,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(208,177,91,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          border: `1px solid rgba(208,177,91,${dark ? 0.09 : 0.07})`,
          borderRadius: "50%",
          right: "-170px",
          top: "60px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "230px",
          height: "230px",
          border: `1px solid rgba(208,177,91,${dark ? 0.07 : 0.05})`,
          borderRadius: "50%",
          right: "-95px",
          top: "135px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "170px",
          height: "170px",
          border: `1px solid rgba(208,177,91,${dark ? 0.08 : 0.055})`,
          transform: "rotate(28deg)",
          left: "-90px",
          bottom: "50px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "65px",
          height: "65px",
          border: `1px solid rgba(208,177,91,${dark ? 0.12 : 0.08})`,
          transform: "rotate(45deg)",
          right: "8%",
          bottom: "12%",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "1px",
          background: `rgba(208,177,91,${dark ? 0.10 : 0.07})`,
          transform: "rotate(-35deg)",
          left: "-90px",
          top: "24%",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(208,177,91,0.055) 0%, transparent 68%)",
          right: "-180px",
          bottom: "-160px",
        }}
      />
    </div>
  );
};

// =====================================================
// SECTION TITLE
// =====================================================
const SectionTitle = ({
  eyebrow,
  title,
  description,
  dark = false,
}) => {
  return (
    <div className="text-center mb-4 position-relative">
      {eyebrow && (
        <div
          className="d-inline-flex align-items-center justify-content-center gap-2 mb-2"
          style={{
            color: GOLD,
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "28px",
              height: "1px",
              background: GOLD,
            }}
          />

          <span>{eyebrow}</span>

          <span
            style={{
              width: "28px",
              height: "1px",
              background: GOLD,
            }}
          />
        </div>
      )}

      <h2
        className="fw-bold mb-2"
        style={{
          color: dark ? WHITE : "#171717",
          fontSize: "clamp(28px, 3.5vw, 43px)",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mx-auto mb-0"
          style={{
            maxWidth: "680px",
            color: dark ? "rgba(255,255,255,0.60)" : "#666",
            fontSize: "14px",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

// =====================================================
// PREMIUM IMAGE CARD
// =====================================================
const PremiumCard = ({
  title,
  description,
  image,
  dark = false,
}) => {
  return (
    <div
      className="home-premium-card h-100"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "18px",
        background: dark ? DARK2 : WHITE,
        border: `1px solid ${
          dark
            ? "rgba(255,255,255,0.12)"
            : "rgba(0,0,0,0.08)"
        }`,
        boxShadow: dark
          ? "0 12px 35px rgba(0,0,0,0.25)"
          : "0 12px 30px rgba(0,0,0,0.08)",
        transition:
          "transform .4s ease, box-shadow .4s ease, border-color .4s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "270px",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          className="home-premium-card-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform .7s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.08) 15%, rgba(0,0,0,.90) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "24px",
            right: "24px",
            bottom: "22px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "2px",
              background: GOLD,
              marginBottom: "10px",
            }}
          />

          <h3
            style={{
              margin: 0,
              color: WHITE,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
        </div>
      </div>

      <div
        className="home-premium-card-content"
        style={{
          padding: "22px 24px 24px",
          transition: "transform .35s ease",
        }}
      >
        <p
          style={{
            color: dark ? "rgba(255,255,255,.68)" : "#666",
            fontSize: "14px",
            lineHeight: 1.75,
            margin: "0 0 18px",
          }}
        >
          {description}
        </p>

        <div
          className="home-premium-discover"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: GOLD,
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          Discover More

          <span
            style={{
              fontSize: "18px",
              lineHeight: 1,
              transition: "transform .3s ease",
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// HOME
// =====================================================
const Home = () => {
  const [showHeroText, setShowHeroText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroText(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      title: "Secure Community",
      description:
        "A well-planned gated community designed with security, privacy, and comfort at the heart of everyday living.",
      image: aboutImage,
    },
    {
      title: "Premium Living",
      description:
        "Bespoke residential plots thoughtfully planned for modern families, peaceful living and creating a lasting family legacy.",
      image: ramayanaCityImage,
    },
    {
      title: "Strategic Location",
      description:
        "A prime NH-56B location offering excellent connectivity, development potential and a strategically positioned address.",
      image: highwayImage,
    },
  ];

  const amenities = [
    {
      image: highwayImage,
      title: "NH-56B Frontage",
      text: "Prime highway-front location at Khatola Village, Sarojini Nagar.",
    },
    {
      image: airportImage,
      title: "Airport Connectivity",
      text: "Convenient connectivity to Chaudhary Charan Singh International Airport.",
    },
    {
      image: agraExpresswayImage,
      title: "Agra Expressway",
      text: "Excellent access to one of the key expressway corridors.",
    },
    {
      image: purvanchalExpresswayImage,
      title: "Purvanchal Expressway",
      text: "Strategic connectivity towards major destinations across Uttar Pradesh.",
    },
    {
      image: railwayImage,
      title: "Railway Station",
      text: "Convenient access to Lucknow Railway Station and city connectivity.",
    },
    {
      image: hospitalImage,
      title: "Hospitals Nearby",
      text: "Healthcare facilities within convenient reach of the township.",
    },
    {
      image: schoolImage,
      title: "Schools & Colleges",
      text: "Educational institutions available across the surrounding areas.",
    },
    {
      image: marketImage,
      title: "Shopping & Markets",
      text: "Daily conveniences, markets and shopping destinations nearby.",
    },
  ];

  return (
    <main style={{ overflowX: "hidden" }}>
      <style>{`
        /* =====================================================
            PREMIUM CARD HOVER
        ===================================================== */

        .home-premium-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 55px rgba(0,0,0,.40) !important;
          border-color: rgba(208,177,91,.55) !important;
        }

        .home-premium-card:hover .home-premium-card-image {
          transform: scale(1.08);
        }

        .home-premium-card:hover .home-premium-card-content {
          transform: translateY(-3px);
        }

        .home-premium-card:hover .home-premium-discover span {
          transform: translateX(5px);
        }

        /* =====================================================
            AMENITY HOVER
        ===================================================== */

        .amenity-card:hover {
          transform: translateY(-5px);
          border-color: rgba(208,177,91,.48) !important;
        }

        .amenity-card:hover .amenity-image img {
          transform: scale(1.07);
        }

        /* =====================================================
            LOCATION HOVER
        ===================================================== */

        .location-card:hover {
          transform: translateY(-4px);
          border-color: rgba(208,177,91,.38) !important;
        }

        /* =====================================================
            STAT CARD HOVER
        ===================================================== */

        .ramayana-stat-card {
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .ramayana-stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(208,177,91,.45) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,.08) !important;
        }

        /* =====================================================
            ABOUT IMAGE HOVER
        ===================================================== */

        .ramayana-about-image {
          transition: transform .6s ease;
        }

        .ramayana-about-image-wrap:hover .ramayana-about-image {
          transform: scale(1.03);
        }

        /* =====================================================
            SITE VISIT RESPONSIVE RULES
            
            DESKTOP & TABLET (78px and above):
            - Image and Form display side by side.
            
            MOBILE (Below 768px):
            - Image column is hidden completely.
            - Form column takes 100% full width.
        ===================================================== */

        .site-visit-image {
          display: block !important;
        }

        .site-visit-form {
          display: block !important;
        }

        @media (max-width: 767px) {

          .home-premium-card > div:first-child {
            height: 235px !important;
          }

          .home-premium-card-content {
            padding: 20px !important;
          }

          .ramayana-section {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }

          /* ===============================================
             SITE VISIT IMAGE - HIDE ON MOBILE
          =============================================== */
          .site-visit-image {
            display: none !important;
          }

          /* ===============================================
             SITE VISIT FORM - FULL WIDTH ON MOBILE
          =============================================== */
          .site-visit-form {
            display: block !important;
            width: 100% !important;
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }

          .site-visit-form > div {
            width: 100% !important;
            padding: 25px 18px !important;
          }

          .site-visit-form .row {
            --bs-gutter-x: 0.6rem;
            --bs-gutter-y: 0.6rem;
          }

          .site-visit-form h2 {
            font-size: 29px !important;
          }

          .site-visit-form input,
          .site-visit-form select,
          .site-visit-form textarea {
            font-size: 13px !important;
          }
        }

        @media (max-width: 575px) {
          .site-visit-form > div {
            padding: 23px 15px !important;
          }

          .site-visit-form h2 {
            font-size: 27px !important;
          }

          .site-visit-form input,
          .site-visit-form select {
            min-height: 44px !important;
          }

          .site-visit-form textarea {
            height: 65px !important;
          }
        }
      `}</style>

      {/* =====================================================
          SECTION 01 - HERO
      ====================================================== */}

      <section
        id="home"
        className="position-relative"
        style={{
          height: "min(780px, 100vh)",
          minHeight: "620px",
          overflow: "hidden",
          background: DARK,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            position: "absolute",
            inset: 0,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.20) 20%, rgba(0,0,0,.75) 100%)",
          }}
        />

        <div
          className="container h-100 position-relative d-flex align-items-end pb-5"
          style={{ zIndex: 2 }}
        >
          <div
            style={{
              maxWidth: "600px",
              opacity: showHeroText ? 1 : 0,
              visibility: showHeroText ? "visible" : "hidden",
              transition:
                "opacity 0.8s ease, visibility 0.8s ease",
            }}
          >
            <div
              className="d-flex align-items-center gap-2 mb-2"
              style={{
                color: GOLD,
                letterSpacing: "1.5px",
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "25px",
                  height: "1px",
                  background: GOLD,
                }}
              />

              Premium Residential Township · Lucknow
            </div>

            <h1
              className="fw-bold text-white mb-2"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.1,
              }}
            >
              Welcome to{" "}
              <span style={{ color: GOLD }}>
                Ramayana City
              </span>
            </h1>

            <p
              className="text-white mb-3"
              style={{
                fontSize: "clamp(13px, 1.5vw, 16px)",
                opacity: 0.85,
              }}
            >
              Where Spiritual Legacy Meets Modern Living
            </p>

            <div className="d-flex flex-wrap gap-2">
              <Link
                to="/contact"
                className="btn px-3 py-1.5 fw-semibold"
                style={{
                  background: GOLD,
                  border: `1px solid ${GOLD}`,
                  color: WHITE,
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              >
                Book Site Visit →
              </Link>

              <a
                href="#about"
                className="btn px-3 py-1.5 fw-semibold"
                style={{
                  color: WHITE,
                  border:
                    "1px solid rgba(255,255,255,.45)",
                  borderRadius: "4px",
                  background:
                    "rgba(255,255,255,.05)",
                  fontSize: "12px",
                }}
              >
                Explore Township
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 02 - ABOUT
      ====================================================== */}

      <section
        id="about"
        className="position-relative ramayana-section"
        style={{
          background: WHITE,
          padding: "70px 0",
          overflow: "hidden",
        }}
      >
        <GeometricBackground />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="ramayana-about-image-wrap"
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow:
                    "0 20px 45px rgba(0,0,0,.10)",
                }}
              >
                <img
                  src={aboutImage}
                  alt="Ramayana City Township"
                  className="img-fluid w-100 ramayana-about-image"
                  style={{
                    height:
                      "clamp(320px, 42vw, 420px)",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: "18px",
                    bottom: "18px",
                    background:
                      "rgba(17,17,17,.92)",
                    color: WHITE,
                    padding: "13px 18px",
                    borderLeft: `3px solid ${GOLD}`,
                    borderRadius: "4px",
                  }}
                >
                  <small
                    style={{
                      color: GOLD,
                      fontSize: "10px",
                    }}
                  >
                    RAMAYANA CITY
                  </small>

                  <div
                    className="fw-bold"
                    style={{ fontSize: "13px" }}
                  >
                    Premium Residential Township
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <div
                  className="d-inline-flex align-items-center justify-content-start gap-2 mb-2"
                  style={{
                    color: GOLD,
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "1px",
                      background: GOLD,
                    }}
                  />

                  <span>ABOUT RAMAYANA CITY</span>
                </div>

                <h2
                  className="fw-bold mb-3"
                  style={{
                    color: "#171717",
                    fontSize:
                      "clamp(26px, 3.2vw, 38px)",
                    lineHeight: 1.15,
                  }}
                >
                  Modern Living Rooted in Timeless
                  Values
                </h2>

                <p
                  className="mb-3"
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  A thoughtfully planned residential
                  township combining modern
                  infrastructure, greenery,
                  connectivity and spiritual values.
                </p>
              </div>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.75,
                  fontSize: "14px",
                }}
              >
                Ramayana City is a premier gated
                township created for modern living
                while remaining rooted in timeless
                spiritual values. Located on NH-56B
                in Khatola Village, Sarojini Nagar,
                Lucknow, the township brings together
                modern connectivity and peaceful
                residential living.
              </p>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.75,
                  fontSize: "14px",
                }}
              >
                With a thoughtful environment
                inspired by the legacy of Lord Rama,
                the township aims to create a
                harmonious lifestyle where community,
                greenery and contemporary
                infrastructure come together.
              </p>

              <div
                className="d-flex align-items-center gap-3 mt-3"
                style={{
                  borderTop: "1px solid #eee",
                  paddingTop: "18px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GOLD,
                    fontSize: "19px",
                    flexShrink: 0,
                  }}
                >
                  ॐ
                </div>

                <div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: "14px" }}
                  >
                    Our Vision
                  </div>

                  <small
                    style={{
                      color: "#777",
                      fontSize: "12px",
                    }}
                  >
                    Spiritual values · Sustainable
                    development · Modern living
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 03 - WHY CHOOSE
      ====================================================== */}

      <section
        id="why-choose"
        className="position-relative ramayana-section"
        style={{
          background: DARK,
          padding: "70px 0",
          overflow: "hidden",
        }}
      >
        <GeometricBackground dark />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <SectionTitle
            title="Thoughtfully Planned. Strategically Connected."
            description="Thoughtfully planned spaces, strategic connectivity and a lifestyle designed around comfort, security and long-term value."
            dark
          />

          <div className="row g-4 mt-2">
            {highlights.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >
                <PremiumCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  dark
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 04 - PROJECT OVERVIEW
      ====================================================== */}

      <section
        id="project-overview"
        className="position-relative ramayana-section"
        style={{
          background: WHITE,
          padding: "55px 0",
          overflow: "hidden",
        }}
      >
        <GeometricBackground />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <SectionTitle
            eyebrow="PROJECT OVERVIEW"
            title="Designed Around Better Living"
            description="Key planning features that define the Ramayana City experience."
          />

          <div className="row g-3 mt-2 justify-content-center">
            {[
              ["17m", "Botanical Green Belt"],
              ["100%", "Gated & Secure"],
              ["NH-56B", "Prime Location"],
            ].map(([value, label]) => (
              <div
                className="col-12 col-md-4"
                key={label}
              >
                <div
                  className="ramayana-stat-card text-center p-3 h-100"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    borderRadius: "15px",
                    boxShadow:
                      "0 10px 25px rgba(0,0,0,.045)",
                  }}
                >
                  <div
                    className="fw-bold"
                    style={{
                      color: GOLD,
                      fontSize:
                        "clamp(27px, 3.5vw, 40px)",
                      lineHeight: 1.1,
                    }}
                  >
                    <StatCounter endValue={value} />
                  </div>

                  <div
                    className="fw-semibold mt-2"
                    style={{
                      color: "#333",
                      fontSize: "13px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 05 - PREMIUM AMENITIES
      ====================================================== */}

      <section
        id="amenities"
        className="position-relative ramayana-section"
        style={{
          background: DARK,
          padding: "65px 0",
          overflow: "hidden",
        }}
      >
        <GeometricBackground dark />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <SectionTitle
            dark
            eyebrow="PREMIUM AMENITIES"
            title="Connectivity That Adds Value"
            description="Everything you need for convenient modern living is connected to a strategically positioned township."
          />

          <div className="row g-3 mt-1">
            {amenities.map((item, index) => (
              <div
                className="col-sm-6 col-lg-3"
                key={item.title}
              >
                <div
                  className="amenity-card h-100"
                  style={{
                    background: DARK2,
                    border:
                      "1px solid rgba(208,177,91,.16)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,.20)",
                    transition:
                      "transform .35s ease, border-color .35s ease",
                  }}
                >
                  <div
                    className="amenity-image"
                    style={{
                      height: "155px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition:
                          "transform .6s ease",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, transparent, rgba(0,0,0,.7))",
                      }}
                    />

                    <span
                      style={{
                        position: "absolute",
                        left: "13px",
                        bottom: "12px",
                        color: GOLD,
                        fontWeight: 700,
                        fontSize: "10px",
                        letterSpacing: "1px",
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-3">
                    <h5
                      className="fw-bold mb-1"
                      style={{
                        color: WHITE,
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      className="mb-0"
                      style={{
                        color:
                          "rgba(255,255,255,.54)",
                        lineHeight: 1.6,
                        fontSize: "12px",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 06 - DIVINE LIFESTYLE
      ====================================================== */}

      <section
        id="lifestyle"
        className="position-relative ramayana-section"
        style={{
          background: WHITE,
          padding: "70px 0",
          overflow: "hidden",
        }}
      >
        <GeometricBackground />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <SectionTitle
            eyebrow="DIVINE LIFESTYLE"
            title="A Lifestyle Inspired by Peace & Purpose"
            description="A harmonious community where serenity, greenery, spiritual values and modern infrastructure come together."
          />

          <div className="row align-items-center g-4 mt-2">
            <div className="col-lg-6 order-2 order-lg-1">
              <p
                style={{
                  color: "#666",
                  lineHeight: 1.75,
                  fontSize: "14px",
                }}
              >
                Ramayana City is envisioned as
                more than just a residential
                address. It is a thoughtfully planned
                community where serenity, greenery,
                spiritual values and modern
                infrastructure create an elevated
                lifestyle.
              </p>

              <div className="row g-2 mt-3">
                {[
                  "Guided Site Tour",
                  "Premium Residential Plots",
                  "Prime NH-56B Location",
                  "Gated Community",
                ].map((item) => (
                  <div
                    className="col-sm-6"
                    key={item}
                  >
                    <div
                      className="d-flex align-items-center gap-2 p-2"
                      style={{
                        border: "1px solid #e7e7e7",
                        borderRadius: "9px",
                        background: "#fff",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>

                      <span
                        className="fw-semibold"
                        style={{ fontSize: "12px" }}
                      >
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3">
                <Link
                  to="/contact"
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    background: GOLD,
                    color: WHITE,
                    border: `1px solid ${GOLD}`,
                    fontSize: "13px",
                  }}
                >
                  Book Site Visit
                </Link>

                <a
                  href="tel:+918882125125"
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    border: "1px solid #222",
                    color: "#222",
                    fontSize: "13px",
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <div
                style={{
                  position: "relative",
                  padding: "15px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: `1px solid ${GOLD}`,
                    borderRadius: "20px",
                    transform: "rotate(2.5deg)",
                    opacity: 0.32,
                  }}
                />

                <img
                  src={ramayanaCityImage}
                  alt="Experience Ramayana City"
                  className="img-fluid w-100"
                  style={{
                    height:
                      "clamp(300px, 40vw, 390px)",
                    objectFit: "cover",
                    borderRadius: "18px",
                    position: "relative",
                    zIndex: 2,
                    boxShadow:
                      "0 20px 45px rgba(0,0,0,.10)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 08 - BOOK YOUR FREE SITE VISIT
      ====================================================== */}

      <section
        id="site-visit"
        className="position-relative ramayana-section"
        style={{
          background: WHITE,
          padding: "10px 0",
          overflow: "hidden",
        }}
      >
        <GeometricBackground />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <SectionTitle
            eyebrow="SITE VISIT"
            title="Book Your Free Site Visit"
            description="Visit Ramayana City and experience the township, location and planning personally."
          />

          <div
            className="row g-0 align-items-stretch mt-4"
            style={{
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow:
                "0 20px 55px rgba(0,0,0,.13)",
            }}
          >
            {/* =================================================
                IMAGE COLUMN (Visible on Desktop/Tablet, Hidden on Mobile via CSS)
            ================================================== */}
            <div className="col-12 col-md-5 col-lg-5 site-visit-image">
              <div
                className="h-100 position-relative"
                style={{
                  minHeight: "510px",
                  overflow: "hidden",
                  background: DARK,
                }}
              >
                <img
                  src={ramayanaCityImage}
                  alt="Ramayana City"
                  className="w-100 h-100"
                  style={{
                    position: "absolute",
                    inset: 0,
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.88))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "240px",
                    height: "240px",
                    border:
                      "1px solid rgba(208,177,91,.28)",
                    borderRadius: "50%",
                    right: "-100px",
                    top: "-75px",
                  }}
                />

                <div
                  className="position-absolute"
                  style={{
                    left: "25px",
                    right: "25px",
                    bottom: "27px",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      color: GOLD,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      marginBottom: "8px",
                    }}
                  >
                    PREMIUM TOWNSHIP
                  </div>

                  <h3
                    className="text-white fw-bold mb-2"
                    style={{
                      fontSize:
                        "clamp(27px, 3vw, 38px)",
                      lineHeight: 1.1,
                    }}
                  >
                    Experience

                    <span
                      className="d-block"
                      style={{ color: GOLD }}
                    >
                      Ramayana City
                    </span>
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color:
                        "rgba(255,255,255,.70)",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      maxWidth: "370px",
                    }}
                  >
                    Discover a thoughtfully planned
                    residential township where modern
                    infrastructure meets timeless
                    spiritual values.
                  </p>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {[
                      "35m Boulevard",
                      "17m Green Belt",
                      "Gated Community",
                    ].map((item) => (
                      <span
                        key={item}
                        style={{
                          border:
                            "1px solid rgba(208,177,91,.38)",
                          background:
                            "rgba(0,0,0,.28)",
                          color: WHITE,
                          borderRadius: "20px",
                          padding: "5px 9px",
                          fontSize: "10px",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FORM COLUMN (Side-by-side on desktop/tablet, Full width on mobile)
            ================================================== */}
            <div className="col-12 col-md-7 col-lg-7 site-visit-form">
              <div
                className="h-100"
                style={{
                  background: DARK,
                  padding:
                    "clamp(25px, 4vw, 42px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "170px",
                    height: "170px",
                    border:
                      "1px solid rgba(208,177,91,.09)",
                    transform: "rotate(45deg)",
                    right: "-85px",
                    bottom: "-85px",
                  }}
                />

                <div
                  className="position-relative"
                  style={{ zIndex: 2 }}
                >
                  <div className="mb-3">
                    <h2
                      className="text-white fw-bold mt-2 mb-2"
                      style={{
                        fontSize:
                          "clamp(27px, 3vw, 38px)",
                        lineHeight: 1.1,
                      }}
                    >
                      Plan Your{" "}
                      <span style={{ color: GOLD }}>
                        Visit
                      </span>
                    </h2>

                    <p
                      className="mb-0"
                      style={{
                        color:
                          "rgba(255,255,255,.55)",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      Fill in your details and our team
                      will contact you to arrange your
                      personalized site visit.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) =>
                      e.preventDefault()
                    }
                  >
                    <div className="row g-2">
                      <div className="col-md-6">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter phone number"
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Email Address
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          style={inputStyle}
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Plot Type
                        </label>

                        <select
                          className="form-select"
                          defaultValue=""
                          style={{
                            ...inputStyle,
                            colorScheme: "dark",
                          }}
                        >
                          <option value="" disabled>
                            Select plot type
                          </option>

                          <option>
                            Residential Plot
                          </option>

                          <option>
                            Corner Plot
                          </option>

                          <option>
                            Park Facing Plot
                          </option>

                          <option>
                            Commercial Plot
                          </option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Budget
                        </label>

                        <select
                          className="form-select"
                          defaultValue=""
                          style={{
                            ...inputStyle,
                            colorScheme: "dark",
                          }}
                        >
                          <option value="" disabled>
                            Select budget
                          </option>

                          <option>
                            10-20 Lakh
                          </option>

                          <option>
                            20-40 Lakh
                          </option>

                          <option>
                            40-60 Lakh
                          </option>

                          <option>
                            Above 60 Lakh
                          </option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Preferred Visit Date
                        </label>

                        <input
                          type="date"
                          className="form-control"
                          style={{
                            ...inputStyle,
                            colorScheme: "dark",
                          }}
                        />
                      </div>

                      <div className="col-12">
                        <label
                          className="form-label"
                          style={formLabelStyle}
                        >
                          Message
                        </label>

                        <textarea
                          rows="2"
                          className="form-control"
                          placeholder="Tell us how we can help..."
                          style={{
                            ...inputStyle,
                            height: "70px",
                            resize: "none",
                          }}
                        />
                      </div>

                      <div className="col-12 mt-2">
                        <button
                          type="submit"
                          className="btn w-100 py-2 fw-bold"
                          style={{
                            background: GOLD,
                            color: WHITE,
                            border: `1px solid ${GOLD}`,
                            borderRadius: "5px",
                            minHeight: "46px",
                            fontSize: "13px",
                          }}
                        >
                          Book Free Site Visit

                          <span className="ms-2">
                            →
                          </span>
                        </button>
                      </div>

                      <div className="col-12 text-center">
                        <small
                          style={{
                            color:
                              "rgba(255,255,255,.35)",
                            fontSize: "10px",
                          }}
                        >
                          🔒 100% Confidential & Spam
                          Free Assurance
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 09 - FINAL CTA
      ===================================================== */}

      <section
        id="contact-cta"
        className="position-relative text-center ramayana-section"
        style={{
          background: DARK,
          padding: "70px 20px",
          overflow: "hidden",
        }}
      >
        <GeometricBackground dark />

        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <span
            style={{
              color: GOLD,
              fontWeight: 700,
              letterSpacing: "2px",
              fontSize: "10px",
            }}
          >
            RAMAYANA CITY
          </span>

          <h2
            className="text-white fw-bold mt-2 mb-3"
            style={{
              fontSize:
                "clamp(32px, 4.5vw, 55px)",
              lineHeight: 1.1,
            }}
          >
            Your Premium Address{" "}
            <span style={{ color: GOLD }}>
              Awaits.
            </span>
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "600px",
              color:
                "rgba(255,255,255,.56)",
              lineHeight: 1.7,
              fontSize: "13px",
            }}
          >
            Experience a thoughtfully planned
            township where modern infrastructure,
            greenery, connectivity and timeless
            values come together.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Link
              to="/contact"
              className="btn px-4 py-2 fw-semibold"
              style={{
                background: GOLD,
                color: WHITE,
                border: `1px solid ${GOLD}`,
                fontSize: "13px",
              }}
            >
              Book Site Visit
            </Link>

            <a
              href="tel:+918882125125"
              className="btn px-4 py-2 fw-semibold"
              style={{
                color: WHITE,
                border:
                  "1px solid rgba(255,255,255,.35)",
                fontSize: "13px",
              }}
            >
              +91-8882125125
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

// =====================================================
// INPUT STYLES
// =====================================================

const inputStyle = {
  background: "#1b1b1b",
  border: "1px solid rgba(255,255,255,.13)",
  color: "#fff",
  minHeight: "47px",
  borderRadius: "6px",
  padding: "10px 13px",
  fontSize: "13px",
};

const formLabelStyle = {
  color: "rgba(255,255,255,.62)",
  fontSize: "11px",
  fontWeight: 600,
  marginBottom: "5px",
};

export default Home;