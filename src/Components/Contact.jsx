
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaClock,
  FaCar,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

// =====================================================
// IMAGE IMPORTS
// =====================================================

import heroImage from "../assets/Ramayana_city (3).png";
import siteVisitImage from "../assets/Ramayana_city (4).png";

const Contact = () => {
  const gold = "#D0B15B";
  const dark = "#202020";

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
  minHeight: "380px",
  marginTop: "70px",
  backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  ), url("${heroImage}")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
      >
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="p-3 p-md-4"
                style={{
                  background: "rgba(20, 20, 20, 0.25)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="text-uppercase fw-semibold"
                  style={{
                    color: gold,
                    letterSpacing: "2.5px",
                    fontSize: "12px",
                  }}
                >
                  Direct Channels
                </span>

                <h1
                  className="text-white fw-bold mt-2 mb-2"
                  style={{
                    fontSize: "clamp(28px, 4vw, 48px)",
                    lineHeight: "1.1",
                  }}
                >
                  Connect With Ramayana City
                </h1>

                <p
                  className="text-white mb-0 mx-auto"
                  style={{
                    maxWidth: "550px",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    opacity: 0.95,
                  }}
                >
                  We are always at your service. Choose your preferred
                  way to get in touch with our sales team and spatial
                  consultants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CHANNELS ================= */}
      <section
        className="py-4"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">
          <div className="row g-3">
            {/* EMAIL */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-3"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "15px",
                  }}
                >
                  <FaEnvelope />
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.2px",
                    fontSize: "10px",
                  }}
                >
                  Our Email
                </small>

                <h6
                  className="fw-bold mt-1 mb-2"
                  style={{
                    color: dark,
                    wordBreak: "break-word",
                    fontSize: "14px",
                  }}
                >
                  info@ramayanacity.com
                </h6>

                <a
                  href="mailto:info@ramayanacity.com"
                  className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                  style={{ color: dark, fontSize: "12px" }}
                >
                  Send Email <FaArrowRight size={9} />
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-3"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "15px",
                  }}
                >
                  <FaPhoneAlt />
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.2px",
                    fontSize: "10px",
                  }}
                >
                  Phone Number
                </small>

                <h6
                  className="fw-bold mt-1 mb-2"
                  style={{
                    color: dark,
                    fontSize: "14px",
                  }}
                >
                  +91-8882125125
                </h6>

                <a
                  href="tel:+918882125125"
                  className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                  style={{
                    color: dark,
                    fontSize: "12px",
                  }}
                >
                  Call Now <FaArrowRight size={9} />
                </a>
              </div>
            </div>

            {/* SITE ADDRESS */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-3"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "15px",
                  }}
                >
                  <FaMapMarkerAlt />
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.2px",
                    fontSize: "10px",
                  }}
                >
                  Site Address
                </small>

                <p
                  className="fw-bold mt-1 mb-2"
                  style={{
                    color: dark,
                    lineHeight: "1.4",
                    fontSize: "12px",
                  }}
                >
                  NH-56B, Khatola Village,
                  <br />
                  Sarojini Nagar, Lucknow, U.P.
                </p>

                <a
                  href="#mapSection"
                  className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                  style={{
                    color: dark,
                    fontSize: "12px",
                  }}
                >
                  View Map <FaArrowRight size={9} />
                </a>
              </div>
            </div>

            {/* OFFICE ADDRESS */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-3"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "6px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "15px",
                  }}
                >
                  <FaHome />
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.2px",
                    fontSize: "10px",
                  }}
                >
                  Office Address
                </small>

                <p
                  className="fw-bold mt-1 mb-2"
                  style={{
                    color: dark,
                    lineHeight: "1.4",
                    fontSize: "12px",
                  }}
                >
                  309, 3rd Floor, Felix Square,
                  <br />
                  Sushant Golf City, Lucknow
                </p>

                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                  style={{
                    color: dark,
                    fontSize: "12px",
                  }}
                >
                  Get Directions <FaArrowRight size={9} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SITE VISIT ================= */}
      <section
        className="py-4"
        style={{
          backgroundColor: "#F8F7F3",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">

            {/* IMAGE */}
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: "6px",
                  minHeight: "320px",
                }}
              >
                <img
                  src={siteVisitImage}
                  alt="Ramayana City Site Visit"
                  className="w-100 h-100"
                  style={{
                    minHeight: "320px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    padding: "40px 20px 20px",
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  }}
                >
                  <span
                    className="text-uppercase fw-semibold"
                    style={{
                      color: gold,
                      letterSpacing: "1.5px",
                      fontSize: "11px",
                    }}
                  >
                    Ramayana City
                  </span>

                  <h5 className="text-white fw-bold mb-0 mt-1">
                    Visit Our Project
                  </h5>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-6">
              <span
                className="text-uppercase fw-semibold"
                style={{
                  color: gold,
                  letterSpacing: "1.5px",
                  fontSize: "12px",
                }}
              >
                Site Visit
              </span>

              <h3
                className="fw-bold mt-1 mb-2"
                style={{
                  color: dark,
                  fontSize: "clamp(24px, 3vw, 36px)",
                }}
              >
                Visit Ramayana City
              </h3>

              <p
                className="text-secondary mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Experience the project in person and get a better
                understanding of the location, layout and development.
              </p>

              <div className="d-flex flex-column gap-2 mb-3">

                {/* HOURS */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: gold,
                      fontSize: "14px",
                    }}
                  >
                    <FaClock />
                  </div>

                  <div>
                    <h6
                      className="fw-bold mb-0"
                      style={{ fontSize: "14px" }}
                    >
                      Office & Site Hours
                    </h6>

                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Monday – Sunday: 9:00 AM – 7:00 PM (365 Days)
                    </p>
                  </div>
                </div>

                {/* PICKUP */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: gold,
                      fontSize: "14px",
                    }}
                  >
                    <FaCar />
                  </div>

                  <div>
                    <h6
                      className="fw-bold mb-0"
                      style={{ fontSize: "14px" }}
                    >
                      Complimentary Site Visit
                    </h6>

                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Free pick-and-drop service available across Lucknow.
                    </p>
                  </div>
                </div>

                {/* GUIDANCE */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: gold,
                      fontSize: "14px",
                    }}
                  >
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h6
                      className="fw-bold mb-0"
                      style={{ fontSize: "14px" }}
                    >
                      Instant Layout Guidance
                    </h6>

                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Get master plan maps and registry assistance on-site.
                    </p>
                  </div>
                </div>
              </div>

              {/* HOTLINE */}
              <div
                className="px-3 py-2"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: `3px solid ${gold}`,
                }}
              >
                <small
                  className="text-secondary d-block"
                  style={{ fontSize: "11px" }}
                >
                  Sales & Inquiry Hotline
                </small>

                <a
                  href="tel:+918882125125"
                  className="text-decoration-none fw-bold"
                  style={{
                    color: dark,
                    fontSize: "18px",
                  }}
                >
                  +91-8882125125
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY ================= */}
      <section
        className="py-4"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">

              <div className="text-center mb-3">
                <span
                  className="text-uppercase fw-semibold"
                  style={{
                    color: gold,
                    letterSpacing: "1.5px",
                    fontSize: "12px",
                  }}
                >
                  Enquiry & Booking
                </span>

                <h3
                  className="fw-bold mt-1 mb-2"
                  style={{
                    color: dark,
                    fontSize: "clamp(24px, 3vw, 36px)",
                  }}
                >
                  Send Us A Message
                </h3>

                <p
                  className="text-secondary mx-auto mb-0"
                  style={{
                    maxWidth: "550px",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Fill out the form below to book a free site
                  visit or receive our latest layout price list.
                </p>
              </div>

              <div
                className="p-3 p-md-4"
                style={{
                  border: "1px solid #e7e7e7",
                  borderRadius: "6px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                }}
              >
                <form>
                  <div className="row g-3">

                    {/* NAME */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "13px" }}
                      >
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Enter your name"
                        style={{
                          minHeight: "40px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>

                    {/* PHONE */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "13px" }}
                      >
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control form-control-sm"
                        placeholder="Enter phone number"
                        style={{
                          minHeight: "40px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "13px" }}
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control form-control-sm"
                        placeholder="Enter your email"
                        style={{
                          minHeight: "40px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>

                    {/* PLOT TYPE */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "13px" }}
                      >
                        Select Plot Size / Type
                      </label>

                      <select
                        className="form-select form-select-sm"
                        defaultValue=""
                        style={{
                          minHeight: "40px",
                          borderRadius: "4px",
                        }}
                      >
                        <option value="" disabled>
                          Select Plot Size / Type
                        </option>

                        <option value="1000">
                          1000 Sq. Ft. Residential Plot
                        </option>

                        <option value="1250">
                          1250 Sq. Ft. Residential Plot
                        </option>

                        <option value="1500">
                          1500 Sq. Ft. Premium Plot
                        </option>

                        <option value="2000">
                          2000 Sq. Ft. Villa Plot
                        </option>

                        <option value="commercial">
                          Commercial Corner Space
                        </option>

                        <option value="site-visit">
                          Only Book Site Visit
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "13px" }}
                      >
                        Your Message
                      </label>

                      <textarea
                        className="form-control form-control-sm"
                        rows="3"
                        placeholder="Tell us how we can help you..."
                        style={{
                          borderRadius: "4px",
                          resize: "vertical",
                        }}
                      ></textarea>
                    </div>

                    {/* SUBMIT */}
                    <div className="col-12 text-center pt-1">
                      <button
                        type="submit"
                        className="btn text-white fw-semibold px-4 py-2 d-inline-flex align-items-center gap-2"
                        style={{
                          backgroundColor: gold,
                          border: `1px solid ${gold}`,
                          borderRadius: "3px",
                          fontSize: "14px",
                        }}
                      >
                        Submit Enquiry & Book Visit
                        <FaArrowRight size={12} />
                      </button>

                      <p
                        className="text-secondary mt-2 mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        ✓ 100% Confidential & Spam Free Assurance
                      </p>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section
        id="mapSection"
        className="py-4"
        style={{
          backgroundColor: "#F8F7F3",
        }}
      >
        <div className="container">

          <div className="text-center mb-3">
            <span
              className="text-uppercase fw-semibold"
              style={{
                color: gold,
                letterSpacing: "1.5px",
                fontSize: "12px",
              }}
            >
              Find Us
            </span>

            <h3
              className="fw-bold mt-1 mb-1"
              style={{
                color: dark,
                fontSize: "clamp(24px, 3vw, 34px)",
              }}
            >
              Locate Ramayana City
            </h3>

            <p
              className="text-secondary mb-0"
              style={{ fontSize: "13px" }}
            >
              NH-56B, Khatola Village, Sarojini Nagar, Lucknow, U.P.
            </p>
          </div>

          <div
            className="overflow-hidden"
            style={{
              borderRadius: "6px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              backgroundColor: "#ffffff",
            }}
          >
            <iframe
              title="Ramayana City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.412658582609!2d80.8998517!3d26.6672817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf10019d7ac87%3A0xba27bf0ade4cab2d!2sRamayana%20City!5e0!3m2!1sen!2sin!4v1784181571976!5m2!1sen!2sin"
              width="100%"
              height="360"
              style={{
                border: 0,
                display: "block",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="py-4"
        style={{
          backgroundColor: dark,
        }}
      >
        <div className="container text-center">

          <h3
            className="text-white fw-bold mb-2"
            style={{
              fontSize: "clamp(22px, 3vw, 34px)",
            }}
          >
            Ready to Explore Ramayana City?
          </h3>

          <p
            className="text-white mb-3"
            style={{
              opacity: 0.75,
              fontSize: "14px",
            }}
          >
            Connect with our team today and schedule your complimentary site visit.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-2">

            <a
              href="tel:+918882125125"
              className="btn fw-semibold px-4 py-2"
              style={{
                backgroundColor: gold,
                color: "#ffffff",
                border: `1px solid ${gold}`,
                borderRadius: "3px",
                fontSize: "14px",
              }}
            >
              Call Now
            </a>

            <a
              href="mailto:info@ramayanacity.com"
              className="btn fw-semibold px-4 py-2"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.5)",
                borderRadius: "3px",
                fontSize: "14px",
              }}
            >
              Send Email
            </a>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

