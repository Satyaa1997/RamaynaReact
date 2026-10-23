import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";

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

const Disclaimer = () => {
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
        <div className="container py-5 position-relative" style={{ zIndex: "2" }}>
          <span
            style={{
              color: GOLD,
              fontFamily: CURSIVE,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Legal Notice
          </span>
          <h1 className="text-white fw-bold mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Disclaimer
          </h1>
          <p className="text-white-50 mx-auto mb-0" style={{ maxWidth: "600px", fontSize: "14px" }}>
            Important disclosures regarding project specifications, visuals, and promotional content.
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
                <FaCircleExclamation />
              </div>
              <div>
                <h5 className="fw-bold mb-1">General Disclaimer</h5>
                <small className="text-muted">Ramayana City Project</small>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>1. Informational Purpose Only</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                The content provided on this website is for general informational purposes only. It does not constitute an offer, legal contract, or binding commitment of any nature between Ramayana City and the viewer.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>2. Visuals & Renderings</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                All artistic renderings, walkthrough videos, master plan layouts, and architectural images displayed on the website are conceptual representations and may be subject to modifications during actual development and construction phases.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3" style={{ color: DARK, fontSize: "18px" }}>3. Third-Party Links</h4>
              <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                Our website may contain links to external sites (such as UP-RERA or Google Maps). Ramayana City holds no responsibility for the privacy practices, content, or accuracy of information on external third-party websites.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;