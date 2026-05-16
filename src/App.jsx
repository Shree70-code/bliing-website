import React from "react";

const WHATSAPP_NUMBER_DISPLAY = "+61 403 796 776";
const WHATSAPP_LINK = "https://wa.me/61403796776";
const EMAIL = "bliingjewellery24@gmail.com";

const categories = [
  {
    title: "Earrings",
    anchor: "#earrings",
    image: "/images/earrings/earrings02.jpg",
    text: "Light-catching studs, hoops and drop earrings made for everyday polish and evening sparkle.",
  },
  {
    title: "Necklaces",
    anchor: "#necklaces",
    image: "/images/necklaces/necklace06.jpg",
    text: "Delicate diamond necklaces and pendants that frame every neckline with refined brilliance.",
  },
  {
    title: "Bracelets",
    anchor: "#bracelets",
    image: "/images/bracelets/bracelet03.jpg",
    text: "Elegant wristwear crafted to feel effortless, sophisticated and gift-ready.",
  },
  {
    title: "Rings",
    anchor: "#rings",
    image: "/images/rings/ring13.jpg",
    text: "Signature rings for everyday luxury, meaningful gifting and bespoke moments.",
  },
];

const trustPoints = [
  "Lab-grown diamonds",
  "18k gold options",
  "Custom designs available",
  "Direct WhatsApp consultation",
];

const finishOptions = ["Yellow gold", "White gold", "Rose gold", "Platinum"];

const earrings = [
  {
    code: "ERHU01",
    title: "Diamond Hoop Earrings",
    diamonds: "0.3 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1099",
    image: "/images/earrings/hero.jpg",
    tag: "Everyday sparkle",
  },
  {
    code: "ERD01",
    title: "Diamond Drop Earrings",
    diamonds: "0.6 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1199",
    image: "/images/earrings/earrings02.jpg",
    tag: "Elegant drops",
  },
  {
    code: "ERHU02",
    title: "Diamond Hoop Earrings",
    diamonds: "0.836 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1649",
    image: "/images/earrings/earrings03.jpg",
    tag: "Statement hoops",
  },
  {
    code: "ERHO01",
    title: "Diamond Stud Earrings",
    diamonds: "1 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1799",
    image: "/images/earrings/earrings04.jpg",
    tag: "Classic studs",
  },
  {
    code: "ERD02",
    title: "Diamond Hoop Earrings",
    diamonds: "1.71 ct",
    metal: "18k Yellow Gold",
    price: "AUD 1749",
    image: "/images/earrings/earrings05.jpg",
    tag: "High brilliance",
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
    tag: "Delicate shine",
  },
  {
    code: "NECKLACE",
    title: "1 ct Diamond Necklace",
    diamonds: "1 ct",
    metal: "18k Yellow Gold",
    weight: "3.15 g",
    price: "AUD 3080",
    image: "/images/necklaces/necklace07.jpg",
    tag: "Signature piece",
  },
  {
    code: "NECKLACE",
    title: "Custom Diamond Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/necklaces/necklace08.jpg",
    tag: "Made for you",
  },
  {
    code: "NECKLACE",
    title: "Pendant Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/necklaces/necklace09.jpg",
    tag: "Gift favourite",
  },
  {
    code: "NECKLACE",
    title: "Elegant Chain Necklace",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/necklaces/necklace10.jpg",
    tag: "Refined layering",
  },
];

const bracelets = [
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "0.635 ct",
    metal: "18k Yellow Gold",
    weight: "2.39 g",
    price: "AUD 2200",
    image: "/images/bracelets/bracelet03.jpg",
    tag: "Polished finish",
  },
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "1.250 ct",
    metal: "18k Yellow Gold",
    weight: "3.31 g",
    price: "Contact us",
    image: "/images/bracelets/bracelet06.jpg",
    tag: "Premium sparkle",
  },
  {
    code: "BRACELET",
    title: "Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet24.jpg",
    tag: "Minimal luxury",
  },
  {
    code: "BRACELET",
    title: "Elegant Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet25.jpg",
    tag: "Event ready",
  },
  {
    code: "BRACELET",
    title: "Fine Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet26.jpg",
    tag: "Fine detail",
  },
  {
    code: "BRACELET",
    title: "Luxury Diamond Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/bracelets/bracelet27.jpg",
    tag: "Luxury styling",
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
    tag: "Round diamonds",
  },
  {
    code: "TENNIS BRACELET",
    title: "Classic Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis13.jpg",
    tag: "Classic line",
  },
  {
    code: "TENNIS BRACELET",
    title: "Fine Diamond Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis16.jpg",
    tag: "Fine setting",
  },
  {
    code: "TENNIS BRACELET",
    title: "Luxury Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis19.jpg",
    tag: "Luxury finish",
  },
  {
    code: "TENNIS BRACELET",
    title: "Elegant Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis20.jpg",
    tag: "Elegant sparkle",
  },
  {
    code: "TENNIS BRACELET",
    title: "Premium Tennis Bracelet",
    diamonds: "Contact us for details",
    metal: "Available on request",
    price: "Contact us",
    image: "/images/tennis-bracelets/tennis21.jpg",
    tag: "Premium style",
  },
];

const rings = [
  {
    code: "RING",
    title: "Classic Diamond Ring",
    details: "Available on request",
    price: "Contact us",
    image: "/images/rings/ring13.jpg",
    tag: "Classic beauty",
  },
  {
    code: "RING",
    title: "Everyday Luxury Ring",
    details: "Contact us for more details",
    price: "Contact us",
    image: "/images/rings/ring15.jpg",
    tag: "Daily elegance",
  },
  {
    code: "RING",
    title: "Diamond Band Ring",
    details: "Contact us for more details",
    price: "Contact us",
    image: "/images/rings/ring17.png",
    tag: "Stackable shine",
  },
  {
    code: "RING",
    title: "Engagement Style Ring",
    details: "Customisation available",
    price: "Contact us",
    image: "/images/rings/ring21.jpg",
    tag: "Bespoke moment",
  },
  {
    code: "RING",
    title: "Elegant Diamond Ring",
    details: "Available on request",
    price: "Contact us",
    image: "/images/rings/ring23.jpg",
    tag: "Elegant profile",
  },
];

const steps = [
  {
    title: "Choose your piece",
    text: "Browse the collection, note the product code, or send us inspiration for a custom design.",
  },
  {
    title: "Confirm every detail",
    text: "We confirm diamond details, metal colour, sizing, timing and pricing before you order.",
  },
  {
    title: "Receive your sparkle",
    text: "Your jewellery is prepared with care and we notify you once it is ready for collection.",
  },
];

function getWhatsAppProductLink(item) {
  const message = `Hi Bliing, I am interested in ${
    item.code ? `${item.code} - ` : ""
  }${item.title}. Please share more details.`;

  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

function JewelleryImage({ src, alt, fallback = "💎" }) {
  return (
    <div className="jewellery-image" aria-label={alt}>
      <span className="fallback" aria-hidden="true">
        {fallback}
      </span>

      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
    </div>
  );
}

function SectionTitle({ label, title, text, center = false }) {
  return (
    <div className={center ? "section-title center" : "section-title"}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProductCard({ item, fallback }) {
  return (
    <article className="product-card">
      <div className="product-photo">
        {item.tag && <span className="product-tag">{item.tag}</span>}

        <JewelleryImage src={item.image} alt={item.title} fallback={fallback} />
      </div>

      <div className="product-info">
        <p className="product-code">{item.code || "BLIIING"}</p>

        <h3>{item.title}</h3>

        <dl className="spec-list">
          {item.diamonds && (
            <>
              <dt>Diamonds</dt>
              <dd>{item.diamonds}</dd>
            </>
          )}

          {item.metal && (
            <>
              <dt>Metal</dt>
              <dd>{item.metal}</dd>
            </>
          )}

          {item.weight && (
            <>
              <dt>Weight</dt>
              <dd>{item.weight}</dd>
            </>
          )}
        </dl>

        {item.details && <p className="details-text">{item.details}</p>}

        <div className="card-footer">
          <div>
            <span className="price-label">
              {item.price === "Contact us" ? "Price" : "Starting from"}
            </span>
            <div className="price">{item.price}</div>
          </div>

          <a
            href={getWhatsAppProductLink(item)}
            target="_blank"
            rel="noreferrer"
            className="enquire-button"
            aria-label={`Enquire about ${item.title} on WhatsApp`}
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductSection({
  id,
  label,
  title,
  text,
  items,
  fallback,
  dark = false,
}) {
  return (
    <section id={id} className={dark ? "section dark-section" : "section"}>
      <div className="container">
        <SectionTitle label={label} title={title} text={text} />

        <div className="product-grid">
          {items.map((item, index) => (
            <ProductCard
              key={`${item.title}-${item.image}-${index}`}
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
        :root {
          --ink: #17120f;
          --espresso: #251914;
          --cocoa: #4a352b;
          --cream: #fbf4e9;
          --champagne: #f4e3c7;
          --sand: #ead0a4;
          --gold: #b9862f;
          --gold-light: #e3bd73;
          --white: #ffffff;
          --muted: rgba(23, 18, 15, 0.68);
          --shadow: 0 28px 80px rgba(48, 34, 24, 0.16);
          --radius-lg: 26px;
          --radius-pill: 999px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: var(--cream);
          color: var(--ink);
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          background:
            radial-gradient(circle at 12% 10%, rgba(227, 189, 115, 0.22), transparent 28%),
            radial-gradient(circle at 88% 8%, rgba(185, 134, 47, 0.18), transparent 24%),
            linear-gradient(135deg, #fbf4e9 0%, #f6e5ca 48%, #fbf4e9 100%);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(251, 244, 233, 0.86);
          border-bottom: 1px solid rgba(74, 53, 43, 0.12);
          backdrop-filter: blur(18px);
        }

        .nav-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 22px;
        }

        .logo,
        .footer-logo,
        .hero-overlay h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 800;
          letter-spacing: 0.22em;
        }

        .logo {
          font-size: 28px;
          color: var(--ink);
          white-space: nowrap;
        }

        .gold {
          color: var(--gold);
        }

        .nav-links {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .nav-links a {
          position: relative;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          color: rgba(23, 18, 15, 0.76);
          padding: 8px 0;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 180ms ease;
        }

        .nav-links a:hover,
        .nav-links a:focus-visible {
          color: var(--gold);
        }

        .nav-links a:hover::after,
        .nav-links a:focus-visible::after {
          width: 100%;
        }

        .nav-button,
        .primary-button,
        .whatsapp-button,
        .enquire-button {
          background: var(--ink);
          color: var(--white);
          box-shadow: 0 14px 28px rgba(23, 18, 15, 0.16);
        }

        .nav-button,
        .primary-button,
        .secondary-button,
        .whatsapp-button,
        .email-button,
        .enquire-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-pill);
          font-weight: 800;
          transition:
            transform 180ms ease,
            background 180ms ease,
            color 180ms ease,
            border-color 180ms ease;
        }

        .nav-button {
          padding: 11px 18px;
          font-size: 14px;
          white-space: nowrap;
        }

        .nav-button:hover,
        .primary-button:hover,
        .whatsapp-button:hover,
        .enquire-button:hover {
          background: var(--gold);
          transform: translateY(-2px);
        }

        .hero {
          min-height: 100vh;
          padding: 140px 24px 86px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-inner {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
          gap: 58px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 16px;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 12px;
          font-weight: 900;
        }

        h1,
        .section-title h2,
        .contact-title {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 800;
        }

        h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(3.05rem, 7vw, 6.35rem);
          line-height: 0.9;
          letter-spacing: -0.055em;
        }

        .hero-highlight {
          display: block;
          color: var(--gold);
        }

        .hero-text {
          margin: 26px 0 0;
          max-width: 650px;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.85;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primary-button,
        .secondary-button {
          min-height: 52px;
          padding: 0 28px;
          font-size: 15px;
        }

        .secondary-button {
          color: var(--ink);
          border: 1px solid rgba(23, 18, 15, 0.28);
          background: rgba(255, 255, 255, 0.42);
        }

        .secondary-button:hover {
          color: var(--gold);
          border-color: var(--gold);
          transform: translateY(-2px);
        }

        .trust-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
          padding: 0;
          list-style: none;
        }

        .trust-strip li {
          padding: 10px 14px;
          border-radius: var(--radius-pill);
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(185, 134, 47, 0.2);
          color: rgba(23, 18, 15, 0.76);
          font-size: 13px;
          font-weight: 800;
        }

        .hero-card {
          position: relative;
          padding: 18px;
          border-radius: 42px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.82),
            rgba(255, 255, 255, 0.34)
          );
          border: 1px solid rgba(185, 134, 47, 0.25);
          box-shadow: var(--shadow);
        }

        .hero-image {
          position: relative;
          height: 560px;
          overflow: hidden;
          border-radius: 32px;
          background: var(--champagne);
          isolation: isolate;
        }

        .hero-image::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(
            180deg,
            transparent 30%,
            rgba(23, 18, 15, 0.52) 100%
          );
          pointer-events: none;
        }

        .hero-image .jewellery-image {
          height: 100%;
        }

        .hero-overlay {
          position: absolute;
          z-index: 4;
          left: 22px;
          right: 22px;
          bottom: 22px;
          padding: 22px;
          border-radius: 26px;
          color: white;
          background: rgba(23, 18, 15, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 44px rgba(0, 0, 0, 0.22);
        }

        .hero-overlay h2 {
          margin: 0 0 8px;
          font-size: 34px;
        }

        .hero-overlay p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 14px;
          line-height: 1.6;
        }

        .floating-card {
          position: absolute;
          z-index: 5;
          top: 26px;
          left: 26px;
          max-width: 220px;
          padding: 16px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.88);
          color: var(--ink);
          box-shadow: 0 18px 44px rgba(23, 18, 15, 0.18);
        }

        .floating-card strong {
          display: block;
          font-size: 24px;
          margin-bottom: 4px;
        }

        .floating-card span {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .section {
          padding: 96px 24px;
          scroll-margin-top: 84px;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .section-title {
          max-width: 790px;
          margin-bottom: 44px;
        }

        .section-title.center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-title h2,
        .contact-title {
          margin: 0;
          font-size: clamp(2.35rem, 4.5vw, 4.25rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .section-title p:not(.eyebrow) {
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.85;
        }

        .dark-section {
          position: relative;
          background:
            radial-gradient(circle at top left, rgba(227, 189, 115, 0.16), transparent 30%),
            linear-gradient(135deg, #17120f, #2f211a);
          color: var(--white);
        }

        .dark-section .section-title p:not(.eyebrow),
        .dark-section .product-info p,
        .dark-section .details-text,
        .dark-section .spec-list dd {
          color: rgba(255, 255, 255, 0.68);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .category-card {
          overflow: hidden;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(74, 53, 43, 0.08);
          box-shadow: 0 18px 42px rgba(48, 34, 24, 0.08);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow);
        }

        .category-photo {
          height: 238px;
          background: var(--champagne);
        }

        .category-photo .jewellery-image {
          height: 100%;
        }

        .category-content {
          padding: 24px;
        }

        .category-content h3 {
          margin: 0 0 12px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          letter-spacing: -0.03em;
        }

        .category-content p {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .category-link {
          color: var(--gold);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .notice,
        .promise-panel {
          border: 1px solid rgba(185, 134, 47, 0.24);
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 18px 42px rgba(48, 34, 24, 0.07);
        }

        .notice {
          margin-top: 28px;
          padding: 22px 24px;
          border-radius: 24px;
          color: rgba(23, 18, 15, 0.78);
          line-height: 1.75;
        }

        .finish-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .finish-list span {
          padding: 9px 13px;
          border-radius: var(--radius-pill);
          background: rgba(185, 134, 47, 0.12);
          color: var(--cocoa);
          font-size: 13px;
          font-weight: 800;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .product-card {
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(74, 53, 43, 0.08);
          box-shadow: 0 20px 48px rgba(48, 34, 24, 0.1);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow);
        }

        .dark-section .product-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.22);
        }

        .product-photo {
          position: relative;
          height: 322px;
          background: var(--champagne);
        }

        .product-photo .jewellery-image {
          height: 100%;
        }

        .product-tag {
          position: absolute;
          z-index: 5;
          top: 16px;
          left: 16px;
          padding: 9px 12px;
          border-radius: var(--radius-pill);
          color: var(--ink);
          background: rgba(255, 255, 255, 0.84);
          box-shadow: 0 12px 28px rgba(23, 18, 15, 0.12);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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
            radial-gradient(circle at 50% 36%, rgba(255, 255, 255, 0.95), rgba(227, 189, 115, 0.2) 42%, rgba(74, 53, 43, 0.08)),
            linear-gradient(135deg, #fbf4e9, #ead0a4);
        }

        .jewellery-image::after {
          content: "";
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(255, 255, 255, 0.58);
          border-radius: 22px;
          z-index: 1;
          pointer-events: none;
        }

        .jewellery-image img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 260ms ease;
        }

        .product-card:hover .jewellery-image img,
        .category-card:hover .jewellery-image img {
          transform: scale(1.04);
        }

        .fallback {
          position: absolute;
          z-index: 1;
          font-size: 70px;
          filter: drop-shadow(0 16px 24px rgba(74, 53, 43, 0.16));
        }

        .product-info {
          padding: 26px;
        }

        .product-code {
          margin: 0 0 8px;
          color: var(--gold);
          font-size: 12px;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          font-weight: 900;
        }

        .product-info h3 {
          margin: 0 0 18px;
          min-height: 58px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          line-height: 1.15;
          letter-spacing: -0.025em;
        }

        .spec-list {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 9px 14px;
          margin: 0;
          font-size: 14px;
        }

        .spec-list dt {
          color: rgba(23, 18, 15, 0.54);
          font-weight: 900;
        }

        .dark-section .spec-list dt {
          color: rgba(255, 255, 255, 0.48);
        }

        .spec-list dd {
          margin: 0;
          color: rgba(23, 18, 15, 0.72);
        }

        .details-text {
          margin: 0;
          color: rgba(23, 18, 15, 0.72);
          font-size: 14px;
          line-height: 1.5;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 16px;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(74, 53, 43, 0.1);
        }

        .dark-section .card-footer {
          border-top-color: rgba(255, 255, 255, 0.12);
        }

        .price-label {
          display: block;
          margin-bottom: 3px;
          color: rgba(23, 18, 15, 0.46);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .dark-section .price-label {
          color: rgba(255, 255, 255, 0.42);
        }

        .price {
          color: var(--gold);
          font-weight: 900;
          font-size: 20px;
          white-space: nowrap;
        }

        .dark-section .price {
          color: var(--gold-light);
        }

        .enquire-button {
          min-width: 104px;
          min-height: 42px;
          padding: 0 18px;
          font-size: 14px;
        }

        .dark-section .enquire-button {
          background: var(--white);
          color: var(--ink);
        }

        .dark-section .enquire-button:hover {
          background: var(--gold-light);
          color: var(--ink);
        }

        .promise-panel {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 36px;
          align-items: center;
          padding: 42px;
          border-radius: 34px;
        }

        .promise-panel h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 4vw, 3.6rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .promise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .promise-item {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(74, 53, 43, 0.08);
        }

        .promise-item strong {
          display: block;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .promise-item span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step-card {
          position: relative;
          padding: 32px;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(74, 53, 43, 0.08);
          box-shadow: 0 18px 42px rgba(48, 34, 24, 0.08);
        }

        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--white);
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 900;
          margin-bottom: 20px;
          box-shadow: 0 12px 24px rgba(23, 18, 15, 0.18);
        }

        .step-card h3 {
          margin: 0 0 12px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          letter-spacing: -0.03em;
        }

        .step-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .contact-section {
          background:
            radial-gradient(circle at 80% 18%, rgba(227, 189, 115, 0.24), transparent 28%),
            linear-gradient(135deg, #ead0a4, #fbf4e9);
        }

        .contact-box {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 46px;
          align-items: center;
          padding: 50px;
          border-radius: 38px;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(185, 134, 47, 0.25);
          box-shadow: var(--shadow);
        }

        .phone-number {
          margin: 24px 0 10px;
          color: var(--ink);
          font-size: clamp(2rem, 4vw, 3.3rem);
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .email-text {
          margin: 0 0 26px;
          color: rgba(23, 18, 15, 0.72);
          font-size: 18px;
          word-break: break-word;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .contact-actions a {
          min-height: 52px;
          padding: 0 24px;
          font-size: 15px;
        }

        .email-button {
          border: 1px solid rgba(23, 18, 15, 0.32);
          color: var(--ink);
          background: rgba(255, 255, 255, 0.4);
        }

        .email-button:hover {
          color: var(--gold);
          border-color: var(--gold);
          transform: translateY(-2px);
        }

        .contact-note-card {
          padding: 30px;
          border-radius: 28px;
          background: var(--ink);
          color: white;
        }

        .contact-note-card h3 {
          margin: 0 0 14px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          letter-spacing: -0.03em;
        }

        .contact-note {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 1.85;
        }

        footer {
          padding: 36px 24px;
          background: var(--ink);
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
          font-size: 25px;
        }

        footer p {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .nav-links {
            display: none;
          }

          .hero-inner,
          .contact-box,
          .promise-panel {
            grid-template-columns: 1fr;
          }

          .category-grid,
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .nav-inner {
            padding: 15px 16px;
          }

          .logo {
            font-size: 23px;
            letter-spacing: 0.16em;
          }

          .nav-button {
            padding: 10px 14px;
          }

          .hero {
            padding: 116px 18px 64px;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .hero-text {
            font-size: 17px;
          }

          .primary-button,
          .secondary-button,
          .whatsapp-button,
          .email-button {
            width: 100%;
          }

          .hero-card {
            padding: 12px;
            border-radius: 30px;
          }

          .hero-image {
            height: 410px;
            border-radius: 24px;
          }

          .floating-card {
            top: 16px;
            left: 16px;
            right: 16px;
            max-width: none;
          }

          .hero-overlay {
            left: 16px;
            right: 16px;
            bottom: 16px;
          }

          .section {
            padding: 70px 18px;
          }

          .category-grid,
          .product-grid,
          .promise-grid {
            grid-template-columns: 1fr;
          }

          .product-photo {
            height: 300px;
          }

          .product-info h3 {
            min-height: auto;
          }

          .card-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .enquire-button {
            width: 100%;
          }

          .promise-panel,
          .contact-box {
            padding: 28px;
            border-radius: 28px;
          }

          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="logo" aria-label="Bliing home">
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

      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <div>
              <p className="eyebrow">Bliing New Collection 2026</p>

              <h1>
                Luxury lab-grown diamonds,
                <span className="hero-highlight">made personal.</span>
              </h1>

              <p className="hero-text">
                Discover radiant lab-grown diamond jewellery designed for modern
                elegance: premium sparkle, thoughtful pricing and personalised
                guidance from first enquiry to final piece.
              </p>

              <div className="hero-actions">
                <a href="#collection" className="primary-button">
                  Explore the Collection
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

              <ul className="trust-strip" aria-label="Bliing highlights">
                {trustPoints.map((point) => (
                  <li key={point}>✦ {point}</li>
                ))}
              </ul>
            </div>

            <div className="hero-card">
              <div className="hero-image">
                <JewelleryImage
                  src="/images/earrings/hero.jpg"
                  alt="Bliing diamond jewellery"
                  fallback="💎"
                />

                <div className="floating-card">
                  <strong>1–2 weeks</strong>
                  <span>
                    Estimated delivery for catalogue pieces after order
                    confirmation.
                  </span>
                </div>

                <div className="hero-overlay">
                  <h2>
                    BL<span className="gold">II</span>NG
                  </h2>
                  <p>
                    Yellow gold, white gold, rose gold and platinum options are
                    available by request.
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
              title="A curated jewellery collection made for modern elegance."
              text="Explore earrings, necklaces, bracelets, tennis bracelets and rings crafted for everyday luxury, special occasions and customised creations."
            />

            <div className="category-grid">
              {categories.map((item) => (
                <a className="category-card" href={item.anchor} key={item.title}>
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
                    <span className="category-link">View {item.title} →</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="notice">
              <strong>Customisation available:</strong> choose your preferred
              design, diamond detail and metal finish.
              <div className="finish-list">
                {finishOptions.map((finish) => (
                  <span key={finish}>{finish}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="promise-panel">
              <div>
                <p className="eyebrow">Why Choose Bliing</p>
                <h2>Luxury that feels personal, polished and approachable.</h2>
              </div>

              <div className="promise-grid">
                <div className="promise-item">
                  <strong>Modern luxury</strong>
                  <span>
                    Clean design, warm gold tones and refined pieces made for
                    everyday wear and special occasions.
                  </span>
                </div>

                <div className="promise-item">
                  <strong>Easy enquiry</strong>
                  <span>
                    Every product opens WhatsApp with the item already written
                    into the message.
                  </span>
                </div>

                <div className="promise-item">
                  <strong>Clear expectations</strong>
                  <span>
                    Customers can see price cues, metal options and estimated
                    delivery timing before ordering.
                  </span>
                </div>

                <div className="promise-item">
                  <strong>Custom friendly</strong>
                  <span>
                    Bespoke requests are welcome without making the buying
                    process feel complicated.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductSection
          id="earrings"
          label="Earrings"
          title="Diamond earrings designed to be noticed."
          text="From minimal studs to high-brilliance hoops, these pieces are easy to wear, gift and style for every occasion."
          items={earrings}
          fallback="💎"
          dark
        />

        <ProductSection
          id="necklaces"
          label="Necklaces"
          title="Graceful necklaces with refined sparkle."
          text="A polished selection of diamond necklaces and pendant styles that bring effortless radiance to any look."
          items={necklaces}
          fallback="📿"
        />

        <ProductSection
          id="bracelets"
          label="Bracelets"
          title="Bracelets with an elegant finish."
          text="Designed for gifting, layering and meaningful occasions, with custom diamond and metal details available by enquiry."
          items={bracelets}
          fallback="✨"
          dark
        />

        <ProductSection
          id="tennis"
          label="Tennis Bracelets"
          title="The timeless line bracelet, made brilliant."
          text="Classic, fine and premium tennis bracelet styles available through direct consultation."
          items={tennisBracelets}
          fallback="💫"
        />

        <ProductSection
          id="rings"
          label="Rings"
          title="Rings for everyday luxury and special moments."
          text="Explore elegant bands, classic diamond rings and engagement-style designs with customisation available."
          items={rings}
          fallback="💍"
          dark
        />

        <section id="order" className="section">
          <div className="container">
            <SectionTitle
              label="Simple Steps to Sparkle"
              title="A simple order process from enquiry to collection."
              text="Choose your piece, confirm the details and collect your jewellery once it is ready."
              center
            />

            <div className="steps">
              {steps.map((step, index) => (
                <div className="step-card" key={step.title}>
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>

            <div className="notice">
              <strong>Estimated timing:</strong> catalogue items are usually
              ready in approximately 1–2 weeks. Customised orders are usually
              ready in approximately 3–4 weeks.
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-box">
              <div>
                <p className="eyebrow">Place an Order</p>
                <h2 className="contact-title">Ready to choose your sparkle?</h2>

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

              <div className="contact-note-card">
                <h3>What to send us</h3>

                <p className="contact-note">
                  Share the item name or product code, your preferred metal
                  colour, size if relevant and any customisation request. We
                  will help confirm availability, pricing and estimated delivery
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-logo">
            BL<span className="gold">II</span>NG
          </div>

          <p>
            © {new Date().getFullYear()} Bliing. Lab-grown diamond jewellery
            collection.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;