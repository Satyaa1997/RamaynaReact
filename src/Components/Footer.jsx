import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo _02.png";
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

          /* ================= QUICK LINKS + LEGAL SPACING ================= */

          footer .quick-links-column {
            margin-right: -35px !important;
          }

          footer .legal-column {
            margin-left: -35px !important;
          }

          /* ================= CONTACT ================= */

          footer .contact-column {
            margin-left: -25px !important;
          }

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

          /* ================= COPYRIGHT ================= */

          footer .footer-copyright {
            font-size: 11px !important;
            font-weight: 600 !important;
            color: #000000 !important;
          }

          /* ================= AUCTECH LINK ================= */

          footer .footer-developer-link {
            color: #ffffff !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            text-decoration: none !important;
            transition: opacity 0.25s ease;
          }

          footer .footer-developer-link:hover {
            color: #ffffff !important;
            opacity: 0.8;
          }

          /* =====================================================
             RERA SECTION
          ===================================================== */

          footer .rera-column {
            overflow: visible !important;
          }

          footer .rera-section {
            display: flex;
            flex-direction: column;
            align-items: flex-start !important;
            justify-content: flex-start;
            padding-left: 0 !important;

            /* RERA ko aur left shift */
            margin-left: -30px !important;

            /* Text ke liye extra width */
            width: 570px !important;
            max-width: none !important;
          }

          footer .rera-section h6 {
            margin-left: 0 !important;
          }

          /* ================= RERA CONTENT ================= */

          footer .rera-content {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 2px !important;
            width: 570px !important;
            max-width: none !important;
          }

          /* ================= RERA IMAGE / QR ================= */

          footer .rera-image {
            width: 90px !important;
            height: 90px !important;
            max-width: 95px !important;
            max-height: 95px !important;
            object-fit: contain !important;
            object-position: center !important;
            display: block !important;
            margin: 0 !important;
            flex-shrink: 0 !important;
            transition: transform 0.3s ease;
          }

          footer .rera-image:hover {
            transform: translateY(-3px) scale(1.02);
          }

          /* ================= RERA DETAILS ================= */

          footer .rera-details {
            font-size: 8.5px !important;
            line-height: 1.45 !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          /* Each RERA point separate line */
          footer .rera-details div {
            display: block !important;
            width: 100% !important;
            margin: 0 0 3px 0 !important;
            padding: 0 !important;

            /* Desktop par ek point ek hi line */
            white-space: nowrap !important;
          }

          footer .rera-details div:last-child {
            margin-bottom: 0 !important;
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
            color: #ffffff !important;
            text-decoration: underline !important;
          }

          /* ================= LARGE TABLET ================= */

          @media (max-width: 1199px) {

            footer .quick-links-column {
              margin-right: 0 !important;
            }

            footer .legal-column {
              margin-left: 0 !important;
            }

            /* Contact tablet par normal position */
            footer .contact-column {
              margin-left: 0 !important;
            }

            footer .rera-section {
              margin-left: -25px !important;
              width: 520px !important;
            }

            footer .rera-content {
              gap: 10px !important;
              width: 520px !important;
            }

            footer .rera-image {
              width: 90px !important;
              height: 90px !important;
              max-width: 90px !important;
              max-height: 90px !important;
            }

            footer .rera-details {
              font-size: 8px !important;
              line-height: 1.4 !important;
            }

            footer .rera-details strong {
              font-size: 8px !important;
            }

          }

          /* ================= TABLET ================= */

          @media (max-width: 991px) {

            footer .quick-links-column {
              margin-right: 0 !important;
            }

            footer .legal-column {
              margin-left: 0 !important;
            }

            footer .contact-column {
              margin-left: 0 !important;
            }

            footer .rera-section {
              margin-left: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            footer .rera-content {
              gap: 10px !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            footer .rera-image {
              width: 90px !important;
              height: 90px !important;
              max-width: 90px !important;
              max-height: 90px !important;
            }

            footer .rera-details {
              font-size: 8px !important;
              line-height: 1.4 !important;
            }

            footer .rera-details strong {
              font-size: 8px !important;
            }

            /* Tablet par bhi line maintain */
            footer .rera-details div {
              white-space: nowrap !important;
            }

          }

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

            footer .quick-links-column {
              margin-right: 0 !important;
            }

            footer .legal-column {
              margin-left: 0 !important;
            }

            footer .contact-column {
              margin-left: 0 !important;
            }

            /* ================= MOBILE RERA ================= */

            footer .rera-section {
              margin-left: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            footer .rera-content {
              display: flex;
              align-items: flex-start;
              gap: 8px !important;
              width: 100% !important;
              max-width: 100% !important;
            }

            footer .rera-image {
              width: 80px !important;
              height: 80px !important;
              max-width: 80px !important;
              max-height: 80px !important;
            }

            footer .rera-details {
              font-size: 7.5px !important;
              line-height: 1.4 !important;
              flex: 1 !important;
            }

            footer .rera-details strong {
              font-size: 7.5px !important;
            }

            /* Mobile par natural wrapping */
            footer .rera-details div {
              margin-bottom: 2px !important;
              white-space: normal !important;
              width: 100% !important;
            }

          }

          /* ================= VERY SMALL MOBILE ================= */

          @media (max-width: 400px) {

            footer .rera-content {
              gap: 7px !important;
            }

            footer .rera-image {
              width: 70px !important;
              height: 70px !important;
              max-width: 70px !important;
              max-height: 70px !important;
            }

            footer .rera-details {
              font-size: 7px !important;
              line-height: 1.35 !important;
            }

            footer .rera-details strong {
              font-size: 7px !important;
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

        {/* ================= MAIN FOOTER ================= */}

        <div className="container pt-5 pb-5">
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

            <div className="col-6 col-md-3 col-lg-2 quick-links-column">

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

            {/* ================= RERA ================= */}

            <div className="col-12 col-md-6 col-lg-2 rera-column">

              <div className="rera-section">

                <h6 className="text-uppercase mb-3">
                  RERA
                </h6>

                {/* QR + RERA DETAILS */}

                <div className="rera-content">

                  {/* RERA QR IMAGE */}

                  <img
                    src={reraImage}
                    alt="RERA Ramayana"
                    className="rera-image"
                  />

                  {/* RERA INFORMATION */}

                  <div className="rera-details">

                    <div>
                      <strong>RERA Registration No.:</strong>{" "}
                      UPRERAPRJ437147/10/2026
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
                      <strong>Launch Date:</strong>{" "}
                      03-Oct-2026
                    </div>

                    <div>
                      <strong>RERA Account No.:</strong>{" "}
                      0294002900000288
                    </div>

                    <div>
                      <strong>RERA Collection A/c Name:</strong>{" "}
                      DISHADEEP DEVELOPRS PVT LTD
                    </div>

                    <div>
                      <strong>Collection A/c:</strong>{" "}
                      FOR RAMAYANA CITY
                    </div>

                    <div>
                      <strong>Bank Name & Branch:</strong>{" "}
                      PNB, Halwasiya, Hazratganj, Lucknow
                    </div>

                    <div>
                      <strong>IFSC Code:</strong>{" "}
                      PUNB0029400
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