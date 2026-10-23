import React from "react";
import { FaShieldHalved } from "react-icons/fa6";

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

const PrivacyPolicy = () => {
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
            Legal & Security
          </span>
          <h1 className="text-white fw-bold mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Privacy Policy
          </h1>
          <p className="text-white-50 mx-auto mb-0" style={{ maxWidth: "600px", fontSize: "14px" }}>
            Your privacy is important to us. Learn how Ramayana City collects, uses, and protects your personal information.
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
                <FaShieldHalved />
              </div>
              <div>
                <h5 className="fw-bold mb-1">Commitment to Data Privacy</h5>
                <small className="text-muted">Last updated: October 2026</small>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>1. Information We Collect</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                When you visit Ramayana City website, book a site visit, or submit an inquiry, we may collect personal details such as your full name, phone number, email address, and preferred plot requirements. This information is gathered solely to assist you with accurate project details and booking assistance.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>2. How We Use Your Information</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                The information collected is used exclusively for:
              </p>
              <ul className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                <li>Scheduling and confirming free site visits.</li>
                <li>Providing requested price lists, master plans, and brochure updates.</li>
                <li>Responding to customer support queries and assistance.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>3. Data Protection & Security</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                We implement robust security protocols to protect your personal information against unauthorized access, disclosure, or alteration. We maintain a strict 100% spam-free assurance and never sell or rent your data to third-party marketers.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>4. Contact Us</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                If you have any questions regarding our Privacy Policy, please feel free to reach out to us at <a href="mailto:info@ramayanacity.com" style={{ color: GOLD, fontWeight: 600 }}>info@ramayanacity.com</a> or call us at <a href="tel:+918882125125" style={{ color: GOLD, fontWeight: 600 }}>+91-8882125125</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;