
import React, { useState } from "react";

// =====================================================
// IMAGE IMPORTS
// =====================================================

import gallerydp from "../assets/gallerydp.png";
import projectView from "../assets/Ramayana_city (4).png";
import park from "../assets/park.jpg";
import entrance from "../assets/Ramayana_city (3).png";
import surroundings from "../assets/WhatsApp Image 2026-10-02 at 11.20.54.jpeg";
import security from "../assets/security.jpg";
import projectMap from "../assets/project-map.jpg";
import gallery2 from "../assets/gallery2.jpg";
import highway from "../assets/highway.jpg";

// =====================================================
// GALLERY DATA
// =====================================================

const galleryItems = [
  {
    id: 1,
    title: "Ramayna City",
    category: "Project",
    image: gallerydp,
  },
  {
    id: 2,
    title: "Project View",
    category: "Project",
    image: projectView,
  },
  {
    id: 3,
    title: "Green Landscape",
    category: "Lifestyle",
    image: park,
  },
  {
    id: 4,
    title: "Entrance",
    category: "Project",
    image: entrance,
  },
  {
    id: 5,
    title: "Beautiful Surroundings",
    category: "Lifestyle",
    image: surroundings,
  },
  {
    id: 6,
    title: "Modern Amenities",
    category: "Amenities",
    image: security,
  },
  {
    id: 7,
    title: "Planned Development",
    category: "Project",
    image: projectMap,
  },
  {
    id: 8,
    title: "Green Environment",
    category: "Lifestyle",
    image: gallery2,
  },
  {
    id: 10,
    title: "Connectivity",
    category: "Location",
    image: highway,
  },
];

// =====================================================
// GALLERY COMPONENT
// =====================================================

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* =====================================================
          GALLERY HERO
      ===================================================== */}

      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "450px",
          marginTop: "70px",

          backgroundImage: `url(${gallerydp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark + Blur Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <span
                className="d-inline-block text-uppercase fw-semibold mb-3"
                style={{
                  color: "#D0B15B",
                  letterSpacing: "3px",
                  fontSize: "13px",
                }}
              >
                Ramayna City
              </span>

              <h1
                className="text-white fw-bold mb-3"
                style={{
                  fontSize: "clamp(38px, 6vw, 68px)",
                  lineHeight: "1.1",
                }}
              >
                Our Gallery
              </h1>

              <p
                className="text-white mb-0 mx-auto"
                style={{
                  maxWidth: "650px",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  opacity: 0.9,
                }}
              >
                Explore the vision, surroundings and lifestyle
                that make Ramayna City a thoughtfully planned
                destination for modern living.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="py-5"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container py-lg-4">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">

              <span
                className="text-uppercase fw-semibold"
                style={{
                  color: "#D0B15B",
                  letterSpacing: "2px",
                  fontSize: "13px",
                }}
              >
                Visual Journey
              </span>

              <h2
                className="fw-bold mt-2 mb-3"
                style={{
                  color: "#202020",
                  fontSize: "clamp(30px, 4vw, 44px)",
                }}
              >
                Experience Ramayna City
              </h2>

              <p
                className="text-secondary mb-0"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.9",
                }}
              >
                Take a closer look at the spaces, surroundings,
                planning and lifestyle envisioned for Ramayna City.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY GRID
      ===================================================== */}

      <section
        className="pb-5"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">

          <div className="row g-3 g-md-4">

            {galleryItems.map((item) => (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={item.id}
              >
                <div
                  className="position-relative overflow-hidden"
                  onClick={() => setSelectedImage(item)}
                  style={{
                    height: "300px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor: "#f2f2f2",
                  }}
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />

                  {/* Bottom Overlay */}
                  <div
                    className="position-absolute bottom-0 start-0 w-100"
                    style={{
                      padding: "55px 20px 20px",
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.82))",
                    }}
                  >
                    <span
                      className="text-uppercase"
                      style={{
                        color: "#D0B15B",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1.5px",
                      }}
                    >
                      {item.category}
                    </span>

                    <h5 className="text-white fw-semibold mb-0 mt-1">
                      {item.title}
                    </h5>
                  </div>

                  {/* View Icon */}
                  <div
                    className="position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.92)",
                      color: "#202020",
                      fontSize: "18px",
                    }}
                  >
                    ↗
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          GALLERY BANNER
      ===================================================== */}

      <section
        className="py-5"
        style={{
          backgroundColor: "#F8F7F3",
        }}
      >
        <div className="container py-lg-4">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span
                className="text-uppercase fw-semibold"
                style={{
                  color: "#D0B15B",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                Discover More
              </span>

              <h2
                className="fw-bold mt-2 mb-2"
                style={{
                  color: "#202020",
                  fontSize: "clamp(28px, 4vw, 42px)",
                }}
              >
                A Place Designed Around Better Living
              </h2>

              <p
                className="text-secondary mb-0"
                style={{
                  lineHeight: "1.8",
                  maxWidth: "700px",
                }}
              >
                Discover the vision behind Ramayna City and
                explore what makes it a distinctive destination
                for future-focused living.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <a
                href="/contact"
                className="btn text-white fw-semibold px-4 py-3"
                style={{
                  backgroundColor: "#D0B15B",
                  border: "1px solid #D0B15B",
                  borderRadius: "3px",
                }}
              >
                Enquire Now →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          IMAGE MODAL
      ===================================================== */}

      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          onClick={() => setSelectedImage(null)}
          style={{
            zIndex: 2000,
            backgroundColor: "rgba(0,0,0,0.92)",
            padding: "20px",
          }}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="btn position-absolute top-0 end-0 m-3"
            style={{
              color: "#ffffff",
              fontSize: "32px",
              lineHeight: "1",
              zIndex: 2001,
            }}
          >
            ×
          </button>

          {/* Modal Content */}
          <div
            className="position-relative text-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1100px",
              width: "100%",
            }}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="img-fluid"
              style={{
                maxHeight: "78vh",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: "5px",
              }}
            />

            <div className="mt-3">

              <span
                className="text-uppercase"
                style={{
                  color: "#D0B15B",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                {selectedImage.category}
              </span>

              <h5 className="text-white mt-1 mb-0">
                {selectedImage.title}
              </h5>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Gallery;
