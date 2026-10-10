import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  FaXmark,
  FaExpand,
} from "react-icons/fa6";

import heroImage from "../assets/Ramayana City Grand Entrance Gate.png";
import grandEntranceImg from "../assets/Ramayana City Grand Entrance Gate.png";
import greenBeltImg from "../assets/GreenArea.png";
import greenBeltImg2 from "../assets/green-belt.png";
import highwayImg from "../assets/highway.jpg";
import purvanchalImg from "../assets/Why3.png";
import sportsImg from "../assets/Sports.png";
import kidsZoneImg from "../assets/KidsPlayZones.PNG";
import meditationImg from "../assets/Metitation.PNG";
import evChargingImg from "../assets/EV Charging.png";
import wellnessImg from "../assets/Aminities.PNG";

const WhyChoose = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const GOLD = "#D0B15B";
  const DARK = "#202020";
  const LIGHT = "#F8F7F3";

  const reasons = [
    {
      number: "01",
      icon: <FaBuilding />,
      title: "Grand Entrance",
      image: grandEntranceImg,
      text: "A magnificent 35-metre-wide boulevard complemented by a lush 17-metre central green belt, creating an impressive and welcoming arrival experience.",
      tags: ["35m Boulevard", "17m Green Belt"],
      accent: "#D0B15B",
    },
    {
      number: "02",
      icon: <FaHouse />,
      title: "Bespoke Residential Plots",
      image: greenBeltImg2,
      text: "A thoughtfully planned range of flexible plot sizes, offering the freedom to create a distinctive home and build a lasting family legacy.",
      tags: ["Prime Plots", "Freehold Land"],
      accent: "#4e8397",
    },
    {
      number: "03",
      icon: <FaLocationDot />,
      title: "Strategic Location & Seamless Connectivity",
      image: highwayImg,
      text: "Strategically positioned on NH-56B (Mohanlalganjâ€“Bani Road), with convenient connectivity to Rae Bareli Road, Kanpur Road, and the Outer Ring Road. Upcoming arterial links further enhance accessibility, offering seamless connectivity to both the Agraâ€“Lucknow Expressway and Purvanchal Expressway.",
      tags: ["NH-56B Link", "Expressways"],
      accent: "#ff8066",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "High-Value Investment",
      image: purvanchalImg,
      text: "A compelling combination of strong growth potential, strategic connectivity, and peaceful living, making Ramayana City an attractive destination for both discerning homeowners and long-term investors.",
      tags: ["High Return", "Long Term"],
      accent: "#008bc9",
    },
  ];

  const sixAmenities = [
    {
      num: "01",
      title: "Sports Courts",
      subtitle: "Badminton & Basketball",
      desc: "Dedicated outdoor courts designed for active sports, friendly matches, and fitness for all ages.",
      image: sportsImg,
    },
    {
      num: "02",
      title: "Gardens & Green Areas",
      subtitle: "Lush Landscaped Park",
      desc: "Beautifully maintained central gardens and green belts providing a peaceful, oxygen-rich environment.",
      image: greenBeltImg,
    },
    {
      num: "03",
      title: "Kids Play Zones",
      subtitle: "Safe Recreation",
      desc: "Thoughtfully planned play zones with safe equipment where children can play, socialise, and explore.",
      image: kidsZoneImg,
    },
    {
      num: "04",
      title: "Meditation Spaces",
      subtitle: "Spiritual Tranquility",
      desc: "Quiet, peaceful open-air corners surrounded by greenery, ideal for yoga, mindfulness and reflection.",
      image: meditationImg,
    },
    {
      num: "05",
      title: "EV Charging Points",
      subtitle: "Eco Infrastructure",
      desc: "Future-ready electric vehicle charging facilities catering to modern eco-conscious homeowners.",
      image: evChargingImg,
    },
    {
      num: "06",
      title: "Wellness Amenities",
      subtitle: "Health & Wellbeing",
      desc: "Outdoor fitness equipment, walking/jogging tracks, and open spaces encouraging a healthy lifestyle.",
      image: wellnessImg,
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
      <style>{`
        .why-choose-hero-content {
          padding-top: 195px;
        }

        @media (max-width: 767px) {
          .why-choose-hero,
          .why-choose-hero-inner {
            min-height: 460px !important;
          }

          .why-choose-hero-content {
            padding-top: 285px;
          }
        }

        .rc-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .rc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.35);
        }
        .rc-thumbnail-stack {
          position: relative;
          height: 215px; /* Highlighted image height */
          overflow: hidden;
          background: #111111;
        }
        .rc-thumbnail-stack img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .rc-card:hover .rc-thumbnail-stack img {
          transform: scale(1.08);
        }
        .rc-thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.65) 100%);
          pointer-events: none;
        }
        .rc-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(17, 17, 17, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
        }
        .rc-card-body {
          padding: 14px 14px 16px 14px; /* Compact height */
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .rc-heading {
          font-size: 15.5px;
          font-weight: 700;
          color: #181818;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .rc-description {
          font-size: 11.8px;
          color: #555555;
          line-height: 1.45;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .rc-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 0;
          padding: 0;
          list-style: none;
          margin-top: auto;
        }
        .rc-tag {
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 12px;
        }
        .whyChooseSwiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
        }
        .whyChooseSwiper .swiper-pagination-bullet-active {
          background: #D0B15B;
          width: 22px;
          border-radius: 10px;
        }

        /* =====================================================
            AMENITIES 6 CARDS STYLING
        ===================================================== */
        .amenity-topic-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .amenity-topic-card:hover {
          transform: translateY(-6px);
          border-color: #D0B15B;
          box-shadow: 0 20px 42px rgba(208, 177, 91, 0.2);
        }
        .amenity-topic-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px; /* Taller image */
          overflow: hidden;
          background: #181818;
        }
        .amenity-topic-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .amenity-topic-card:hover .amenity-topic-img-wrapper img {
          transform: scale(1.08);
        }
        .amenity-topic-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.65) 100%);
          pointer-events: none;
        }
        .amenity-topic-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(17, 17, 17, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #D0B15B;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid rgba(208, 177, 91, 0.35);
          z-index: 2;
        }
        .amenity-topic-body {
          padding: 14px 15px 16px 15px; /* Compact text height */
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .amenity-topic-subtitle {
          font-size: 10.5px;
          font-weight: 700;
          color: #D0B15B;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 3px;
        }
        .amenity-topic-title {
          font-size: 16px;
          font-weight: 700;
          color: #181818;
          margin-bottom: 5px;
          line-height: 1.3;
        }
        .amenity-topic-text {
          font-size: 12px;
          color: #555555;
          line-height: 1.48;
          margin-bottom: 0;
        }

        .amenityTopicSwiper .swiper-pagination-bullet {
          background: rgba(0, 0, 0, 0.25);
          opacity: 1;
        }
        .amenityTopicSwiper .swiper-pagination-bullet-active {
          background: #D0B15B;
          width: 22px;
          border-radius: 10px;
        }

        /* Image Expand Icon Overlay */
        .img-hover-expand-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(17, 17, 17, 0.8);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          color: #ffffff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          opacity: 0.85;
          transition: all 0.3s ease;
          z-index: 3;
        }
        .amenity-topic-img-wrapper:hover .img-hover-expand-btn,
        .rc-thumbnail-stack:hover .img-hover-expand-btn {
          opacity: 1;
          transform: scale(1.15);
          background: #D0B15B;
          color: #ffffff;
          border-color: #D0B15B;
        }
        @keyframes fadeInLightBox {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .lightbox-modal-content {
          animation: fadeInLightBox 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="position-relative overflow-hidden"
        className="position-relative overflow-hidden why-choose-hero"
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
          className="container position-relative h-100 why-choose-hero-inner"
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
            className="row h-100 align-items-start justify-content-center text-center why-choose-hero-content"
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

      {/* =====================================================
          INTRODUCTION & 6 AMENITIES CARDS - WHITE
      ===================================================== */}

      <section
        className="py-5"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-2">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-9">
              <span
                className="fw-semibold text-uppercase"
                style={{
                  color: GOLD,
                  letterSpacing: "1.8px",
                  fontSize: "11px",
                }}
              >
                AMENITIES
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

          {/* DESKTOP & TABLET: 3 CARDS IN ROW 1, 3 CARDS IN ROW 2 */}
          <div className="row g-4 mt-2 d-none d-md-flex">
            {sixAmenities.map((item) => (
              <div className="col-md-4 col-lg-4" key={item.num}>
                <div className="amenity-topic-card h-100">
                  <div
                    className="amenity-topic-img-wrapper"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                    title="Click to view full screen"
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="amenity-topic-overlay" />
                    <div className="amenity-topic-badge">{item.num}</div>
                    <div className="img-hover-expand-btn" title="View Full Screen">
                      <FaExpand />
                    </div>
                  </div>
                  <div className="amenity-topic-body">
                    <span className="amenity-topic-subtitle">{item.subtitle}</span>
                    <h3 className="amenity-topic-title">{item.title}</h3>
                    <p className="amenity-topic-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE: 1 CARD WITH MARQUEE AUTO-SLIDER */}
          <div className="d-block d-md-none mt-3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="amenityTopicSwiper pb-5"
            >
              {sixAmenities.map((item) => (
                <SwiperSlide key={item.num} className="h-auto">
                  <div className="amenity-topic-card h-100">
                    <div
                      className="amenity-topic-img-wrapper"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedImage({ src: item.image, title: item.title })}
                      title="Click to view full screen"
                    >
                      <img src={item.image} alt={item.title} />
                      <div className="amenity-topic-overlay" />
                      <div className="amenity-topic-badge">{item.num}</div>
                      <div className="img-hover-expand-btn" title="View Full Screen">
                        <FaExpand />
                      </div>
                    </div>
                    <div className="amenity-topic-body">
                      <span className="amenity-topic-subtitle">{item.subtitle}</span>
                      <h3 className="amenity-topic-title">{item.title}</h3>
                      <p className="amenity-topic-text">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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

          <div className="why-choose-swiper-wrapper mt-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="whyChooseSwiper pb-5"
            >
              {reasons.map((reason) => (
                <SwiperSlide key={reason.number} className="h-auto">
                  <div
                    className="rc-card h-100"
                    style={{
                      borderColor: `${reason.accent}45`,
                    }}
                  >
                    {/* THUMBNAIL STACK */}
                    <div
                      className="rc-thumbnail-stack"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedImage({ src: reason.image, title: reason.title })}
                      title="Click to view full screen"
                    >
                      <img src={reason.image} alt={reason.title} />
                      <div className="rc-thumbnail-overlay" />
                      <div className="img-hover-expand-btn" title="View Full Screen">
                        <FaExpand />
                      </div>

                      {/* CATEGORY BADGE */}
                      <div className="rc-category-badge">
                        <span className="badge-num" style={{ color: reason.accent }}>
                          {reason.number}
                        </span>
                        <span>{reason.category}</span>
                      </div>
                    </div>

                    {/* CARD BODY */}
                    <div className="rc-card-body">
                      <h3 className="rc-heading">{reason.title}</h3>

                      <p className="rc-description">{reason.text}</p>

                      {/* TAG LIST */}
                      <ul className="rc-tag-list">
                        {reason.tags?.map((tag) => (
                          <li
                            className="rc-tag"
                            key={tag}
                            style={{
                              backgroundColor: `${reason.accent}15`,
                              color: reason.accent,
                              borderColor: `${reason.accent}35`,
                              borderStyle: "solid",
                              borderWidth: "1px",
                            }}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
                Know More About Location â†’
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

      {/* =====================================================
          FULLSCREEN IMAGE LIGHTBOX MODAL
      ===================================================== */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            zIndex: 99999,
            padding: "20px",
          }}
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE CROSS BUTTON */}
          <button
            type="button"
            className="btn position-absolute top-0 end-0 m-3 m-md-4 rounded-circle d-flex align-items-center justify-content-center text-white"
            style={{
              width: "46px",
              height: "46px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 100000,
              transition: "all 0.25s ease",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = GOLD;
              e.currentTarget.style.borderColor = GOLD;
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "scale(1)";
            }}
            aria-label="Close"
            title="Close (Esc)"
          >
            <FaXmark />
          </button>

          {/* IMAGE & TITLE CONTAINER */}
          <div
            className="lightbox-modal-content position-relative d-flex flex-column align-items-center text-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title || "Full screen preview"}
              className="img-fluid rounded-3 shadow-lg"
              style={{
                maxHeight: "82vh",
                maxWidth: "90vw",
                objectFit: "contain",
                border: "2px solid rgba(208, 177, 91, 0.4)",
              }}
            />
            {selectedImage.title && (
              <div
                className="mt-3 px-3 py-2 rounded-3 text-white"
                style={{
                  background: "rgba(20, 20, 20, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <h5 className="mb-0 fw-bold" style={{ fontSize: "15px", color: GOLD }}>
                  {selectedImage.title}
                </h5>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default WhyChoose;

