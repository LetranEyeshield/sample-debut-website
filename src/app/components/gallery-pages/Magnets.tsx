"use client";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";

export default function Magnets() {
  //FOR GALLERY
  const IMAGES = Array.from({ length: 2 }, (_, i) => ({
    // src: `/images/gallery/photo-${i + 1}.jpg`,
    src: `/images/ref-magnets/${i + 1}.jpg`,
  }));

  const getImages = IMAGES.length;

  const ITEMS_PER_PAGE = 2;

  const [page, setPage] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const paginatedImages = IMAGES.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(IMAGES.length / ITEMS_PER_PAGE);
  return (
    <>
      <h3 id="magnets-h3">REF MAGNETS</h3>
      <div className="gallery-image-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4">
        {paginatedImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setOpenIndex((page - 1) * ITEMS_PER_PAGE + idx)}
            className="cursor-pointer"
          >
            <Image
              src={img.src}
              alt={`Gallery ${idx}`}
              width={400}
              height={300}
              className="rounded shadow object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-div flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="get-images-count">{getImages + " Images"}</div>

      {/* Lightbox */}
      {openIndex !== null && (
        <Lightbox
          open
          index={openIndex}
          close={() => setOpenIndex(null)}
          slides={IMAGES}
          plugins={[Zoom]}
          zoom={{ maxZoomPixelRatio: 3 }}
        />
      )}
    </>
  );
}
