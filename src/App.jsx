import React from "react";

const WHATSAPP_NUMBER_DISPLAY = "+61 403 796 776";
const WHATSAPP_LINK = "https://wa.me/61403796776";
const EMAIL = "bliingjewellery24@gmail.com";

const featuredCategories = [
  {
    title: "Earrings",
    icon: "💎",
    text: "From timeless studs to elegant hoops and graceful drops, designed to add sparkle to every moment.",
  },
  {
    title: "Rings",
    icon: "💍",
    text: "Beautiful rings crafted to wrap your fingers in elegance, from everyday luxury to engagement pieces.",
  },
  {
    title: "Bracelets",
    icon: "✨",
    text: "Elegant bracelets and tennis bracelets crafted to shine with sophistication.",
  },
  {
    title: "Necklaces",
    icon: "📿",
    text: "A delicate touch around your neck to elevate your look with grace and brilliance.",
  },
];

const earrings = [
  {
    code: "ERHU01",
    title: "Diamond Hoop Earrings",
    diamonds: "0.3 ct",
    metal: "18k Yellow Gold",
    weight: "",
    grade: "",
    price: "AUD 1099",
  },
  {
    code: "ERD01",
    title: "Diamond Drop Earrings",
    diamonds: "0.6 ct",
    metal: "18k Yellow Gold",
    weight: "",
    grade: "",
    price: "AUD 1199",
  },
  {
    code: "ERHU02",
    title: "White Gold Diamond Earrings",
    diamonds: "0.836 ct",
    metal: "18k White Gold",
    weight: "1.81 gm",
    grade: "",
    price: "AUD 1649",
  },
  {
    code: "ERHO01",
    title: "Diamond Hoop Earrings",
    diamonds: "1 ct",
    metal: "18k Yellow Gold",
    weight: "",
    grade: "",
    price: "AUD 1799",
  },
  {
    code: "ERD02",
    title: "Yellow Gold Diamond Earrings",
    diamonds: "1.71 ct",
    metal: "18k Yellow Gold",
    weight: "1.84 gm",
    grade: "",
    price: "AUD 1749",
  },
  {
    code: "ERHU03",
    title: "White Gold Diamond Earrings",
    diamonds: "0.836 ct",
    metal: "18k White Gold",
    weight: "1.81 gm",
    grade: "",
    price: "AUD 1649",
  },
  {
    code: "ERSPB01",
    title: "Pear Diamond Studs",
    diamonds: "2.010 ct / 2",
    metal: "18k White Gold",
    weight: "1.15 gm",
    grade: "E / VVS2 / 2EX",
    price: "AUD 1899",
  },
  {
    code: "ERSSB02",
    title: "Square Diamond Studs",
    diamonds: "2.190 ct / 2",
    metal: "18k White Gold",
    weight: "1.58 gm",
    grade: "E / VVS2 / 2EX",
    price: "AUD 2199",
  },
  {
    code: "ERSOB03",
    title: "Oval Diamond Studs",
    diamonds: "2.130 ct / 2",
    metal: "18k White Gold",
    weight: "1.41 gm",
    grade: "D / VS1 / 2EX",
    price: "AUD 2349",
  },
  {
    code: "ERSHB04",
    title: "Heart Diamond Studs",
    diamonds: "Main 1.014 ct / 2, Small 0.262 ct",
    metal: "18k White Gold",
    weight: "1.75 gm",
    grade: "",
    price: "AUD 2099",
  },
  {
    code: "ERD02",
    title: "White Gold Diamond Earrings",
    diamonds: "1.392 ct",
    metal: "18k White Gold",
    weight: "1.89 gm",
    grade: "",
    price: "AUD 2069",
  },
  {
    code: "ERD03",
    title: "Yellow Gold Diamond Earrings",
    diamonds: "1.392 ct",
    metal: "18k Yellow Gold",
    weight: "1.45 gm",
    grade: "",
    price: "AUD 2159",
  },
  {
    code: "ERSRB05",
    title: "Diamond Stud Earrings",
    diamonds: "2.190 ct / 2",
    metal: "18k White Gold",
    weight: "1.58 gm",
    grade: "E / VVS2 / 2EX",
    price: "AUD 2199",
  },
  {
    code: "ERHU04",
    title: "Diamond Hoop Earrings",
    diamonds: "Main 1.049 ct / 2, Small 0.860 ct / 4",
    metal: "18k White Gold",
    weight: "2.95 gm",
    grade: "",
    price: "AUD 2499",
  },
  {
    code: "ERSRB06",
    title: "Premium Diamond Stud Earrings",
    diamonds: "2.140 ct / 2",
    metal: "18k White Gold",
    weight: "1.71 gm",
    grade: "D / VVS2 / ID / 2EX",
    price: "AUD 2879",
  },
  {
    code: "ERD05",
    title: "Premium Diamond Earrings",
    diamonds: "2.478 ct",
    metal: "18k White Gold",
    weight: "3.39 gm",
    grade: "",
    price: "AUD 3599",
  },
  {
    code: "ERHOR02",
    title: "Round Diamond Earrings",
    diamonds: "1.43 ct / 14",
    metal: "18k Yellow Gold",
    weight: "3.26 gm",
    grade: "",
    price: "AUD 2679",
  },
  {
    code: "ERHOO03",
    title: "Oval Diamond Earrings",
    diamonds: "1.6 ct / 18",
    metal: "18k Yellow Gold",
    weight: "2.95 gm",
    grade: "",
    price: "AUD 2899",
  },
  {
    code: "ERHOH04",
    title: "Heart Diamond Earrings",
    diamonds: "1.498 ct / 16",
    metal: "18k Yellow Gold",
    weight: "3.38 gm",
    grade: "",
    price: "AUD 3299",
  },
  {
    code: "ERD04",
    title: "Platinum Diamond Earrings",
    diamonds: "2.548 ct",
    metal: "Platinum",
    weight: "3.91 gm",
    grade: "",
    price: "AUD 3599",
  },
];

const studs = [
  {
    title: "0.4 ct Diamond Studs",
    details: "Available in Yellow Gold, White Gold or Rose Gold",
    price: "AUD 519",
  },
  {
    title: "0.6 ct Diamond Studs",
    details: "Available in Yellow Gold, White Gold or Rose Gold",
    price: "AUD 649",
  },
  {
    title: "0.6 ct Diamond Studs",
    details: "Available in Yellow Gold, White Gold or Rose Gold",
    price: "AUD 679",
  },
  {
    title: "0.6 ct Diamond Studs",
    details: "Available in Yellow Gold, White Gold or Rose Gold",
    price: "AUD 789",
  },
  {
    title: "0.6 ct Diamond Studs",
    details: "Available in Yellow Gold, White Gold or Rose Gold",
    price: "AUD 819",
  },
  {
    title: "Approx. 2 ct Stud Options",
    details: "All studs in this range are approximately 2 ct",
    price: "From AUD 1689",
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
  },
  {
    code: "NECKLACE",
    title: "1 ct Diamond Necklace",
    diamonds: "1 ct",
    metal: "18k Yellow Gold",
    weight: "3.15 g",
    price: "AUD 3080",
  },
  {
    code: "NECKLACE",
    title: "Custom Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    weight: "Available on request",
    price: "Contact us",
  },
  {
    code: "NECKLACE",
    title: "Pendant Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    weight: "Available on request",
    price: "Contact us",
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
  },
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "1.250 ct",
    metal: "18k Yellow Gold",
    weight: "3.31 gm",
    price: "Contact us",
  },
  {
    code: "BRACELETS",
    title: "Different Shape Bracelets",
    diamonds: "Available in multiple shapes",
    metal: "Contact us for details",
    weight: "Contact us",
    price: "Contact us",
  },
  {
    code: "TENNIS BRACELETS",
    title: "Round Diamond Tennis Bracelets",
    diamonds: "Available in multiple options",
    metal: "Contact us for details",
    weight: "Contact us",
    price: "Contact us",
  },
];

const rings = [
  {
    title: "Classic Diamond Ring",
    details: "Available on request",
    price: "Contact us",
  },
  {
    title: "Everyday Luxury Ring",
    details: "Contact us for more details",
    price: "Contact us",
  },
  {
    title: "Diamond Band Ring",
    details: "Contact us for more details",
    price: "Contact us",
  },
  {
    title: "Engagement Style Ring",
    details: "Customisation available",
    price: "Contact us",
  },
];

function getWhatsAppProductLink(item) {
  const message = `Hi Bliing, I am interested in ${item.code ? item.code + " - " : ""}${item.title}. Please share more details.`;
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ item, icon }) {
  return (
    <div className="product-card">
      <div className="product-image">{icon}</div>

      <div className="product-content">
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

        {item.grade && (
          <p>
            <strong>Grade:</strong> {item.grade}
          </p>
        )}

        {item.details && <p>{item.details}</p>}

        <div className="price">{item.price || "Contact us"}</div>

        <a
          href={getWhatsAppProductLink(item)}
          target="_blank"
          rel="noreferrer"
          className="enquire-link"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

function SectionTitle({ small, title, text }) {
  return (
    <div className="section-title">
      <p className="small-title">{small}</p>
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
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
          z-index: 50;
          background: rgba(247, 239, 227, 0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(31, 26, 23, 0.12);
        }

        .nav-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          color: #1f1a17;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 8px;
        }

        .gold {
          color: #b8893a;
        }

        .nav-links {
          display: flex;
          gap: 26px;
        }

        .nav-links a {
          color: #1f1a17;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .nav-links a:hover {
          color: #b8893a;
        }

        .nav-contact {
          background: #1f1a17;
          color: white;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 14px;
          white-space: nowrap;
        }

        .nav-contact:hover {
          background: #b8893a;
        }

        .hero {
          min-height: 100vh;
          padding: 130px 24px 80px;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at top right, rgba(184, 137, 58, 0.24), transparent 32%),
            linear-gradient(135deg, #f7efe3, #ead8bc);
        }

        .hero-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        .small-title {
          margin: 0 0 16px;
          color: #9a7130;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 76px;
          line-height: 0.98;
          letter-spacing: -2px;
        }

        .hero-text {
          max-width: 620px;
          margin-top: 24px;
          color: rgba(31, 26, 23, 0.72);
          font-size: 19px;
          line-height: 1.8;
        }

        .hero-buttons {
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
          border: 1px solid #1f1a17;
          color: #1f1a17;
        }

        .secondary-button:hover {
          border-color: #b8893a;
          color: #b8893a;
        }

        .hero-card {
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(184, 137, 58, 0.28);
          border-radius: 36px;
          padding: 28px;
          box-shadow: 0 30px 80px rgba(31, 26, 23, 0.16);
        }

        .hero-card-inner {
          min-height: 470px;
          border-radius: 28px;
          background:
            radial-gradient(circle at center, rgba(255, 255, 255, 0.86), rgba(232, 210, 170, 0.58)),
            linear-gradient(135deg, #f8ead5, #d6b272);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 34px;
        }

        .hero-icon {
          font-size: 96px;
        }

        .hero-card h2 {
          margin: 16px 0 8px;
          font-size: 44px;
          letter-spacing: 7px;
        }

        .hero-card p {
          margin: 0;
          color: rgba(31, 26, 23, 0.68);
          line-height: 1.6;
        }

        .section {
          padding: 90px 24px;
        }

        .container {
          max-width: 1220px;
          margin: 0 auto;
        }

        .section-title {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .section-title h2,
        .section-title-main {
          margin: 0;
          font-size: 50px;
          line-height: 1.05;
        }

        .section-text {
          margin-top: 18px;
          color: rgba(31, 26, 23, 0.68);
          font-size: 17px;
          line-height: 1.8;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .category-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(31, 26, 23, 0.08);
          padding: 28px;
          border-radius: 28px;
          box-shadow: 0 16px 38px rgba(31, 26, 23, 0.06);
        }

        .category-icon {
          width: 78px;
          height: 78px;
          border-radius: 22px;
          background: rgba(184, 137, 58, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          margin-bottom: 22px;
        }

        .category-card h3 {
          margin: 0 0 12px;
          font-size: 25px;
        }

        .category-card p {
          margin: 0;
          color: rgba(31, 26, 23, 0.68);
          line-height: 1.65;
          font-size: 15px;
        }

        .dark {
          background: #1f1a17;
          color: white;
        }

        .dark .section-text {
          color: rgba(255,255,255,0.68);
        }

        .dark .small-title {
          color: #d8ae67;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .product-card {
          background: rgba(255,255,255,0.95);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 38px rgba(31, 26, 23, 0.08);
          border: 1px solid rgba(31, 26, 23, 0.08);
        }

        .dark .product-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .product-image {
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 70px;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.92), rgba(216,174,103,0.28)),
            linear-gradient(135deg, #ead8bc, #f7efe3);
        }

        .dark .product-image {
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.20), rgba(216,174,103,0.12)),
            linear-gradient(135deg, rgba(255,255,255,0.09), rgba(216,174,103,0.18));
        }

        .product-content {
          padding: 24px;
        }

        .product-code {
          margin: 0 0 8px;
          color: #9a7130;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .dark .product-code {
          color: #d8ae67;
        }

        .product-content h3 {
          margin: 0 0 16px;
          font-size: 21px;
          line-height: 1.25;
        }

        .product-content p {
          margin: 8px 0;
          color: rgba(31, 26, 23, 0.68);
          line-height: 1.5;
          font-size: 14px;
        }

        .dark .product-content p {
          color: rgba(255,255,255,0.68);
        }

        .price {
          margin-top: 16px;
          color: #b8893a;
          font-size: 18px;
          font-weight: 700;
        }

        .dark .price {
          color: #d8ae67;
        }

        .enquire-link {
          display: inline-block;
          margin-top: 18px;
          background: #1f1a17;
          color: white;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
        }

        .dark .enquire-link {
          background: white;
          color: #1f1a17;
        }

        .enquire-link:hover {
          background: #b8893a;
          color: white;
        }

        .notice {
          margin-top: 28px;
          padding: 20px 24px;
          border-radius: 22px;
          background: rgba(184, 137, 58, 0.12);
          color: rgba(31, 26, 23, 0.78);
          line-height: 1.7;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step-card {
          background: white;
          padding: 30px;
          border-radius: 28px;
          box-shadow: 0 16px 38px rgba(31, 26, 23, 0.07);
        }

        .step-number {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #1f1a17;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
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

        .contact {
          background: linear-gradient(135deg, #ead8bc, #f7efe3);
        }

        .contact-box {
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(184, 137, 58, 0.25);
          border-radius: 36px;
          padding: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          box-shadow: 0 24px 70px rgba(31, 26, 23, 0.12);
        }

        .phone-number {
          font-size: 44px;
          font-weight: 700;
          color: #1f1a17;
          margin: 20px 0 10px;
        }

        .email-text {
          margin: 0 0 24px;
          color: rgba(31, 26, 23, 0.72);
          font-size: 18px;
          word-break: break-word;
        }

        .contact-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
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
          border-color: #b8893a;
          color: #b8893a;
        }

        .contact-note {
          color: rgba(31, 26, 23, 0.68);
          line-height: 1.8;
          font-size: 17px;
        }

        footer {
          background: #1f1a17;
          color: white;
          padding: 34px 24px;
        }

        .footer-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-logo {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 7px;
        }

        footer p {
          margin: 0;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
        }

        @media (max-width: 1000px) {
          .hero-inner,
          .contact-box {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 58px;
          }

          .intro-grid,
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .nav-links {
            display: none;
          }

          .logo {
            font-size: 24px;
            letter-spacing: 5px;
          }

          .nav-inner {
            padding: 16px;
          }

          h1 {
            font-size: 44px;
          }

          .section-title h2,
          .section-title-main {
            font-size: 38px;
          }

          .intro-grid,
          .product-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 115px;
          }

          .hero-card-inner {
            min-height: 330px;
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
            <a href="#order">How to Order</a>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="nav-contact"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div>
            <p className="small-title">New Collection 2026</p>

            <h1>Lab-grown diamond jewellery made to sparkle.</h1>

            <p className="hero-text">
              Welcome to Bliing, where timeless elegance meets modern luxury.
              Discover beautifully crafted lab-grown diamond jewellery designed
              to bring brilliance, sophistication and affordability together.
            </p>

            <div className="hero-buttons">
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
            <div className="hero-card-inner">
              <div>
                <div className="hero-icon">💎</div>
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
            small="Catalogue Range"
            title="Discover the Bliing collection."
            text="Explore earrings, rings, bracelets and necklaces crafted for everyday luxury, special occasions and customised creations."
          />

          <div className="intro-grid">
            {featuredCategories.map((item) => (
              <div className="category-card" key={item.title}>
                <div className="category-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="notice">
            All items can be customised based on your preferred design and metal
            finish. Available options include yellow gold, white gold, rose gold
            and platinum.
          </div>
        </div>
      </section>

      <section id="earrings" className="section dark">
        <div className="container">
          <SectionTitle
            small="Earrings"
            title="Diamond earrings from the catalogue."
            text="A curated range of hoops, drops, studs and statement earrings from Bliing’s New Collection 2026."
          />

          <div className="product-grid">
            {earrings.map((item, index) => (
              <ProductCard key={`${item.code}-${index}`} item={item} icon="💎" />
            ))}
          </div>
        </div>
      </section>

      <section id="studs" className="section">
        <div className="container">
          <SectionTitle
            small="Studs"
            title="Diamond stud options."
            text="Selected stud options from the catalogue, including 0.4 ct, 0.6 ct and approximately 2 ct ranges."
          />

          <div className="product-grid">
            {studs.map((item, index) => (
              <ProductCard key={`${item.title}-${index}`} item={item} icon="✨" />
            ))}
          </div>
        </div>
      </section>

      <section id="necklaces" className="section dark">
        <div className="container">
          <SectionTitle
            small="Necklaces"
            title="A graceful touch around your neck."
            text="Diamond necklaces and pendant styles designed to add elegance, brilliance and softness to your look."
          />

          <div className="product-grid">
            {necklaces.map((item, index) => (
              <ProductCard key={`${item.title}-${index}`} item={item} icon="📿" />
            ))}
          </div>
        </div>
      </section>

      <section id="bracelets" className="section">
        <div className="container">
          <SectionTitle
            small="Bracelets"
            title="Bracelets and tennis bracelets."
            text="Elegant diamond bracelets and tennis bracelet options available through direct enquiry."
          />

          <div className="product-grid">
            {bracelets.map((item, index) => (
              <ProductCard key={`${item.title}-${index}`} item={item} icon="💫" />
            ))}
          </div>
        </div>
      </section>

      <section id="rings" className="section dark">
        <div className="container">
          <SectionTitle
            small="Rings"
            title="Rings crafted for elegance."
            text="Beautiful rings from everyday luxury pieces to customised engagement-style designs. Contact Bliing for ring details and customisation."
          />

          <div className="product-grid">
            {rings.map((item, index) => (
              <ProductCard key={`${item.title}-${index}`} item={item} icon="💍" />
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="section">
        <div className="container">
          <SectionTitle
            small="Simple Steps to Sparkle"
            title="How to place an order."
            text="The process is simple: choose your design, confirm your order, and collect once your jewellery is ready."
          />

          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose your design</h3>
              <p>
                Select your preferred item from the catalogue and contact us on
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

      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-box">
            <div>
              <p className="small-title">Place an Order</p>

              <h2 className="section-title-main">
                Contact us to place any order.
              </h2>

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
                Have a design in mind? Contact Bliing with the item code,
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