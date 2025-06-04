"use client";

import Link from "next/link";
import ContactForm from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="about-section flex justify-between">
        <div className="about-section-left">
          <h2>About Us</h2>
          <p>
            At RM&apos;S Mug Printing, creativity meets quality in every product
            we make. What started with custom-printed mugs has grown into a
            one-stop shop for personalized items perfect for gifts, events, and
            business needs. We specialize in mug printing, Sintra boards, money
            envelopes, ref magnets, and loot bags—all designed with care and
            printed with precision. Whether you&apos;re celebrating a milestone,
            promoting your brand, or simply adding a personal touch, RM&apos;S
            Mug Printing is here to bring your ideas to life. With a strong
            focus on customer satisfaction, we turn your vision into beautifully
            crafted keepsakes that leave a lasting impression.
          </p>
          <Link href="/about" className="page-buttons">
            Learn More
          </Link>
        </div>
        <div className="about-section-right">
          <img src="/images/about-img.jpg" alt="RM's Mug Printing Logo 2" />
        </div>
      </div>

      <div className="gallery-section">
        <h2>Our Products</h2>
        <div className="gallery-wrapper">
          <div className="gallery-contents">
            <Link href="/gallery#mugs-h3">
              <img
                src="/images/gallery-mug.jpg"
                alt="mug photo"
                loading="lazy"
              />
              <span>Mugs</span>
            </Link>
          </div>
          <div className="gallery-contents">
            <Link href="/gallery#sintra-h3">
              <img
                src="/images/sintra-board.jpg"
                alt="sintra board photo"
                loading="lazy"
              />
              <span>Sintra Boards</span>
            </Link>
          </div>
          <div className="gallery-contents">
            <Link href="/gallery#envelopes-h3">
              <img
                src="/images/money-envelope.jpg"
                alt="money envelope photo"
                loading="lazy"
              />
              <span>Money Envelopes</span>
            </Link>
          </div>
          <div className="gallery-contents">
            <Link href="/gallery#magnets-h3">
              <img
                src="/images/ref-magnets.jpg"
                alt="reg magnet photo"
                loading="lazy"
              />
              <span>Ref Magnets</span>
            </Link>
          </div>
          <div className="gallery-contents">
            <Link href="/gallery#bags-h3">
              <img
                src="/images/loot-bags.jpg"
                alt="loot bag photo"
                loading="lazy"
              />
              <span>Loot Bags</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Reviews</h2>
        <div className="reviews-contents">
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <p className="comments">
            Thank You so much RM&apos;s Mug Printing.. Super ganda at super
            affordable price pa.. Sa uulitin po😊❤
          </p>
          <p className="person">- Myrasol Fruto Orpiano -</p>
        </div>
        <div className="reviews-contents">
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <p className="comments">
            Thank you RMs Mugs Printing s magandang souvenir na ginawa nyo sa
            aking kapatid noong binyag nya.
          </p>
          <p className="person">- Emma Rhose Baniaga -</p>
        </div>
        <div className="reviews-contents">
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <p className="comments">
            Thank you RMs Mugs Printing s souvenir for my daughter&apos;s
            christening.
          </p>
          <p className="person">- Rosemarie Macarling Baniaga -</p>
        </div>
        <a className="page-buttons" href="">
          See More
        </a>
      </div>
      <div className="contact-section">
        <ContactForm />
      </div>
    </>
  );
}
