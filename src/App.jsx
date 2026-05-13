const collections = [
  {
    title: "Rings",
    icon: "💍",
    text: "Elegant rings designed for daily wear, gifting, and special occasions.",
  },
  {
    title: "Necklaces",
    icon: "📿",
    text: "Graceful pieces that add shine without feeling overdone.",
  },
  {
    title: "Earrings",
    icon: "✨",
    text: "Classic, soft, and statement-ready earrings for every look.",
  },
  {
    title: "Bracelets",
    icon: "💫",
    text: "Delicate finishing touches with a polished premium feel.",
  },
];

const products = [
  "Golden Aura Ring",
  "Pearl Drop Earrings",
  "Luna Chain Necklace",
  "Classic Glow Bracelet",
];

function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #FAF6EF;
          color: #1F1A17;
        }

        html {
          scroll-behavior: smooth;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 10;
          background: rgba(250, 246, 239, 0.92);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 30px;
          font-weight: bold;
          letter-spacing: 8px;
          text-decoration: none;
          color: #1F1A17;
        }

        .gold {
          color: #B8893A;
        }

        .nav-links {
          display: flex;
          gap: 28px;
        }

        .nav-links a {
          color: #1F1A17;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .nav-links a:hover {
          color: #B8893A;
        }

        .nav-button {
          background: #1F1A17;
          color: white;
          padding: 10px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
        }

        .nav-button:hover {
          background: #B8893A;
        }

        .hero {
          min-height: 100vh;
          padding: 130px 24px 70px;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .small-title {
          color: #B8893A;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 13px;
          margin-bottom: 18px;
        }

        h1 {
          font-size: 72px;
          line-height: 1;
          margin: 0;
          max-width: 620px;
        }

        .hero p {
          font-size: 19px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.68);
          max-width: 560px;
          margin-top: 24px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 15px;
          display: inline-block;
        }

        .primary-button {
          background: #1F1A17;
          color: white;
        }

        .primary-button:hover {
          background: #B8893A;
        }

        .secondary-button {
          border: 1px solid #1F1A17;
          color: #1F1A17;
        }

        .secondary-button:hover {
          border-color: #B8893A;
          color: #B8893A;
        }

        .hero-card {
          background: linear-gradient(135deg, #E8D2AA, #B8893A);
          border-radius: 260px 260px 30px 30px;
          padding: 28px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);
        }

        .hero-image-placeholder {
          height: 480px;
          border-radius: 240px 240px 24px 24px;
          background: rgba(255, 255, 255, 0.65);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .hero-image-placeholder .big-icon {
          font-size: 90px;
        }

        .hero-image-placeholder h2 {
          font-size: 38px;
          letter-spacing: 6px;
          margin: 18px 0 8px;
        }

        .section {
          padding: 90px 24px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-heading {
          font-size: 48px;
          margin: 10px 0 20px;
        }

        .section-text {
          max-width: 650px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 1.8;
          font-size: 17px;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .collection-card {
          background: white;
          border-radius: 28px;
          padding: 30px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          transition: 0.2s;
        }

        .collection-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
        }

        .icon-box {
          height: 90px;
          border-radius: 20px;
          background: rgba(184, 137, 58, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          margin-bottom: 24px;
        }

        .collection-card h3 {
          font-size: 25px;
          margin: 0 0 12px;
        }

        .collection-card p {
          color: rgba(0, 0, 0, 0.65);
          line-height: 1.6;
          font-size: 15px;
        }

        .dark-section {
          background: #1F1A17;
          color: white;
        }

        .dark-section .section-text {
          color: rgba(255, 255, 255, 0.65);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 48px;
        }

        .product-image {
          height: 280px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 70px;
        }

        .product-card h3 {
          font-size: 21px;
          margin: 20px 0 8px;
        }

        .product-card p {
          color: #D8AE67;
          font-size: 14px;
        }

        .product-card a {
          margin-top: 12px;
          display: inline-block;
          padding: 10px 18px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
        }

        .product-card a:hover {
          border-color: #D8AE67;
          color: #D8AE67;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .about-grid p {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.68);
        }

        .contact-section {
          background: #EFE4D3;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .contact-details {
          margin-top: 30px;
          line-height: 2;
          color: rgba(0, 0, 0, 0.75);
        }

        form {
          background: white;
          padding: 34px;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        input,
        textarea {
          width: 100%;
          padding: 16px 18px;
          margin-bottom: 16px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 20px;
          font-size: 15px;
          outline: none;
          font-family: Arial, sans-serif;
        }

        input:focus,
        textarea:focus {
          border-color: #B8893A;
        }

        textarea {
          min-height: 130px;
          resize: vertical;
        }

        button {
          width: 100%;
          padding: 16px;
          border: none;
          background: #1F1A17;
          color: white;
          border-radius: 999px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #B8893A;
        }

        footer {
          background: #1F1A17;
          color: white;
          padding: 34px 24px;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          font-size: 26px;
          font-weight: bold;
          letter-spacing: 7px;
        }

        footer p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }

          .hero-inner,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 48px;
          }

          .collection-grid,
          .product-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero-image-placeholder {
            height: 360px;
          }
        }

        @media (max-width: 560px) {
          .collection-grid,
          .product-grid {
            grid-template-columns: 1fr;
          }

          .logo {
            font-size: 24px;
            letter-spacing: 5px;
          }

          .nav-button {
            padding: 8px 14px;
          }

          .footer-inner {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo">
            BL<span className="gold">II</span>NG
          </a>

          <div className="nav-links">
            <a href="#collections">Collections</a>
            <a href="#products">Showcase</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Enquire
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div>
            <div className="small-title">Jewellery Showcase</div>

            <h1>Elegance with a little extra sparkle.</h1>

            <p>
              Bliing creates jewellery for people who love pieces that feel
              refined, expressive, and effortlessly memorable.
            </p>

            <div className="hero-buttons">
              <a href="#collections" className="primary-button">
                View Collection
              </a>

              <a href="#contact" className="secondary-button">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-image-placeholder">
              <div>
                <div className="big-icon">💍</div>
                <h2>BLIIING</h2>
                <p>Your jewellery image will go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="section">
        <div className="container">
          <div className="small-title">Our Collections</div>
          <h2 className="section-heading">Made to be noticed.</h2>
          <p className="section-text">
            Explore jewellery designed for daily styling, gifting, events, and
            moments where the details matter.
          </p>

          <div className="collection-grid">
            {collections.map((item) => (
              <div className="collection-card" key={item.title}>
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section dark-section">
        <div className="container">
          <div className="small-title">Featured Pieces</div>
          <h2 className="section-heading">The Bliing edit.</h2>
          <p className="section-text">
            A curated selection of pieces that capture the brand’s signature
            look: polished, graceful, and just bold enough.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product}>
                <div className="product-image">💎</div>
                <h3>{product}</h3>
                <p>Price on request</p>
                <a href="#contact">Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <div className="small-title">About Bliing</div>
            <h2 className="section-heading">
              Jewellery that adds presence, not noise.
            </h2>
          </div>

          <div>
            <p>
              Bliing is created for those who love jewellery that feels
              polished, expressive, and wearable. Each piece is selected to
              bring shine without looking overdone.
            </p>

            <p>
              Whether it is a soft everyday detail or a statement piece for an
              occasion, Bliing is about confident styling with a refined finish.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="small-title">Contact</div>
            <h2 className="section-heading">Interested in a piece?</h2>

            <p className="section-text">
              Send us your enquiry and we will get back to you with details,
              availability, and styling suggestions.
            </p>

            <div className="contact-details">
              <p>Instagram: @bliing</p>
              <p>WhatsApp: Message Bliing</p>
              <p>Email: hello@bliing.com</p>
            </div>
          </div>

          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Product interested in" />
            <textarea placeholder="Your message"></textarea>
            <button type="button">Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-logo">
            BL<span className="gold">II</span>NG
          </div>
          <p>© {new Date().getFullYear()} Bliing. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;