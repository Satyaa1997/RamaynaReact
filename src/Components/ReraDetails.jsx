import React from "react";
import { FaBuildingColumns, FaGlobe, FaArrowRight } from "react-icons/fa6";
import reraImage from "../assets/RERA Ramayana.png";

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

const ReraDetails = () => {
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
            Regulatory Compliance
          </span>
          <h1 className="text-white fw-bold mb-3" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            RERA Details
          </h1>
          <p className="text-white-50 mx-auto mb-0" style={{ maxWidth: "600px", fontSize: "14px" }}>
            Official RERA registration and banking credentials for Ramayana City.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="p-4 p-md-5 rounded-4 shadow-sm" style={{ backgroundColor: "#fafafa", border: "1px solid #eeeeee" }}>
            
            <div className="row align-items-center g-4">
              
              {/* RERA QR / IMAGE */}
              <div className="col-md-4 text-center">
                <div
                  className="p-3 bg-white rounded-3 shadow-sm d-inline-block"
                  style={{ border: "1px solid #e0e0e0" }}
                >
                  <img
                    src={reraImage}
                    alt="RERA Ramayana QR"
                    style={{ width: "150px", height: "150px", objectFit: "contain", display: "block" }}
                  />
                  <small className="text-muted d-mt-2 mt-2 d-block" style={{ fontSize: "11px" }}>Scan QR for verification</small>
                </div>
              </div>

              {/* RERA DETAILS */}
              <div className="col-md-8">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaBuildingColumns style={{ color: GOLD, fontSize: "20px" }} />
                  <h4 className="fw-bold mb-0" style={{ fontSize: "18px" }}>Official RERA Information</h4>
                </div>

                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  <div><strong>RERA Reg. No.:</strong> <span className="text-muted">UPRERAPRJ437147/10/2026</span></div>
                  <div><strong>Official Website:</strong> <a href="https://www.up-rera.in/" target="_blank" rel="noopener noreferrer" style={{ color: GOLD, fontWeight: 600 }}>www.up-rera.in</a></div>
                  <div><strong>Launch Date:</strong> <span className="text-muted">03-Oct-2026</span></div>
                  <div><strong>Bank Account No.:</strong> <span className="text-muted">0294002900000288</span></div>
                  <div><strong>Account Name:</strong> <span className="text-muted">Dishadeep Developers Pvt Ltd collection ac for Ramayana city</span></div>
                  <div><strong>Bank Name:</strong> <span className="text-muted">PNB, Hazratganj, Lucknow</span></div>
                  <div><strong>IFSC Code:</strong> <span className="text-muted">PUNB0029400</span></div>
                </div>

                <a
                  href="https://www.up-rera.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                  style={{ backgroundColor: GOLD, color: "#fff", fontSize: "13px" }}
                >
                  <FaGlobe /> Verify on UP-RERA Portal <FaArrowRight size={10} />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ReraDetails;