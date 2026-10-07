import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import reraImage from "../assets/RERA Ramayana.png";

const Footer = () => {
  return (
    <>
      {/* ================= PROFESSIONAL FOOTER CSS ================= */}
      <style>
        {`
          /* ================= FOOTER BASE ================= */

          footer {
            color: #000000 !important;
            overflow-x: hidden !important;
          }

          footer p {
            font-size: 13px !important;
            line-height: 1.65 !important;
            color: #000000 !important;
          }

          footer h6 {
            font-size: 13px !important;
            font-weight: 700 !important;
            letter-spacing: 0.5px;
            color: #D0B15B !important;
          }

          /* ================= FOOTER LINKS ================= */

          footer .footer-link {
            font-size: 12px !important;
            font-weight: 500 !important;
            color: #000000 !important;
            transition: all 0.25s ease;
          }

          footer .footer-link:hover {
            color: #9A741C !important;
            transform: translateX(3px);
          }

          footer .footer-chevron {
            font-size: 9px !important;
            transition: transform 0.25s ease;
          }

          footer .footer-link:hover .footer-chevron {
            transform: translateX(2px);
          }

          /* ================= CONTACT ================= */

          footer .footer-contact-link,
          footer .footer-contact-item,
          footer .footer-contact-item span {
            font-size: 12px !important;
            line-height: 1.55 !important;
            color: #000000 !important;
          }

          footer .footer-contact-link {
            font-weight: 600 !important;
            transition: all 0.25s ease;
          }

          footer .footer-contact-link:hover {
            color: #9A741C !important;
          }

          footer .footer-contact-icon {
            color: #000000 !important;
            font-size: 12px !important;
            min-width: 15px;
          }

          footer strong {
            font-size: 12px !important;
            font-weight: 700 !important;
            color: #000000 !important;
          }

          /* ================= LOGO ================= */

          footer img.footer-logo {
            width: 160px !important;
            max-width: 100% !important;
            max-height: 65px !important;
            height: auto !important;
            object-fit: contain !important;
            margin-left: -12px !important;
          }

          /* ================= SOCIAL BUTTONS ================= */

          .footer-social-btn {
            width: 34px !important;
            height: 34px !important;
            padding: 0 !important;
            font-size: 13px !important;
            color: #000000 !important;
            background: rgba(255, 255, 255, 0.35) !important;
            border: 1px solid rgba(0, 0, 0, 0.25) !important;
            transition: all 0.3s ease !important;
          }

          .footer-social-btn:hover {
            background: #000000 !important;
            color: #ffffff !important;
            border-color: #000000 !important;
            transform: translateY(-3px);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
          }

          /* ================= BOTTOM FOOTER ================= */

          footer .footer-bottom-link {
            font-size: 11px !important;
            font-weight: 600 !important;
            color: #000000 !important;
            transition: all 0.25s ease;
          }

          footer .footer-bottom-link:hover {
            color: #9A741C !important;
          }

          /* ================= COPYRIGHT ================= */

          footer .footer-copyright {
            font-size: 11px !important;
            font-weight: 600 !important;
            color: #000000 !important;
          }

          /* ================= AUCTECH LINK ================= */

          footer .footer-developer-link {
            color: #000000 !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            text-decoration: none !important;
            transition: opacity 0.25s ease;
          }

          footer .footer-developer-link:hover {
            color: #9A741C !important;
            opacity: 0.8;
          }

          /* ================= RERA SECTION ================= */

          footer .rera-section {
            display: flex;
            flex-direction: column;
            align-items: flex-start !important;
            justify-content: flex-start;
            width: 100% !important;
            max-width: 100% !important;
          }

        footer .rera-content {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  gap: 8px !important;
  width: 100% !important;
  max-width: 100% !important;
}

          footer .rera-image {
  width: 85px !important;
  height: 85px !important;
  object-fit: contain !important;
  flex-shrink: 0 !important;
  display: block !important;
}

          footer .rera-details {
            font-size: 8.5px !important;
            line-height: 1.45 !important;
            color: #000000 !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          footer .rera-details div {
            display: block !important;
            width: 100% !important;
            margin: 0 0 3px 0 !important;
            word-break: break-word;
          }

          footer .rera-details strong {
            font-size: 8.5px !important;
            font-weight: 700 !important;
            color: #000000 !important;
          }

          footer .rera-website {
            color: #000000 !important;
            text-decoration: none !important;
            font-weight: 600 !important;
          }

          footer .rera-website:hover {
            color: #9A741C !important;
            text-decoration: underline !important;
          }

          /* ================= ALL LINK HOVERS ================= */

          footer a:hover {
            color: #9A741C !important;
          }

          footer .footer-social-btn:hover {
            background: #9A741C !important;
            color: #ffffff !important;
            border-color: #9A741C !important;
          }

          footer a:focus-visible {
            outline: 2px solid #9A741C;
            outline-offset: 3px;
          }

          @media (min-width: 992px) {
            footer .quick-links-column {
              margin-right: -10px !important;
            }
            footer .legal-column {
              margin-left: -10px !important;
            }
          }
        `}
      </style>

      <footer
        className="text-dark"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container pt-5 pb-5">
          <div className="row g-4">
            {/* ================= BRAND ================= */}
            <div className="col-12 col-lg-4">
              <Link to="/" className="d-inline-block mb-2">
                <img
                  src={logo}
                  alt="Ramayana City Logo"
                  className="img-fluid footer-logo"
                />
              </Link>
              <p className="mb-3 pe-lg-4">
                Ramayana City is a premium residential township located on
                NH-56B, Sarojini Nagar, Lucknow. Experience a peaceful
                lifestyle where spirituality, greenery, and modern
                infrastructure come together.
              </p>

              <div className="d-flex gap-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div className="col-6 col-md-3 col-lg-2 quick-links-column">
              <h6 className="text-uppercase mb-3">Quick Links</h6>
              <ul className="list-unstyled mb-0">
                {[
                  { name: "Home", to: "/" },
                  { name: "About", to: "/about" },
                  { name: "Why Choose", to: "/whychoose" },
                  { name: "Gallery", to: "/gallery" },
                  { name: "Contact", to: "/contact" },
                ].map((link, idx) => (
                  <li className="mb-1" key={idx}>
                    <Link
                      to={link.to}
                      className="footer-link text-decoration-none d-inline-flex align-items-center"
                    >
                      <i className="footer-chevron bi bi-chevron-right me-2"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= LEGAL ================= */}
            <div className="col-6 col-md-3 col-lg-2 legal-column">
              <h6 className="text-uppercase mb-3">Legal & Docs</h6>
              <ul className="list-unstyled mb-0">
                {[
                  { name: "Privacy Policy", to: "/privacy-policy" },
                  { name: "Terms & Conditions", to: "/terms-conditions" },
                  { name: "Disclaimer", to: "/disclaimer" },
                  { name: "Sitemap", to: "/sitemap" },
                  { name: "RERA Details", to: "/rera" },
                ].map((link, idx) => (
                  <li className="mb-1" key={idx}>
                    <Link
                      to={link.to}
                      className="footer-link text-decoration-none d-inline-flex align-items-center"
                    >
                      <i className="footer-chevron bi bi-chevron-right me-2"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="col-12 col-md-6 col-lg-2 contact-column">
              <h6 className="text-uppercase mb-3">Contact Us</h6>
              <div className="d-flex flex-column gap-2">
                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-telephone-fill mt-1"></i>
                  <a
                    href="tel:+918882125125"
                    className="footer-contact-link text-decoration-none"
                  >
                    +91-8882125125
                  </a>
                </div>

                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-envelope-fill mt-1"></i>
                  <a
                    href="mailto:info@ramayanacity.com"
                    className="footer-contact-link text-decoration-none"
                  >
                    info@ramayanacity.com
                  </a>
                </div>

                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-geo-alt-fill mt-1 flex-shrink-0"></i>
                  <span>
                    <strong>Site Address:</strong> NH-56B, Khatola Village,
                    Sarojini Nagar, Lucknow, U.P.
                  </span>
                </div>

                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-building-fill mt-1 flex-shrink-0"></i>
                  <span>
                    <strong>Office Address:</strong> 309, 3rd Floor, Felix
                    Square, Sushant Golf City, Lucknow - 226030
                  </span>
                </div>

                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-clock-fill mt-1"></i>
                  <span>
                    <strong>Working Hours:</strong> Mon–Sun : 9:00 AM – 7:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RERA ================= */}
            <div className="col-12 col-md-6 col-lg-2 rera-column">
              <div className="rera-section">
                <h6 className="text-uppercase mb-3">RERA</h6>
                <div className="rera-content">
                  <img
                    src={reraImage}
                    alt="RERA Ramayana"
                    className="rera-image"
                  />
                  <div className="rera-details">
                    <div>
                      <strong>RERA Reg. No.:</strong> UPRERAPRJ437147/10/2026
                    </div>
                    <div>
                      <strong>RERA Website:</strong>{" "}
                      <a
                        href="https://www.up-rera.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rera-website"
                      >
                        www.up-rera.in
                      </a>
                    </div>
                    <div>
                      <strong>Launch Date:</strong> 03-Oct-2026
                    </div>
                    <div>
                      <strong>Account No.:</strong>0294002900000288
                    </div>
                    <div>
                      <strong>A/c Name:</strong> : Dishadeep developrs pvt Itd collection a/c for Ramayana city
                    </div>
                    <div>
                      <strong>Bank Name:</strong> PNB, Hazratganj, Lucknow
                    </div>
                    <div>
                      <strong>IFSC Code:</strong> PUNB0029400
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-top border-dark border-opacity-25 py-2">
          <div className="container">
            <div className="row align-items-center g-2">
              <div className="col-12 col-lg-6 text-center text-lg-start">
                <p className="footer-copyright mb-0">
                  © 2026 Ramayana City. All Rights Reserved.
                </p>
              </div>
              <div className="col-12 col-lg-6 text-center text-lg-end">
                <p className="footer-copyright mb-0">
                  Developed by{" "}
                  <a
                    href="https://auctechitsolutions.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-developer-link"
                  >
                    AucTech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
