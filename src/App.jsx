import React from "react";

const WHATSAPP_NUMBER_DISPLAY = "+61 403 796 776";
const WHATSAPP_LINK = "https://wa.me/61403796776";
const EMAIL = "bliingjewellery24@gmail.com";

const categories = [
  {
    title: "Earrings",
    image: "/images/earrings/earrings02.jpg",
    text: "Timeless studs, elegant hoops and graceful drops designed to add sparkle to every moment.",
  },
  {
    title: "Necklaces",
    image: "/images/necklaces/necklace06.jpg",
    text: "A delicate touch around your neck to elevate your look with grace and brilliance.",
  },
  {
    title: "Bracelets",
    image: "/images/bracelets/bracelet03.jpg",
    text: "Elegant bracelets crafted to shine with sophistication.",
  },
  {
    title: "Rings",
    image: "/images/rings/ring13.jpg",
    text: "Beautiful rings for everyday luxury, gifting and special occasions.",
  },
];

const earrings = [
  {
    code: "ERHU01",
    title: "Diamond Hoop Earrings",
    diamonds: "0.3 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1099",
    image: "/images/earrings/hero.jpg",
  },
  {
    code: "ERD01",
    title: "Diamond Drop Earrings",
    diamonds: "0.6 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1199",
    image: "/images/earrings/earrings02.jpg",
  },
  {
    code: "ERHU02",
    title: "Diamond Hoop Earrings",
    diamonds: "0.836 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1649",
    image: "/images/earrings/earrings03.jpg",
  },
  {
    code: "ERHO01",
    title: "Diamond Stud Earrings",
    diamonds: "1 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1799",
    image: "/images/earrings/earrings04.jpg",
  },
  {
    code: "ERD02",
    title: "Diamond Hoop Earrings",
    diamonds: "1.71 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1749",
    image: "/images/earrings/earrings05.jpg",
  },
];

const necklaces = [
  {
    code: "NECKLACE",
    title: "Diamond Necklace",
    diamonds: "0.479 ct",
    metal: "18k Yellow Gold",
    weight: "1.63 g",
    price: "AUD 2500",
    image: "/images/necklaces/necklace06.jpg",
  },
  {
    code: "NECKLACE",
    title: "1 ct Diamond Necklace",
    diamonds: "1 ct",
    metal: "18k Yellow Gold",
    weight: "3.15 g",
    price: "AUD 3080",
    image: "/images/necklaces/necklace07.jpg",
  },
  {
    code: "NECKLACE",
    title: "Custom Diamond Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/necklaces/necklace08.jpg",
  },
  {
    code: "NECKLACE",
    title: "Pendant Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/necklaces/necklace09.jpg",
  },
  {
    code: "NECKLACE",
    title: "Elegant Chain Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/necklaces/necklace10.jpg",
  },
];

const bracelets = [
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "0.635 ct",
    metal: "18k Yellow Gold",
    weight: "2.39 gm",
    price: "AUD 2200",
    image: "/images/bracelets/bracelet03.jpg",
  },
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "1.250 ct",
    metal: "18k Yellow Gold",
    weight: "3.31 gm",
    price: "Contact us",
    image: "/images/bracelets/bracelet06.jpg",
  },
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet24.jpg",
  },
  {
    code: "BRACELET",
    title: "Elegant Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet25.jpg",
  },
  {
    code: "BRACELET",
    title: "Fine Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet26.jpg",
  },
  {
    code: "BRACELET",
    title: "Luxury Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet27.jpg",
  },
];

const tennisBracelets = [
  {
    code: "TENNIS BRACELET",
    title: "Round Diamond Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis09.jpg",
  },
  {
    code: "TENNIS BRACELET",
    title: "Classic Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis13.jpg",
  },
  {
    code: "TENNIS BRACELET",
    title: "Fine Diamond Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis16.jpg",
  },
  {
    code: "TENNIS BRACELET",
    title: "Luxury Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis19.jpg",
  },
  {
    code: "TENNIS BRACELET",
    title: "Elegant Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis20.jpg",
  },
  {
    code: "TENNIS BRACELET",
    title: "Premium Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis21.jpg",
  },
];

const rings = [
  {
    code: "RING",
    title: "Classic Diamond Ring",
    details: "Available on request",
    price: "Contact us",
    image: "/images/rings/ring13.jpg",
  },
  {
    code: "RING",
    title: "Everyday Luxury Ring",
    details: "Contact us for more details",
    price: "Contact us",
    image: "/images/rings/ring15.jpg",
  },
  {
    code: "RING",
    title: "Diamond Band Ring",
    details: "Contact us for more details",
    price: "Contact us",
    image: "/images/rings/ring17.png",
  },
  {
    code: "RING",
    title: "Engagement Style Ring",
    details: "Customisation available",
    price: "Contact us",
    image: "/images/rings/ring21.jpg",
  },
  {
    code: "RING",
    title: "Elegant Diamond Ring",
    details: "Available on request",
    price: "Contact us",
    image: "/images/rings/ring23.jpg",
  },
];

function getWhatsAppProductLink(item) {
  const message = `Hi Bliing, I am interested in ${
    item.code ? item.code + " - " : ""
  }${item.title}. Please share more details.`;

  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

function JewelleryImage({ src, alt, fallback = "💎" }) {
  return (
    <div className="jewellery-image">
      <span className="fallback">{fallback}</span>
      {src && (
        <img
          src={src}
          alt={alt}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
    </div>
  );
}

function SectionTitle({ label, title, text, dark = false }) {
  return (
    <div className="section-title">
      <p className={dark ? "eyebrow light" : "eyebrow"}>{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProductCard({ item, fallback }) {
  return (
    <article className="product-card">
      <div className="product-photo">
        <JewelleryImage src={item.image} alt={item.title} fallback={fallback} />
      </div>

      <div className="product-info">
        <p className="product-code">{item.code || "BLIIING"}</p>
        <h3>{item.title}</h3>

        {item.diamonds && (
          <p>
            <strong>Diamonds:</strong> {item.diamonds}
          </p>
        )}

        {item.metal && (
          <p>
            <strong>Metal:</strong> {item.metal}
          </p>
        )}

        {item.weight && (
          <p>
            <strong>Weight:</strong> {item.weight}
          </p>
        )}

        {item.details && <p>{item.details}</p>}

        <div className="price">{item.price}</div>

        <a
          href={getWhatsAppProductLink(item)}
          target="_blank"
          rel="noreferrer"
          className="enquire-button"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

function ProductSection({ id, label, title, text, items, fallback, dark = false }) {
  return (
    <section id={id} className={dark ? "section dark-section" : "section"}>
      <div className="container">
        <SectionTitle label={label} title={title} text={text} dark={dark} />

        <div className="product-grid">
          {items.map((item, index) => (
            <ProductCard
              key={`${item.title}-${index}`}
              item={item}
              fallback={fallback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f7efe3;
          color: #1f1a17;
        }

        a {
          text-decoration: none;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(247, 239, 227, 0.95);
          border-bottom: 1px solid rgba(31, 26, 23, 0.12);
          backdrop-filter: blur(14px);
        }

        .nav-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 8px;
          color: #1f1a17;
          white-space: nowrap;
        }

        .gold {
          color: #b8893a;
        }

        .nav-links {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .nav-links a {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #1f1a17;
        }

        .nav-links a:hover {
          color: #b8893a;
        }

        .nav-button {
          background: #1f1a17;
          color: white;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 14px;
          white-space: nowrap;
        }

        .nav-button:hover {
          background: #b8893a;
        }

        .hero {
          min-height: 100vh;
          padding: 130px 24px 80px;
          background:
            radial-gradient(circle at top right, rgba(184, 137, 58, 0.23), transparent 34%),
            linear-gradient(135deg, #f7efe3, #ead8bc);
          display: flex;
          align-items: center;
        }

        .hero-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 16px;
          color: #9a7130;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 13px;
          font-weight: 800;
        }

        .eyebrow.light {
          color: #d8ae67;
        }

        h1 {
          margin: 0;
          font-size: 76px;
          line-height: 0.98;
          letter-spacing: -2px;
        }

        .hero-text {
          margin-top: 24px;
          max-width: 620px;
          color: rgba(31, 26, 23, 0.72);
          font-size: 19px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primary-button,
        .secondary-button {
          display: inline-block;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 15px;
        }

        .primary-button {
          background: #1f1a17;
          color: white;
        }

        .primary-button:hover {
          background: #b8893a;
        }

        .secondary-button {
          color: #1f1a17;
          border: 1px solid #1f1a17;
        }

        .secondary-button:hover {
          color: #b8893a;
          border-color: #b8893a;
        }

        .hero-card {
          padding: 24px;
          border-radius: 36px;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(184, 137, 58, 0.28);
          box-shadow: 0 30px 80px rgba(31, 26, 23, 0.16);
        }

        .hero-image {
          position: relative;
          height: 500px;
          overflow: hidden;
          border-radius: 28px;
          background: #ead8bc;
        }

        .hero-image .jewellery-image {
          height: 100%;
        }

        .hero-overlay {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          padding: 20px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.84);
          backdrop-filter: blur(12px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
        }

        .hero-overlay h2 {
          margin: 0 0 6px;
          font-size: 32px;
          letter-spacing: 6px;
        }

        .hero-overlay p {
          margin: 0;
          color: rgba(31, 26, 23, 0.7);
          font-size: 14px;
          line-height: 1.5;
        }

        .section {
          padding: 90px 24px;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .section-title {
          max-width: 780px;
          margin-bottom: 44px;
        }

        .section-title h2,
        .contact-title {
          margin: 0;
          font-size: 50px;
          line-height: 1.05;
        }

        .section-title p:not(.eyebrow) {
          margin-top: 18px;
          color: rgba(31, 26, 23, 0.68);
          font-size: 17px;
          line-height: 1.8;
        }

        .dark-section {
          background: #1f1a17;
          color: white;
        }

        .dark-section .section-title p:not(.eyebrow) {
          color: rgba(255, 255, 255, 0.68);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .category-card {
          overflow: hidden;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(31, 26, 23, 0.08);
          box-shadow: 0 16px 38px rgba(31, 26, 23, 0.06);
        }

        .category-photo {
          height: 230px;
          background: #ead8bc;
        }

        .category-photo .jewellery-image {
          height: 100%;
        }

        .category-content {
          padding: 24px;
        }

        .category-content h3 {
          margin: 0 0 12px;
          font-size: 25px;
        }

        .category-content p {
          margin: 0;
          color: rgba(31, 26, 23, 0.68);
          font-size: 15px;
          line-height: 1.65;
        }

        .notice {
          margin-top: 28px;
          padding: 20px 24px;
          border-radius: 22px;
          background: rgba(184, 137, 58, 0.12);
          color: rgba(31, 26, 23, 0.78);
          line-height: 1.7;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .product-card {
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(31, 26, 23, 0.08);
          box-shadow: 0 18px 42px rgba(31, 26, 23, 0.09);
        }

        .dark-section .product-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .product-photo {
          height: 310px;
          background: #ead8bc;
        }

        .product-photo .jewellery-image {
          height: 100%;
        }

        .jewellery-image {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.85), rgba(216,174,103,0.16)),
            linear-gradient(135deg, #f7efe3, #ead8bc);
        }

        .jewellery-image img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .fallback {
          position: absolute;
          z-index: 1;
          font-size: 64px;
        }

        .product-info {
          padding: 26px;
        }

        .product-code {
          margin: 0 0 8px;
          color: #9a7130;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .dark-section .product-code {
          color: #d8ae67;
        }

        .product-info h3 {
          margin: 0 0 16px;
          font-size: 23px;
          line-height: 1.25;
        }

        .product-info p {
          margin: 8px 0;
          color: rgba(31, 26, 23, 0.68);
          font-size: 14px;
          line-height: 1.5;
        }

        .dark-section .product-info p {
          color: rgba(255, 255, 255, 0.68);
        }

        .price {
          margin-top: 18px;
          color: #b8893a;
          font-weight: 800;
          font-size: 18px;
        }

        .dark-section .price {
          color: #d8ae67;
        }

        .enquire-button {
          display: inline-block;
          margin-top: 18px;
          padding: 11px 18px;
          border-radius: 999px;
          background: #1f1a17;
          color: white;
          font-size: 14px;
        }

        .dark-section .enquire-button {
          background: white;
          color: #1f1a17;
        }

        .enquire-button:hover {
          background: #b8893a;
          color: white;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step-card {
          padding: 30px;
          border-radius: 28px;
          background: white;
          box-shadow: 0 16px 38px rgba(31, 26, 23, 0.07);
        }

        .step-number {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #1f1a17;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .step-card h3 {
          margin: 0 0 12px;
          font-size: 23px;
        }

        .step-card p {
          margin: 0;
          color: rgba(31, 26, 23, 0.68);
          line-height: 1.7;
        }

        .contact-section {
          background: linear-gradient(135deg, #ead8bc, #f7efe3);
        }

        .contact-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          padding: 48px;
          border-radius: 36px;
          background: rgba(255,255,255,0.76);
          border: 1px solid rgba(184, 137, 58, 0.25);
          box-shadow: 0 24px 70px rgba(31, 26, 23, 0.12);
        }

        .phone-number {
          margin: 22px 0 10px;
          color: #1f1a17;
          font-size: 44px;
          font-weight: 800;
        }

        .email-text {
          margin: 0 0 24px;
          color: rgba(31, 26, 23, 0.72);
          font-size: 18px;
          word-break: break-word;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .contact-actions a {
          padding: 14px 22px;
          border-radius: 999px;
          font-size: 15px;
        }

        .whatsapp-button {
          background: #1f1a17;
          color: white;
        }

        .whatsapp-button:hover {
          background: #b8893a;
        }

        .email-button {
          border: 1px solid #1f1a17;
          color: #1f1a17;
        }

        .email-button:hover {
          color: #b8893a;
          border-color: #b8893a;
        }

        .contact-note {
          color: rgba(31, 26, 23, 0.68);
          font-size: 17px;
          line-height: 1.8;
        }

        footer {
          padding: 34px 24px;
          background: #1f1a17;
          color: white;
        }

        .footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-logo {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 7px;
        }

        footer p {
          margin: 0;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .nav-links {
            display: none;
          }

          .hero-inner,
          .contact-box {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 58px;
          }

          .category-grid,
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .nav-inner {
            padding: 16px;
          }

          .logo {
            font-size: 24px;
            letter-spacing: 5px;
          }

          h1 {
            font-size: 44px;
          }

          .section-title h2,
          .contact-title {
            font-size: 38px;
          }

          .category-grid,
          .product-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 115px;
          }

          .hero-image {
            height: 360px;
          }

          .product-photo {
            height: 290px;
          }

          .phone-number {
            font-size: 30px;
          }

          .contact-box {
            padding: 30px;
          }

          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo">
            BL<span className="gold">II</span>NG
          </a>

          <div className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#earrings">Earrings</a>
            <a href="#necklaces">Necklaces</a>
            <a href="#bracelets">Bracelets</a>
            <a href="#tennis">Tennis</a>
            <a href="#rings">Rings</a>
            <a href="#order">Order</a>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">New Collection 2026</p>

            <h1>Lab-grown diamond jewellery made to sparkle.</h1>

            <p className="hero-text">
              Welcome to Bliing, where timeless elegance meets modern luxury.
              Discover beautifully crafted lab-grown diamond jewellery designed
              to bring brilliance, sophistication and affordability together.
            </p>

            <div className="hero-actions">
              <a href="#collection" className="primary-button">
                View Collection
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                WhatsApp {WHATSAPP_NUMBER_DISPLAY}
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-image">
              <JewelleryImage
                src="/images/earrings/hero.jpg"
                alt="Bliing jewellery"
                fallback="💎"
              />

              <div className="hero-overlay">
                <h2>
                  BL<span className="gold">II</span>NG
                </h2>
                <p>
                  Rose gold, yellow gold, white gold and platinum options
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="section">
        <div className="container">
          <SectionTitle
            label="Catalogue Range"
            title="Discover the Bliing collection."
            text="Explore earrings, necklaces, bracelets, tennis bracelets and rings crafted for everyday luxury, special occasions and customised creations."
          />

          <div className="category-grid">
            {categories.map((item) => (
              <article className="category-card" key={item.title}>
                <div className="category-photo">
                  <JewelleryImage
                    src={item.image}
                    alt={item.title}
                    fallback="💎"
                  />
                </div>

                <div className="category-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="notice">
            All items can be customised based on your preferred design and metal
            finish. Available options include yellow gold, white gold, rose gold
            and platinum.
          </div>
        </div>
      </section>

      <ProductSection
        id="earrings"
        label="Earrings"
        title="Diamond earrings from the catalogue."
        text="A curated selection of Bliing earrings, including studs, hoops and drop styles."
        items={earrings}
        fallback="💎"
        dark
      />

      <ProductSection
        id="necklaces"
        label="Necklaces"
        title="A graceful touch around your neck."
        text="Diamond necklaces and pendant styles designed to add elegance and brilliance to your look."
        items={necklaces}
        fallback="📿"
      />

      <ProductSection
        id="bracelets"
        label="Bracelets"
        title="Bracelets with a polished finish."
        text="Elegant diamond bracelets available through direct enquiry."
        items={bracelets}
        fallback="✨"
        dark
      />

      <ProductSection
        id="tennis"
        label="Tennis Bracelets"
        title="Timeless tennis bracelet styles."
        text="Round diamond tennis bracelets and fine bracelet options available by enquiry."
        items={tennisBracelets}
        fallback="💫"
      />

      <ProductSection
        id="rings"
        label="Rings"
        title="Rings crafted for elegance."
        text="Beautiful rings from everyday luxury pieces to customised engagement-style designs."
        items={rings}
        fallback="💍"
        dark
      />

      <section id="order" className="section">
        <div className="container">
          <SectionTitle
            label="Simple Steps to Sparkle"
            title="How to place an order."
            text="The process is simple: choose your design, confirm your order, and collect once your jewellery is ready."
          />

          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose your design</h3>
              <p>
                Select your preferred item from the collection and contact us on
                WhatsApp or email.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Confirm your order</h3>
              <p>
                Confirm the design, metal option and details, then complete the
                payment.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Collect your jewellery</h3>
              <p>
                We will notify you once your jewellery is ready for collection.
              </p>
            </div>
          </div>

          <div className="notice">
            Estimated delivery time for catalogue items is approximately 1–2
            weeks. Estimated delivery time for customised orders is
            approximately 3–4 weeks.
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-box">
            <div>
              <p className="eyebrow">Place an Order</p>
              <h2 className="contact-title">Contact us to place any order.</h2>

              <div className="phone-number">{WHATSAPP_NUMBER_DISPLAY}</div>
              <p className="email-text">{EMAIL}</p>

              <div className="contact-actions">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-button"
                >
                  WhatsApp Now
                </a>

                <a href={`mailto:${EMAIL}`} className="email-button">
                  Email Us
                </a>
              </div>
            </div>

            <div>
              <p className="contact-note">
                Have a design in mind? Contact Bliing with the item name,
                preferred metal colour and any customisation request. We will
                help confirm availability, pricing and estimated delivery time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-logo">
            BL<span className="gold">II</span>NG
          </div>

          <p>© {new Date().getFullYear()} Bliing. New Collection 2026.</p>
        </div>
      </footer>
    </>
  );
}

export default App;