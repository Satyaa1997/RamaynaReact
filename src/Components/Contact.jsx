import React from "react";

const Contact = () => {
  const gold = "#D0B15B";
  const dark = "#202020";

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "430px",
          marginTop: "70px",
          background:
            "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url('/assets/contact-banner.jpg') center/cover no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <span
                className="text-uppercase fw-semibold"
                style={{
                  color: gold,
                  letterSpacing: "3px",
                  fontSize: "13px",
                }}
              >
                Direct Channels
              </span>

              <h1
                className="text-white fw-bold mt-3 mb-3"
                style={{
                  fontSize: "clamp(38px, 6vw, 68px)",
                  lineHeight: "1.1",
                }}
              >
                Connect With
                <br />
                Ramayana City
              </h1>

              <p
                className="text-white mb-0"
                style={{
                  maxWidth: "650px",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  opacity: 0.9,
                }}
              >
                We are always at your service. Choose your preferred
                way to get in touch with our sales team and spatial
                consultants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CHANNELS ================= */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-lg-4">
          <div className="row g-4">
            {/* EMAIL */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-4"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "23px",
                  }}
                >
                  ✉
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.5px",
                  }}
                >
                  Our Email
                </small>

                <h5
                  className="fw-bold mt-2 mb-3"
                  style={{
                    color: dark,
                    wordBreak: "break-word",
                  }}
                >
                  info@ramayanacity.com
                </h5>

                <a
                  href="mailto:info@ramayanacity.com"
                  className="text-decoration-none fw-semibold"
                  style={{ color: dark }}
                >
                  Send Email →
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-4"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "23px",
                  }}
                >
                  ☎
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.5px",
                  }}
                >
                  Phone Number
                </small>

                <h5
                  className="fw-bold mt-2 mb-3"
                  style={{ color: dark }}
                >
                  +91-8882125125
                </h5>

                <a
                  href="tel:+918882125125"
                  className="text-decoration-none fw-semibold"
                  style={{ color: dark }}
                >
                  Call Now →
                </a>
              </div>
            </div>

            {/* SITE ADDRESS */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-4"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "23px",
                  }}
                >
                  ⌖
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.5px",
                  }}
                >
                  Site Address
                </small>

                <h6
                  className="fw-bold mt-2 mb-3"
                  style={{
                    color: dark,
                    lineHeight: "1.6",
                  }}
                >
                  NH-56B, Khatola Village,
                  <br />
                  Sarojini Nagar, Lucknow, U.P.
                </h6>

                <a
                  href="#mapSection"
                  className="text-decoration-none fw-semibold"
                  style={{ color: dark }}
                >
                  View Map →
                </a>
              </div>
            </div>

            {/* OFFICE ADDRESS */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="h-100 p-4"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7F3",
                    color: gold,
                    fontSize: "23px",
                  }}
                >
                  ⌂
                </div>

                <small
                  className="fw-bold text-uppercase"
                  style={{
                    color: gold,
                    letterSpacing: "1.5px",
                  }}
                >
                  Office Address
                </small>

                <h6
                  className="fw-bold mt-2 mb-3"
                  style={{
                    color: dark,
                    lineHeight: "1.6",
                  }}
                >
                  309, 3rd Floor, Felix Square,
                  <br />
                  Sushant Golf City,
                  <br />
                  Lucknow - 226030
                </h6>

                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-semibold"
                  style={{ color: dark }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SITE VISIT ================= */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#F8F7F3",
        }}
      >
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            {/* IMAGE */}
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: "8px",
                  minHeight: "420px",
                }}
              >
                <img
                  src="/assets/Ramayana_city (3).png"
                  alt="Ramayana City Site Visit"
                  className="w-100 h-100"
                  style={{
                    minHeight: "420px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    padding: "60px 25px 25px",
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  }}
                >
                  <span
                    className="text-uppercase fw-semibold"
                    style={{
                      color: gold,
                      letterSpacing: "2px",
                      fontSize: "12px",
                    }}
                  >
                    Ramayana City
                  </span>

                  <h4 className="text-white fw-bold mb-0 mt-1">
                    Visit Our Project
                  </h4>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-6">
              <span
                className="text-uppercase fw-semibold"
                style={{
                  color: gold,
                  letterSpacing: "2px",
                  fontSize: "13px",
                }}
              >
                Site Visit
              </span>

              <h2
                className="fw-bold mt-2 mb-3"
                style={{
                  color: dark,
                  fontSize: "clamp(30px, 4vw, 46px)",
                }}
              >
                Visit Ramayana City
              </h2>

              <p
                className="text-secondary"
                style={{
                  lineHeight: "1.8",
                }}
              >
                Experience the project in person and get a better
                understanding of the location, layout and
                surrounding development.
              </p>

              <div className="mt-4">
                {/* HOURS */}
                <div className="d-flex gap-3 mb-4">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: gold,
                    }}
                  >
                    ⏰
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Office & Site Hours
                    </h6>
                    <p className="text-secondary mb-0">
                      Monday – Sunday: 9:00 AM – 7:00 PM
                      <br />
                      365 Days
                    </p>
                  </div>
                </div>

                {/* PICKUP */}
                <div className="d-flex gap-3 mb-4">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: gold,
                    }}
                  >
                    🚗
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Complimentary Site Visit
                    </h6>

                    <p className="text-secondary mb-0">
                      Free pick-and-drop service available for
                      interested buyers across Lucknow.
                    </p>
                  </div>
                </div>

                {/* GUIDANCE */}
                <div className="d-flex gap-3">
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color: gold,
                    }}
                  >
                    ✓
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Instant Layout Guidance
                    </h6>

                    <p className="text-secondary mb-0">
                      Get instant access to master plan maps and
                      registry assistance on-site.
                    </p>
                  </div>
                </div>
              </div>

              {/* HOTLINE */}
              <div
                className="mt-4 p-3 p-md-4"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: `4px solid ${gold}`,
                }}
              >
                <small className="text-secondary d-block">
                  Sales & Inquiry Hotline
                </small>

                <a
                  href="tel:+918882125125"
                  className="text-decoration-none fw-bold"
                  style={{
                    color: dark,
                    fontSize: "22px",
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
        className="py-5"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-lg-4">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center mb-5">
                <span
                  className="text-uppercase fw-semibold"
                  style={{
                    color: gold,
                    letterSpacing: "2px",
                    fontSize: "13px",
                  }}
                >
                  Enquiry & Booking
                </span>

                <h2
                  className="fw-bold mt-2 mb-3"
                  style={{
                    color: dark,
                    fontSize: "clamp(30px, 4vw, 44px)",
                  }}
                >
                  Send Us A Message
                </h2>

                <p
                  className="text-secondary mx-auto mb-0"
                  style={{
                    maxWidth: "650px",
                    lineHeight: "1.8",
                  }}
                >
                  Fill out the form below to book a free site
                  visit or receive our latest layout price list.
                </p>
              </div>

              <div
                className="p-3 p-md-4 p-lg-5"
                style={{
                  border: "1px solid #e7e7e7",
                  borderRadius: "8px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                }}
              >
                <form>
                  <div className="row g-4">
                    {/* NAME */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        style={{
                          minHeight: "52px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>

                    {/* PHONE */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                        style={{
                          minHeight: "52px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        style={{
                          minHeight: "52px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>

                    {/* PLOT TYPE */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Select Plot Size / Type
                      </label>

                      <select
                        className="form-select"
                        defaultValue=""
                        style={{
                          minHeight: "52px",
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
                      <label className="form-label fw-semibold">
                        Your Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Tell us how we can help you..."
                        style={{
                          borderRadius: "4px",
                          resize: "vertical",
                        }}
                      ></textarea>
                    </div>

                    {/* SUBMIT */}
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn text-white fw-semibold px-4 px-md-5 py-3"
                        style={{
                          backgroundColor: gold,
                          border: `1px solid ${gold}`,
                          borderRadius: "3px",
                        }}
                      >
                        Submit Enquiry & Book Visit →
                      </button>

                      <p
                        className="text-secondary mt-3 mb-0"
                        style={{ fontSize: "13px" }}
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
        className="py-5"
        style={{
          backgroundColor: "#F8F7F3",
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <span
              className="text-uppercase fw-semibold"
              style={{
                color: gold,
                letterSpacing: "2px",
                fontSize: "13px",
              }}
            >
              Find Us
            </span>

            <h2
              className="fw-bold mt-2 mb-2"
              style={{
                color: dark,
                fontSize: "clamp(30px, 4vw, 42px)",
              }}
            >
              Locate Ramayana City
            </h2>

            <p className="text-secondary mb-0">
              NH-56B, Khatola Village, Sarojini Nagar, Lucknow, U.P.
            </p>
          </div>

          <div
            className="overflow-hidden"
            style={{
              borderRadius: "8px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
              backgroundColor: "#ffffff",
            }}
          >
            <iframe
              title="Ramayana City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.412658582609!2d80.8998517!3d26.6672817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf10019d7ac87%3A0xba27bf0ade4cab2d!2sRamayana%20City!5e0!3m2!1sen!2sin!4v1784181571976!5m2!1sen!2sin"
              width="100%"
              height="480"
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
        className="py-5"
        style={{
          backgroundColor: dark,
        }}
      >
        <div className="container text-center py-lg-3">
          <h2
            className="text-white fw-bold mb-3"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
            }}
          >
            Ready to Explore Ramayana City?
          </h2>

          <p
            className="text-white mb-4"
            style={{
              opacity: 0.75,
            }}
          >
            Connect with our team today and schedule your
            complimentary site visit.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-2 gap-md-3">
            <a
              href="tel:+918882125125"
              className="btn fw-semibold px-4 py-3"
              style={{
                backgroundColor: gold,
                color: "#ffffff",
                border: `1px solid ${gold}`,
                borderRadius: "3px",
              }}
            >
              Call Now
            </a>

            <a
              href="mailto:info@ramayanacity.com"
              className="btn fw-semibold px-4 py-3"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.5)",
                borderRadius: "3px",
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