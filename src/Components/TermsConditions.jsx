import React from "react";
import { FaFileContract, } from "react-icons/fa6";

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
    </div>
  );
};

const TermsConditions = () => {
  const GOLD = "#D0B15B";
  const DARK = "#171717";
  const WHITE = "#ffffff";
  const CURSIVE = "'Great Vibes', 'Brush Script MT', 'Segoe Script', cursive";

  return (
    <div style={{ backgroundColor: WHITE, color: DARK, overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden"
        style={{
          minHeight: "360px",
          backgroundColor: DARK,
          marginTop: "70px",
        }}
      >
        <GeometricBackground dark />
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <span
            style={{
              color: GOLD,
              fontFamily: CURSIVE,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Guidelines & Usage
          </span>
          <h1 className="text-white fw-bold mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Terms & Conditions
          </h1>
          <p className="text-white-50 mx-auto mb-0" style={{ maxWidth: "600px", fontSize: "14px" }}>
            Please read these terms and conditions carefully before using the Ramayana City website or booking services.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="p-4 p-md-5 rounded-4 shadow-sm" style={{ backgroundColor: "#fafafa", border: "1px solid #eeeeee" }}>
            
            <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom">
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  backgroundColor: `${GOLD}20`,
                  color: GOLD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                <FaFileContract />
              </div>
              <div>
                <h5 className="fw-bold mb-1">User Agreement</h5>
                <small className="text-muted">Effective Date: October 2026</small>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>1. Acceptance of Terms</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our digital platforms.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>2. Property Information & Pricing</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                All specifications, master plans, plot dimensions, pricing, and availability details listed on the website are subject to change without prior notice. Visitors are advised to verify all project details directly with authorized sales representatives or site consultants.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>3. Booking & Payments</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                Plot bookings, advance payments, and registry procedures are governed strictly by the official agreements executed between the buyer and Dishadeep Developers Pvt Ltd. Official payments must only be made to designated company bank accounts.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>4. Intellectual Property</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                All content, graphics, project logos, videos, and layout designs on this website are the intellectual property of Ramayana City. Unauthorized reproduction or distribution is strictly prohibited.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;