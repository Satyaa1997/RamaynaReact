import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Agar smooth scrolling chahiye toh 'smooth' rakhein, warna 'auto' kar sakte hain
    });
  }, [pathname]);

  return null;
}