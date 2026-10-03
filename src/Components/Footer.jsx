
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo _02.png";

const Footer = () => {
  return (
    <>
      {/* ================= PROFESSIONAL FOOTER CSS ================= */}
      <style>
        {`
          /* ================= FOOTER BASE ================= */

          footer {
            color: #000000 !important;
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
            color: #000000 !important;
          }

          /* ================= FOOTER LINKS ================= */

          footer .footer-link {
            font-size: 12px !important;
            font-weight: 500 !important;
            color: #000000 !important;
            transition: all 0.25s ease;
          }

          footer .footer-link:hover {
            color: #ffffff !important;
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
            color: #ffffff !important;
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

          footer img {
            width: 120px !important;
            max-height: 48px !important;
            object-fit: contain;
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
            color: #ffffff !important;
          }

          footer .opacity-50 {
            font-size: 10px !important;
            color: #000000 !important;
            opacity: 0.5 !important;
          }

          /* ================= COPYRIGHT ================= */ footer .footer-copyright { font-size: 11px !important; font-weight: 600 !important; color: #000000 !important; } /* ================= AUCTECH LINK ================= */ footer .footer-developer-link { color: #ffffff !important; font-size: 11px !important; font-weight: 700 !important; text-decoration: none !important; transition: opacity 0.25s ease; } footer .footer-developer-link:hover { color: #ffffff !important; opacity: 0.8; }
          /* ================= MOBILE ================= */

          @media (max-width: 767px) {

            footer p {
              font-size: 12px !important;
              line-height: 1.55 !important;
            }

            footer h6 {
              font-size: 12px !important;
              margin-bottom: 8px !important;
            }

            footer .footer-link {
              font-size: 11px !important;
            }

            footer .footer-contact-link,
            footer .footer-contact-item,
            footer .footer-contact-item span,
            footer strong {
              font-size: 11px !important;
            }

            footer .footer-bottom-link {
              font-size: 10px !important;
            }

            footer .footer-copyright {
              font-size: 10px !important;
            }

            footer img {
              width: 115px !important;
            }

            .footer-social-btn {
              width: 32px !important;
              height: 32px !important;
              font-size: 12px !important;
            }
          }
        `}
      </style>

      <footer
        className="text-dark"
        style={{
          backgroundColor: "#C8A22C",
        }}
      >
        {/* ================= MAIN FOOTER ================= */}
        <div className="container pt-4 pb-3">
          <div className="row g-4">

            {/* ================= BRAND ================= */}
            <div className="col-12 col-lg-4">
              <Link to="/" className="d-inline-block mb-2">
                <img
                  src={logo}
                  alt="Ramayana City Logo"
                  className="img-fluid"
                />
              </Link>

              <p className="mb-3 pe-lg-4">
                Ramayana City is a premium residential township located on
                NH-56B, Sarojini Nagar, Lucknow. Experience a peaceful
                lifestyle where spirituality, greenery, and modern
                infrastructure come together.
              </p>

              {/* ================= SOCIAL BUTTONS ================= */}
              <div className="d-flex gap-2">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn btn rounded-circle d-flex align-items-center justify-content-center"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube"></i>
                </a>

                {/* LinkedIn */}
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
            <div className="col-6 col-md-3 col-lg-2">
              <h6 className="text-uppercase mb-3">
                Quick Links
              </h6>

              <ul className="list-unstyled mb-0">
                {[
                  { name: "Home", to: "/" },
                  { name: "About", to: "/about" },
                  { name: "Project", to: "/project" },
                  { name: "Why Choose", to: "/whychoose" },
                  { name: "Gallery", to: "/gallery" },
                  { name: "Contact", to: "/contact" },
                ].map((link, idx) => (
                  <li className="mb-2" key={idx}>
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
            <div className="col-6 col-md-3 col-lg-2">
              <h6 className="text-uppercase mb-3">
                Legal & Docs
              </h6>

              <ul className="list-unstyled mb-0">
                {[
                  { name: "Privacy Policy", to: "/privacy-policy" },
                  { name: "Terms & Conditions", to: "/terms-conditions" },
                  { name: "Disclaimer", to: "/disclaimer" },
                  { name: "Sitemap", to: "/sitemap" },
                  { name: "RERA Details", to: "/rera" },
                ].map((link, idx) => (
                  <li className="mb-2" key={idx}>
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
            <div className="col-12 col-md-6 col-lg-4">
              <h6 className="text-uppercase mb-3">
                Contact Us
              </h6>

              <div className="d-flex flex-column gap-2">

                {/* Phone */}
                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-telephone-fill mt-1"></i>

                  <a
                    href="tel:+918882125125"
                    className="footer-contact-link text-decoration-none"
                  >
                    +91-8882125125
                  </a>
                </div>

                {/* Email */}
                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-envelope-fill mt-1"></i>

                  <a
                    href="mailto:info@ramayanacity.com"
                    className="footer-contact-link text-decoration-none"
                  >
                    info@ramayanacity.com
                  </a>
                </div>

                {/* Site Address */}
                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-geo-alt-fill mt-1 flex-shrink-0"></i>

                  <span>
                    <strong>Site Address:</strong>{" "}
                    NH-56B, Khatola Village, Sarojini Nagar, Lucknow, U.P.
                  </span>
                </div>

                {/* Office Address */}
                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-building-fill mt-1 flex-shrink-0"></i>

                  <span>
                    <strong>Office Address:</strong>{" "}
                    309, 3rd Floor, Felix Square, Sushant Golf City,
                    Lucknow - 226030
                  </span>
                </div>

                {/* Working Hours */}
                <div className="footer-contact-item d-flex align-items-start gap-2">
                  <i className="footer-contact-icon bi bi-clock-fill mt-1"></i>

                  <span>
                    <strong>Working Hours:</strong>{" "}
                    Mon–Sun : 9:00 AM – 7:00 PM
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
     
{/* ================= COPYRIGHT ================= */}
<div className="border-top border-dark border-opacity-25 py-2">
  <div className="container">
    <div className="row align-items-center g-2">

      {/* Copyright */}
      <div className="col-12 col-lg-6 text-center text-lg-start">
        <p className="footer-copyright mb-0">
          © 2026 Ramayana City. All Rights Reserved.
        </p>
      </div>

      {/* Developed By */}
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

