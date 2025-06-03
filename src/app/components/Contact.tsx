"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contact-form max-w-xl p-4 space-y-4 text-white"
      >
        <h2 id="contact-h2">Contact Us</h2>
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 border rounded"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 border rounded"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          className="w-full p-2 border rounded"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-green-700">{status}</p>}
      </form>

      <div className="contact-icons">
        <Link
          href="https://web.facebook.com/profile.php?id=100064256584472"
          target="_blank"
          className="fb-link"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="tel:+639959341631" target="_blank" className="mobile-link">
          <i className="fas fa-phone"></i> +639959341631
        </Link>
        <Link
          href="https://maps.app.goo.gl/ipj1kwjXmZdd5YT88"
          target="_blank"
          className="gmap-link"
        >
          <i className="fas fa-map-marker-alt"></i> Brgy. Inamotan, Manaoag,
          Pangasinan, Philippines
        </Link>
        <Link
          href="mailto:rmmugprinting@gmail.com"
          target="_blank"
          className="gmail-link"
        >
          <i className="fas fa-envelope"></i> rmmugprinting@gmail.com
        </Link>
      </div>
    </>
  );
}
