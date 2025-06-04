"use client";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/styles.css";
import Mugs from "../components/gallery-pages/Mugs";
import Sintra from "../components/gallery-pages/Sintra";
import Envelopes from "../components/gallery-pages/Envelopes";
import Magnets from "../components/gallery-pages/Magnets";
import Bags from "../components/gallery-pages/Bags";

export default function Gallery() {
  return (
    <div className="gallery-section">
      <h2>Products</h2>
      <Mugs />
      <Sintra />
      <Envelopes />
      <Magnets />
      <Bags />
      <hr />
    </div>
  );
}
