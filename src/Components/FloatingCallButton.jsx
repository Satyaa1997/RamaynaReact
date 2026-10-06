import React from "react";

const FloatingCallButton = () => {
  return (
    <>
      <style>{`
        .floating-call-button {
          position: fixed;
          right: 22px;
          bottom: 24px;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: #0d6efd;
          border: 2px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          text-decoration: none;
          font-size: 23px;
          z-index: 1999;
          transition: transform 0.25s ease, background 0.25s ease;
          animation: callButtonPulse 2s infinite;
        }

        .floating-call-button:hover {
          color: #ffffff;
          background: #084298;
          transform: translateY(-3px) scale(1.05);
        }

        .floating-call-button:focus-visible {
          outline: 3px solid rgba(13, 110, 253, 0.4);
          outline-offset: 4px;
        }

        @keyframes callButtonPulse {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
              0 0 0 0 rgba(13, 110, 253, 0.45);
          }
          50% {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
              0 0 0 10px rgba(13, 110, 253, 0);
          }
        }

        @media (max-width: 576px) {
          .floating-call-button {
            right: 16px;
            bottom: 18px;
            width: 52px;
            height: 52px;
            font-size: 21px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-call-button {
            animation: none;
          }
        }
      `}</style>

      <a
        href="tel:+918882125125"
        className="floating-call-button"
        aria-label="Call Ramayna City at +91 88821 25125"
        title="Call +91-8882125125"
      >
        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default FloatingCallButton;
