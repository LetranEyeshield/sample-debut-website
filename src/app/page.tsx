"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import toast from "react-hot-toast";

export default function Home() {
  const Section = ({
    children,
    animation,
  }: {
    children: React.ReactNode;
    animation: Variants;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animation}
        transition={{ duration: 1 }}
        className="mt-10 flex items-center justify-center text-center"
      >
        {children}
      </motion.section>
    );
  };

  // Different animations per section
  const headerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const aboutAnimation = {
    // hidden: { opacity: 0, x: -100 },
    // visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const parentsAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const galleryAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const eventAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // GALLERY DEBUTANT
  const lightboxImages = Array.from({ length: 6 }, (_, i) => ({
    src: `/images/gallery/debutant/${i + 1}.jpg`,
  }));
  // images to show in page
  const galleryImages = lightboxImages.slice(0, 3); //three images to show
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  //18 ROSES GALLERY
  const rosesImages = Array.from({ length: 5 }, (_, i) => ({
    src: `/images/gallery/roses/${i + 1}.jpg`,
  }));
  // images to show in page
  const galleryRosesImages = rosesImages.slice(0, 3); //three images to show
  const [openRoses, setOpenRoses] = useState(false);
  const [indexRose, setIndexRose] = useState(0);
  //18 CANDLES GALLERY
  const candleImages = Array.from({ length: 5 }, (_, i) => ({
    src: `/images/gallery/candles/${i + 1}.jpg`,
  }));
  // images to show in page
  const galleryCandlesImages = candleImages.slice(0, 3); //three images to show
  const [openCandles, setOpenCandles] = useState(false);
  const [indexCandles, setIndexCandles] = useState(0);

  // RSVP
  const [showRSVP, setShowRSVP] = useState(false);
  //FOR RSVP FORM
  function RSVPForm({ onClose }: { onClose: () => void }) {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      address: "",
      attending: "",
      guests: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        //alert("RSVP sent! Thank you.");
        toast.success("RSVP sent successfully!");

        onClose();
      } else {
        //alert("Oops, something went wrong.");
        toast.error("Oops! Failed to send RSVP, Try Again Later!");
      }
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <form
          onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 max-w-md w-full"
        >
          <h2 id="rsvp-h2" className="text-xl font-semibold mb-4">
            RSVP Form
          </h2>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full mb-2 p-2 border"
          />
          <label htmlFor="phone"></label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-2 p-2 border"
            required
          />
          <label htmlFor="address"></label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full mb-2 p-2 border"
          />
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Will you be attending?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="attending"
                  value="Yes"
                  checked={formData.attending === "Yes"}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="attending"
                  value="No"
                  checked={formData.attending === "No"}
                  onChange={handleChange}
                />
                No
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="attending"
                  value="Maybe"
                  checked={formData.attending === "Maybe"}
                  onChange={handleChange}
                />
                Maybe
              </label>
            </div>
          </div>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message for the debutant"
            required
            className="w-full mb-2 p-2 border"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Send RSVP
            </button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <main>
      <Section animation={headerAnimation}>
        <header id="header" className="flex items-center flex-col w-full">
          <h1 className="great-vibes text-5xl md:text-9xl text-center text-white w-full">
            Rencriselle&apos;s{" "}
            <span className="dancing-script text-5xl md:text-7xl">18th</span>{" "}
            <span className="pinyon-script text-5xl md:text-8xl">Birthday</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-300">
            THURSDAY, SEPTEMBER 8, 2044
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-pink-300">
            8:00 pm
          </p>
        </header>
      </Section>
      <div id="banner" className="text-center">
        <img
          src="/images/debutant/debutant-1.jpg"
          alt="Rencriselle"
          loading="lazy"
        />
      </div>
      <Section animation={aboutAnimation}>
        <div id="about-section" className="text-center rounded-xl">
          <h2 className="text-5xl md:text-7xl font-bold text-black-500 mb-6">
            About Me
          </h2>
          <p className="text-black-500 md:text-xl px-3">
            Hi! I&apos;m Rencriselle and I&apos;m so exited to celebrate my 18th
            birthday with you! Join me for an unforgettable evening full of fun,
            laughter, and memories.
          </p>
        </div>
      </Section>
      <Section animation={parentsAnimation}>
        <div id="parents-div" className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black-500 mb-12">
            Proud Parents
          </h2>
          <img src="/images/parents.jpg" alt="Rencriselle" loading="lazy" />
          <p className="mt-8 text-2xl">Mr. Michael Cris Rosalin</p>
          <p className="text-2xl">Mrs. Renelle Rosalin</p>
        </div>
      </Section>

      <div className="debutant-gallery p-10 flex flex-col">
        <h2 className="text-5xl md:text-6xl font-bold text-center">Gallery</h2>
        <Section animation={galleryAnimation}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => {
                  setIndex(idx); // open the lightbox at correct index
                  setOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="rounded shadow-md hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index} // Important: starts from clicked index
            slides={lightboxImages} // 50 images in Lightbox
            plugins={[Thumbnails, Zoom]}
            styles={{
              container: {
                zIndex: 9999,
                backgroundColor: "rgba(0,0,0,1)",
              },
            }}
            zoom={{ maxZoomPixelRatio: 3 }}
          />
        </Section>
      </div>

      <div className="roses-gallery p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          The 18 Roses
        </h2>
        <Section animation={galleryAnimation}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryRosesImages.map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => {
                  setIndexRose(idx); // open the lightbox at correct index
                  setOpenRoses(true);
                }}
              >
                <img
                  src={image.src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="rounded shadow-md hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          <Lightbox
            open={openRoses}
            close={() => setOpenRoses(false)}
            index={indexRose} // Important: starts from clicked index
            slides={rosesImages} // 50 images in Lightbox
            plugins={[Thumbnails, Zoom]}
            styles={{
              container: {
                zIndex: 9999,
                backgroundColor: "rgba(0,0,0,1)",
              },
            }}
            zoom={{ maxZoomPixelRatio: 3 }}
          />
        </Section>
      </div>
      <div className="candles-gallery p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          The 18 Candles
        </h2>
        <Section animation={galleryAnimation}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryCandlesImages.map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => {
                  setIndexCandles(idx); // open the lightbox at correct index
                  setOpenCandles(true);
                }}
              >
                <img
                  src={image.src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="rounded shadow-md hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          <Lightbox
            open={openCandles}
            close={() => setOpenCandles(false)}
            index={indexCandles} // Important: starts from clicked index
            slides={candleImages} // 50 images in Lightbox
            plugins={[Thumbnails, Zoom]}
            styles={{
              container: {
                zIndex: 9999,
                backgroundColor: "rgba(0,0,0,1)",
              },
            }}
            zoom={{ maxZoomPixelRatio: 3 }}
          />
        </Section>
      </div>

      <div id="event-details" className="pt-2 pb-6 text-center">
        <Section animation={eventAnimation}>
          <h2 className="text-5xl md:text-7xl font-bold text-black-500">
            Event Details
          </h2>
          <ul className="mt-6 mb-2">
            <li className="mb-2">Date: September 9, 2044</li>
            <li className="mb-2">Time: 7:00 pm</li>
            <li className="mb-2">Venue: Balay Senyang</li>
            <li>
              Location: Sitio Mitura, Anonas E St, Urdaneta City, 2428
              Pangasinan
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.420230380034!2d120.56692927437388!3d15.991625241512311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913f59704abe4f%3A0x381b226d99891584!2sBALAY%20SENYANG%20RESORT%20%26%20HOTEL!5e0!3m2!1sen!2sph!4v1751071285141!5m2!1sen!2sph"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Section>
        {/* RSVP Button */}
        <div className="text-center">
          <button
            onClick={() => setShowRSVP(true)}
            className="mt-4 mb-4 bg-pink-300 text-black px-6 py-3 rounded-full text-lg hover:bg-pink-500 transition"
          >
            RSVP Now
          </button>
        </div>

        {/* RSVP Modal */}
        {showRSVP && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog"
            aria-labelledby="rsvp-title"
          >
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
              <h3 id="rsvp-title" className="text-2xl font-bold mb-4">
                RSVP
              </h3>
              <button
                onClick={() => setShowRSVP(true)}
                className="fixed bottom-8 right-8 bg-pink-300 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600"
              >
                RSVP
              </button>

              {showRSVP && <RSVPForm onClose={() => setShowRSVP(false)} />}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
