import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// =====================================================
// IMAGES IMPORTS
// =====================================================
import aboutImage from "../assets/mandir2.png";
import grandEntrance from "../assets/Grand Entrence.jpeg";
import mandir from "../assets/mandir2.png";
import lordRama from "../assets/lord-rama.jpg";
import greenBelt from "../assets/green-belt.png";
import security from "../assets/security.jpg";
import park from "../assets/green-belt.png";
import agraExpressway from "../assets/AgraExpressway.jpg";

// =====================================================
// STATIC DATA
// =====================================================
const WHY_CHOOSE_DATA = [
  {
    number: "01",
    tag: "Divine Legacy",
    title: "Spiritual Sanctuary",
    description:
      "Featuring a magnificent Ram Temple and statue of Lord Rama at the core of the community.",
    image: mandir,
    buttonText: "Explore More",
    action: "about",
  },
  {
    number: "02",
    tag: "Nature & Peace",
    title: "Botanical Green Living",
    description:
      "Expansive landscaped parks and lush green belts offering a tranquil, pollution-free atmosphere.",
    image: park,
    buttonText: "View Amenities",
    action: "amenities",
  },
  {
    number: "03",
    tag: "Peace of Mind",
    title: "Secure Gated Community",
    description:
      "Multi-tier 24/7 security systems designed to ensure a safe, protected environment for your family.",
    image: security,
    buttonText: "View Location",
    action: "location",
  },
];

const AMENITIES_DATA = [
  {
    image: mandir,
    title: "Ram Temple",
    icon: "fa-solid fa-gopuram",
  },
  {
    image: lordRama,
    title: "Lord Rama Statue",
    icon: "fa-solid fa-star",
  },
  {
    image: greenBelt,
    title: "17 Meter Green Belt",
    icon: "fa-solid fa-leaf",
  },
  {
    image: security,
    title: "Gated Community & Security",
    icon: "fa-solid fa-shield-halved",
  },
  {
    image: park,
    title: "Landscaped Parks",
    icon: "fa-solid fa-tree",
  },
  {
    image: agraExpressway,
    title: "Prime NH-56B Connectivity",
    icon: "fa-solid fa-location-dot",
  },
  {
    image: grandEntrance,
    title: "Grand Entrance Gate",
    icon: "fa-solid fa-archway",
  },
];

// =====================================================
// ABOUT PAGE COMPONENT
// =====================================================
const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amenitiesRef = useRef(null);

  // =====================================================
  // HANDLE HASH SCROLL & PAGE TOP SCROLL
  // =====================================================
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const timer = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash]);

  // =====================================================
  // NAVIGATE TO HOME SECTION
  // =====================================================
  const goToHomeSection = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  // =====================================================
  // HANDLE WHY CHOOSE ACTION
  // =====================================================
  const handleWhyChooseAction = (action) => {
    if (action === "about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (action === "amenities") {
      amenitiesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    if (action === "location") {
      goToHomeSection("location");
    }
  };

  return (
    <main className="ramayana-about-page">

      {/* =====================================================
          PREMIUM PAGE STYLING
      ===================================================== */}
      <style>
        {`
          /* =====================================================
              GLOBAL ABOUT PAGE
          ===================================================== */

          .ramayana-about-page {
            --dark-bg: #171512;
            --dark-bg-2: #211d18;
            --gold: #C8A22C;
            --light-bg: #ffffff;
            --light-bg-2: #f7f7f5;
            --dark-text: #1A1815;
            --light-text: #ffffff;

            overflow: hidden;
          }


          /* =====================================================
              HERO SECTION (COMPACTED HEIGHT)
          ===================================================== */

          .page-hero-section {
            min-height: 420px !important;
            height: 420px;

            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;
            overflow: hidden;

            border-bottom: 4px solid var(--gold);
          }

          /* Hero geometric pattern */
          .page-hero-section::before {
            content: "";
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                135deg,
                transparent 0%,
                rgba(200, 162, 44, 0.08) 35%,
                transparent 36%,
                transparent 65%,
                rgba(200, 162, 44, 0.06) 66%,
                transparent 67%
              );

            pointer-events: none;
          }

          /* Hero diamond */
          .page-hero-section::after {
            content: "";

            position: absolute;

            width: 320px;
            height: 320px;

            border: 1px solid rgba(200, 162, 44, 0.25);

            transform: rotate(45deg);

            right: -140px;
            bottom: -160px;

            pointer-events: none;
          }

          .page-hero-section .container {
            position: relative;
            z-index: 5;
          }

          .page-hero-section h1 {
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
          }


          /* =====================================================
              ABOUT SECTION - WHITE
          ===================================================== */

          .ramayana-about-page #about {
            position: relative;

            background:
              linear-gradient(
                135deg,
                #ffffff 0%,
                #ffffff 65%,
                #f7f7f5 100%
              ) !important;

            overflow: hidden;
          }

          /* Large diamond */
          .ramayana-about-page #about::before {
            content: "";

            position: absolute;

            width: 300px;
            height: 300px;

            border: 1px solid rgba(200, 162, 44, 0.18);

            transform: rotate(45deg);

            right: -160px;
            top: 80px;

            pointer-events: none;
          }

          /* Small diamond */
          .ramayana-about-page #about::after {
            content: "";

            position: absolute;

            width: 180px;
            height: 180px;

            border: 1px solid rgba(26, 24, 21, 0.08);

            transform: rotate(45deg);

            left: -100px;
            bottom: 70px;

            pointer-events: none;
          }

          .ramayana-about-page #about > .container {
            position: relative;
            z-index: 2;
          }


          /* =====================================================
              ABOUT IMAGE
          ===================================================== */

          .ramayana-about-page .about-img-showcase {
            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease;
          }

          .ramayana-about-page .about-img-showcase:hover {
            transform: translateY(-5px);

            box-shadow:
              0 22px 45px rgba(0, 0, 0, 0.18) !important;
          }


          /* =====================================================
              WHY CHOOSE - DARK
          ===================================================== */

          .ramayana-about-page #why-choose {
            position: relative;

            background:
              linear-gradient(
                135deg,
                #171512 0%,
                #211d18 55%,
                #14120f 100%
              ) !important;

            color: #ffffff;

            overflow: hidden;
          }

          /* Left geometric pattern */
          .ramayana-about-page #why-choose::before {
            content: "";

            position: absolute;

            width: 480px;
            height: 480px;

            border: 1px solid rgba(200, 162, 44, 0.20);

            transform: rotate(45deg);

            left: -250px;
            top: 80px;

            box-shadow:
              0 0 0 45px rgba(200, 162, 44, 0.025),
              0 0 0 90px rgba(200, 162, 44, 0.018);

            pointer-events: none;
          }

          /* Right geometric pattern */
          .ramayana-about-page #why-choose::after {
            content: "";

            position: absolute;

            width: 350px;
            height: 350px;

            border: 1px solid rgba(255, 255, 255, 0.08);

            transform: rotate(45deg);

            right: -180px;
            bottom: -180px;

            pointer-events: none;
          }

          .ramayana-about-page #why-choose > .container {
            position: relative;
            z-index: 3;
          }


          /* =====================================================
              WHY CHOOSE HEADINGS
          ===================================================== */

          .ramayana-about-page #why-choose h2 {
            color: #ffffff !important;
          }

          .ramayana-about-page #why-choose .text-muted {
            color: rgba(255, 255, 255, 0.70) !important;
          }

          .ramayana-about-page #why-choose .wcp-tag {
            color: #C8A22C !important;
          }


          /* =====================================================
              WHY CHOOSE CARDS
          ===================================================== */

          .ramayana-about-page .wcp-panel {
            border: 1px solid rgba(200, 162, 44, 0.25) !important;

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;
          }

          .ramayana-about-page .wcp-panel:hover {
            transform: translateY(-5px);

            border-color: rgba(200, 162, 44, 0.70) !important;

            box-shadow:
              0 15px 35px rgba(0, 0, 0, 0.3) !important;
          }


          /* =====================================================
              AMENITIES - WHITE
          ===================================================== */

          .ramayana-about-page #amenities {
            position: relative;

            background:
              linear-gradient(
                135deg,
                #ffffff 0%,
                #ffffff 70%,
                #f5f5f3 100%
              ) !important;

            overflow: hidden;
          }

          /* Left diamond */
          .ramayana-about-page #amenities::before {
            content: "";

            position: absolute;

            width: 420px;
            height: 420px;

            border: 1px solid rgba(200, 162, 44, 0.16);

            transform: rotate(45deg);

            left: -220px;
            bottom: -180px;

            pointer-events: none;
          }

          /* Right diamond */
          .ramayana-about-page #amenities::after {
            content: "";

            position: absolute;

            width: 250px;
            height: 250px;

            border: 1px solid rgba(26, 24, 21, 0.07);

            transform: rotate(45deg);

            right: -120px;
            top: 100px;

            pointer-events: none;
          }

          .ramayana-about-page #amenities > .container,
          .ramayana-about-page #amenities > .amenities-slider-wrapper {
            position: relative;
            z-index: 3;
          }


          /* =====================================================
              AMENITIES CARDS
          ===================================================== */

          .ramayana-about-page .amenity-image-wrapper {
            border: 1px solid rgba(200, 162, 44, 0.25);

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;
          }

          .ramayana-about-page .amenity-image-wrapper:hover {
            transform: translateY(-6px);

            border-color: rgba(200, 162, 44, 0.75);

            box-shadow:
              0 18px 40px rgba(0, 0, 0, 0.18) !important;
          }


          /* =====================================================
              AMENITY NAVIGATION BUTTONS (DYNAMIC COLORS)
          ===================================================== */

          .ramayana-about-page .amenity-prev,
          .ramayana-about-page .amenity-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            /* Golden Background */
            background: #C8A22C !important;
            border: 2px solid #C8A22C !important;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
          }

          .ramayana-about-page .amenity-prev {
            left: 20px;
          }

          .ramayana-about-page .amenity-next {
            right: 20px;
          }

          /* Normal state: Black arrow on Golden background */
          .ramayana-about-page .amenity-prev i,
          .ramayana-about-page .amenity-next i {
            color: #171512 !important;
            font-size: 18px;
            font-weight: 900;
            transition: color 0.3s ease;
          }

          /* Hover state: Black background with Golden/White arrow */
          .ramayana-about-page .amenity-prev:hover,
          .ramayana-about-page .amenity-next:hover {
            background: #171512 !important;
            transform: translateY(-50%) scale(1.1);
            border-color: #C8A22C !important;
          }

          .ramayana-about-page .amenity-prev:hover i,
          .ramayana-about-page .amenity-next:hover i {
            color: #ffffff !important;
          }

          @media (max-width: 767px) {
            .ramayana-about-page .amenity-prev {
              left: 5px;
              width: 40px;
              height: 40px;
            }
            .ramayana-about-page .amenity-next {
              right: 5px;
              width: 40px;
              height: 40px;
            }
          }


          /* =====================================================
              EXPLORE BUTTON
          ===================================================== */

          .ramayana-about-page .vl-btn1 {
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .ramayana-about-page .vl-btn1:hover {
            transform: translateY(-3px);

            box-shadow:
              0 10px 25px rgba(0, 0, 0, 0.15);
          }


          /* =====================================================
              MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            /* Hero */
            .page-hero-section {
              min-height: 360px !important;
              height: 360px;

              padding-top: 50px !important;
              padding-bottom: 50px !important;
            }

            .page-hero-section h1 {
              font-size: 28px !important;
            }

            .page-hero-section .badge {
              font-size: 10px !important;
              letter-spacing: 1.5px !important;
            }

            /* Reduce geometric shapes on mobile */
            .ramayana-about-page #about::before,
            .ramayana-about-page #about::after,
            .ramayana-about-page #why-choose::before,
            .ramayana-about-page #why-choose::after,
            .ramayana-about-page #amenities::before,
            .ramayana-about-page #amenities::after {
              opacity: 0.45;
            }

            /* About image */
            .ramayana-about-page .about-img-showcase {
              min-height: 380px !important;
            }
          }


          /* =====================================================
              TABLET
          ===================================================== */

          @media (min-width: 768px) and (max-width: 991px) {

            .page-hero-section {
              min-height: 400px !important;
              height: 400px;
            }

          }
        `}
      </style>


      {/* =====================================================
          HERO / BREADCRUMB SECTION
      ===================================================== */}
      <section
        className="page-hero-section position-relative py-4 text-white"
        style={{
          background: `
            linear-gradient(
              rgba(26, 24, 21, 0.75),
              rgba(26, 24, 21, 0.85)
            ),
            url(${aboutImage}) center/cover no-repeat
          `,
          paddingTop: "60px",
          paddingBottom: "60px",
          borderBottom: "4px solid #C8A22C",
        }}
      >
        <div className="container text-center py-2">

          <h1
            className="display-5 fw-bold mb-2"
            style={{
              color: "#ffffff",
              fontFamily: "inherit",
            }}
          >
            About Our Township
          </h1>

          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb justify-content-center mb-0"
              style={{
                fontSize: "14px",
              }}
            >
              <li className="breadcrumb-item">
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{
                    color: "#C8A22C",
                  }}
                >
                  Home
                </Link>
              </li>

              <li
                className="breadcrumb-item active text-light"
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>

        </div>
      </section>


      {/* =====================================================
          ABOUT SECTION - WHITE
      ===================================================== */}
      <section
        id="about"
        className="about2 sp1 py-5"
        style={{
          background: "#ffffff",
        }}
      >
        <div className="container">

          <div className="row align-items-stretch g-4 g-lg-5">

            {/* Image Showcase */}
            <div className="col-lg-5 d-flex">

              <div
                className="about-img-showcase"
                style={{
                  width: "100%",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                  border: "2px solid #C8A22C",
                  minHeight: "520px",
                  display: "flex",
                }}
              >
                <img
                  src={aboutImage}
                  alt="Ramayana City Township"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

            </div>


            {/* Content Info */}
            <div className="col-lg-7 d-flex flex-column justify-content-center">

              <div className="heading1 ps-lg-3">

                <span
                  style={{
                    color: "#C8A22C",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  About The Project
                </span>


                <h2
                  className="text-anime-style-3"
                  style={{
                    fontSize: "34px",
                    lineHeight: 1.3,
                    marginBottom: "18px",
                    color: "#1A1815",
                  }}
                >
                  Modern Living Rooted in Timeless Spiritual Values
                </h2>


                <p
                  style={{
                    color: "#3D3831",
                    fontSize: "15.5px",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  Welcome to <strong>Ramayana City</strong>—a premier
                  gated township designed for modern living rooted in
                  timeless spiritual values. Located on NH56B in Khatola
                  Village, Sarojini Nagar, Lucknow, Ramayana City offers
                  the perfect harmony between modern urban connectivity
                  and peaceful residential living.
                </p>


                <p
                  style={{
                    color: "#3D3831",
                    fontSize: "15.5px",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  At the heart of our community stands a serene
                  <strong> Ram Temple</strong> and a magnificent
                  <strong> statue of Lord Rama</strong>, creating a
                  tranquil haven away from the city's hustle.
                </p>


                {/* Vision Box */}
                <div
                  className="p-4 rounded-3 mb-4"
                  style={{
                    background: "rgba(200, 162, 44, 0.08)",
                    borderLeft: "4px solid #C8A22C",
                  }}
                >
                  <h3
                    style={{
                      color: "#1A1815",
                      fontSize: "18px",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Our Vision
                  </h3>

                  <p
                    style={{
                      color: "#3D3831",
                      fontSize: "14.5px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    To create a landmark township where spiritual values,
                    sustainable development, and modern urban living come
                    together, offering an exceptional lifestyle and a
                    valuable investment opportunity for generations to come.
                  </p>
                </div>


                {/* Explore Button */}
                <div className="btn-area1">
                  <Link
                    to="/"
                    className="vl-btn1"
                  >
                    Explore More

                    <span className="arrow1">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>

                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE SECTION - DARK
      ===================================================== */}
      <section
        id="why-choose"
        className="why-choose-premium py-5"
        style={{
          background: "#171512",
        }}
      >
        <div className="container">

          {/* Heading */}
          <div className="wcp-heading-wrap text-center mb-5">

            <div className="wcp-heading-inner">

              <span
                className="wcp-tag"
                style={{
                  color: "#C8A22C",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                Township Highlights
              </span>

              <h2
                className="fw-bold mt-2"
                style={{
                  color: "#ffffff",
                }}
              >
                Why Choose{" "}
                <span
                  style={{
                    color: "#C8A22C",
                  }}
                >
                  Ramayana City
                </span>
              </h2>

              <p
                className="text-muted mx-auto mt-2"
                style={{
                  maxWidth: "700px",
                }}
              >
                Discover what makes our gated community a truly exceptional
                setting for peaceful family living and enduring value.
              </p>

            </div>
          </div>


          {/* Why Choose Cards */}
          <div className="wcp-panels row g-4">

            {WHY_CHOOSE_DATA.map((item) => (

              <div
                className="col-lg-4 col-md-6"
                key={item.number}
              >

                <article
                  className="
                    wcp-panel
                    card
                    h-100
                    border-0
                    shadow-sm
                  "
                  style={{
                    overflow: "hidden",
                    borderRadius: "12px",
                    position: "relative",
                    minHeight: "320px",
                  }}
                >

                  {/* Image */}
                  <div
                    className="
                      wcp-panel-img
                      position-absolute
                      w-100
                      h-100
                    "
                    style={{
                      backgroundImage: `url("${item.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      zIndex: 1,
                    }}
                  ></div>


                  {/* Overlay */}
                  <div
                    className="
                      wcp-panel-overlay
                      position-absolute
                      w-100
                      h-100
                    "
                    style={{
                      background:
                        "linear-gradient(to top, rgba(26,24,21,0.95), rgba(26,24,21,0.4))",
                      zIndex: 2,
                    }}
                  ></div>


                  {/* Content */}
                  <div
                    className="
                      wcp-panel-content
                      position-relative
                      p-3
                      d-flex
                      flex-column
                      h-100
                      justify-content-end
                      text-white
                    "
                    style={{
                      zIndex: 3,
                      minHeight: "320px",
                    }}
                  >

                    <div
                      className="
                        wcp-panel-num
                        fw-bold
                        fs-5
                        text-warning
                        mb-1
                      "
                    >
                      {item.number}
                    </div>


                    <div
                      className="
                        wcp-panel-tag
                        small
                        text-uppercase
                        tracking-wider
                        text-light
                        opacity-75
                        mb-1
                      "
                      style={{ fontSize: "11px" }}
                    >
                      {item.tag}
                    </div>


                    <h3
                      className="
                        h5
                        fw-bold
                        text-white
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        small
                        text-light
                        mb-3
                        opacity-90
                      "
                      style={{ fontSize: "13px" }}
                    >
                      {item.description}
                    </p>


                    <button
                      type="button"
                      className="
                        wcp-btn
                        btn
                        btn-outline-light
                        btn-sm
                        align-self-start
                        mt-auto
                        px-3
                        py-1
                      "
                      onClick={() =>
                        handleWhyChooseAction(item.action)
                      }
                      style={{
                        borderColor: "#C8A22C",
                        color: "#ffffff",
                        background:
                          "rgba(200, 162, 44, 0.3)",
                        fontSize: "12px",
                      }}
                    >
                      {item.buttonText}

                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          AMENITIES SECTION - WHITE
      ===================================================== */}
      <section
        id="amenities"
        className="amenities-slider-section py-5"
        ref={amenitiesRef}
        style={{
          background: "#ffffff",
        }}
      >

        <div className="container">

          <div className="amenities-heading text-center mb-5">

            <span
              className="amenities-tag"
              style={{
                color: "#C8A22C",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "13px",
                letterSpacing: "2px",
              }}
            >
              Premium Amenities
            </span>

            <h2
              className="fw-bold mt-2"
              style={{
                color: "#1A1815",
              }}
            >
              Amenities at{" "}
              <span
                style={{
                  color: "#C8A22C",
                }}
              >
                Ramayana City
              </span>
            </h2>

          </div>

        </div>


        {/* =====================================================
            AMENITIES SLIDER
        ===================================================== */}
        <div className="amenities-slider-wrapper position-relative px-5">

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectCoverflow,
            ]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1.2}
            spaceBetween={20}
            navigation={{
              prevEl: ".amenity-prev",
              nextEl: ".amenity-next",
            }}
            pagination={{
              el: ".amenity-pagination",
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 28,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="amenitiesSwiper py-4"
          >

            {AMENITIES_DATA.map((amenity, index) => (

              <SwiperSlide
                className="amenity-slide"
                key={index}
              >

                <div
                  className="
                    amenity-image-wrapper
                    position-relative
                    rounded-4
                    overflow-hidden
                    shadow-sm
                  "
                  style={{
                    height: "320px",
                  }}
                >

                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    className="
                      amenity-label
                      position-absolute
                      bottom-0
                      start-0
                      w-100
                      p-3
                      d-flex
                      align-items-center
                      text-white
                    "
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                    }}
                  >

                    <i
                      className={`
                        ${amenity.icon}
                        text-warning
                        fs-5
                        me-2
                      `}
                    ></i>

                    <span className="fw-semibold fs-6">
                      {amenity.title}
                    </span>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>


          {/* =====================================================
              NAVIGATION CONTROLS
          ===================================================== */}

          <button
            type="button"
            className="amenity-prev"
            aria-label="Previous amenity"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>


          <button
            type="button"
            className="amenity-next"
            aria-label="Next amenity"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>


          {/* Pagination */}
          <div className="amenity-pagination mt-4 d-flex justify-content-center"></div>

        </div>
      </section>

    </main>
  );
};

export default About;