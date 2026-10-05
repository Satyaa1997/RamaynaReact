import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
 
  { label: "Why Choose", to: "/whychoose" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const GOLD = "#D0B15B";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Mobile menu close karne aur top par scroll karne ke liye helper function
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Agar mobile view me menu open hai toh click ke baad use band (collapse) karne ke liye
    const navbarCollapse = document.getElementById("mainNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
      style={{
        zIndex: 1050,
        paddingTop: "7px",
        paddingBottom: "7px",
        overflowX: "hidden",
      }}
    >
      <div className="container">
        {/* ================= LOGO ================= */}
        <Link 
          to="/" 
          onClick={handleNavClick}
          className="navbar-brand d-flex align-items-center me-0"
        >
          <img
            src={logo}
            alt="Ramayana City"
            className="img-fluid"
            style={{
              height: "50px",
              width: "auto",
              maxHeight: "55px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="navbar-toggler shadow-none ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: `1px solid ${GOLD}`,
            padding: "6px 9px",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ================= NAVIGATION ================= */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto align-items-lg-center text-center">
            {navigation.map((item) => {
              const active = isActive(item.to);

              return (
                <li className="nav-item" key={item.label}>
                  <Link
                    to={item.to}
                    onClick={handleNavClick}
                    className="nav-link fw-semibold"
                    style={{
                      color: active ? GOLD : "#000000",
                      fontSize: "15px",
                      padding: "10px 15px",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ================= ENQUIRY BUTTON ================= */}
          <div className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0 mb-2 mb-lg-0">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="btn text-white fw-semibold rounded-1"
              style={{
                backgroundColor: GOLD,
                border: `1px solid ${GOLD}`,
                fontSize: "14px",
                padding: "9px 20px",
                whiteSpace: "nowrap",
              }}
            >
              Enquiry Now
              <span className="ms-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}