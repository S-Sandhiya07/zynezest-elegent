import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import heroImage from "../assets/zyne-hero.jpg";
import seaBassImage from "../assets/zyne-dish-seabass.jpg";
import ravioliImage from "../assets/zyne-dish-ravioli.jpg";
import chocolateImage from "../assets/zyne-dish-chocolate.jpg";
import chefImage from "../assets/zyne-chef.jpg";
import privateDiningImage from "../assets/zyne-private-dining.jpg";
import celebrationImage from "../assets/zyne-celebration.jpg";
import serviceImage from "../assets/zyne-service.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZYNE | Where Zest Meets Elegance" },
      {
        name: "description",
        content:
          "Discover ZYNE, a warm and refined fine-dining destination where seasonal ingredients, thoughtful craft, and gracious hospitality meet.",
      },
      { property: "og:title", content: "ZYNE | Where Zest Meets Elegance" },
      {
        property: "og:description",
        content: "A considered dining experience shaped by flavour, craft, and warm hospitality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Home", "About", "Menu", "Experience", "Gallery", "Contact"];

const values = [
  { letter: "Z", title: "Zest", text: "Vibrant flavour, alive in every detail." },
  { letter: "Y", title: "Yearning", text: "The curiosity to keep discovering." },
  { letter: "N", title: "Nourishment", text: "Food that restores and connects." },
  { letter: "E", title: "Elegance", text: "Grace without excess or pretence." },
];

const dishes = [
  {
    name: "Citrus Sea Bass",
    description: "Charred spring vegetables, preserved lemon, dill beurre blanc",
    image: seaBassImage,
  },
  {
    name: "Woodland Ravioli",
    description: "Wild mushrooms, black truffle, brown butter, aged parmesan",
    image: ravioliImage,
  },
  {
    name: "Chocolate Marquise",
    description: "Single-origin cacao, hazelnut praline, smoked vanilla",
    image: chocolateImage,
  },
];

const testimonials = [
  {
    quote: "Every course felt quietly assured—beautiful, surprising and deeply satisfying.",
    author: "Ananya & Rohan",
    note: "Anniversary dinner",
  },
  {
    quote: "The room has a rare kind of warmth. Service is intuitive and the food stays with you.",
    author: "Meera V.",
    note: "Private dining guest",
  },
  {
    quote: "A celebration handled with absolute grace, from the first welcome to the last pour.",
    author: "Arjun Menon",
    note: "Birthday celebration",
  },
];

function BrandMark() {
  return (
    <a href="#home" className="brand" aria-label="ZYNE home">
      <span>ZYNE</span>
      <small>Fine Dining</small>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <a className="nav-reserve" href="#reserve">Reserve a Table</a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="mobile-reserve" href="#reserve" onClick={closeMenu}>Reserve a Table</a>
          </nav>
        )}
      </header>

      <section id="home" className="hero">
        <img src={heroImage} alt="The candlelit dining room at ZYNE" width={1920} height={1088} />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Welcome to ZYNE</p>
          <h1>Where Zest<br />Meets Elegance.</h1>
          <p className="hero-copy">An intimate expression of modern cuisine, guided by the seasons and served with soul.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#reserve">Reserve a Table</a>
            <a className="button button-ghost" href="#menu">Explore Menu</a>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to introduction">
          <span>Discover</span><ArrowDown size={17} />
        </a>
      </section>

      <section id="about" className="intro section-light">
        <div className="section-number">01</div>
        <div className="intro-heading">
          <p className="eyebrow">Our Philosophy</p>
          <h2>More Than<br />Just a Meal</h2>
        </div>
        <div className="intro-copy">
          <p className="lead">At ZYNE, dining is a ritual of connection—between land and table, memory and discovery, restraint and delight.</p>
          <p>Our menus move with the seasons, bringing together pristine ingredients and precise technique. The result is food that feels at once new and deeply familiar.</p>
          <a className="text-link" href="#experience">The ZYNE experience <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="values section-dark" aria-labelledby="values-title">
        <div className="section-kicker">
          <p className="eyebrow">The Meaning Within</p>
          <h2 id="values-title">Four letters.<br />One philosophy.</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article className="value-item" key={value.letter}>
              <span>{value.letter}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" className="menu-section section-light">
        <div className="section-heading centered">
          <p className="eyebrow">From the Kitchen</p>
          <h2>Signatures of the Season</h2>
          <p>Plates composed with clarity, character and a touch of the unexpected.</p>
        </div>
        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <article className="dish" key={dish.name}>
              <div className="dish-image-wrap">
                <img src={dish.image} alt={dish.name} loading="lazy" width={1200} height={912} />
                <span>0{index + 1}</span>
              </div>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </article>
          ))}
        </div>
        <a className="button button-outline" href="#contact">View the Menu</a>
      </section>

      <section id="experience" className="experience section-warm">
        <div className="experience-intro">
          <p className="eyebrow">Make It Yours</p>
          <h2>An Occasion,<br />Beautifully Held</h2>
          <p>Whether an intimate dinner or a room filled with your favourite people, every gathering is shaped around you.</p>
        </div>
        <div className="experience-grid">
          <article className="experience-feature">
            <img src={serviceImage} alt="Finishing touches on a plate at ZYNE" loading="lazy" width={1408} height={1008} />
            <div><span>01</span><h3>Fine Dining</h3><p>A refined, unhurried evening from first pour to final course.</p></div>
          </article>
          <article className="experience-card">
            <img src={privateDiningImage} alt="ZYNE private dining room" loading="lazy" width={1408} height={1008} />
            <div><span>02</span><h3>Private Dining</h3><p>A secluded room, a tailored menu, and service all your own.</p></div>
          </article>
          <article className="experience-card">
            <img src={celebrationImage} alt="A celebration dinner at ZYNE" loading="lazy" width={1408} height={1008} />
            <div><span>03</span><h3>Celebrations</h3><p>Milestones made memorable through thoughtful details.</p></div>
          </article>
        </div>
      </section>

      <section className="chef section-light">
        <div className="chef-image">
          <img src={chefImage} alt="ZYNE Executive Chef Mira Anand" loading="lazy" width={1200} height={1504} />
        </div>
        <div className="chef-copy">
          <p className="eyebrow">The Creative Heart</p>
          <h2>Chef Mira<br />Anand</h2>
          <blockquote>“The finest dishes don’t ask for attention. They earn it, one honest flavour at a time.”</blockquote>
          <p>With a style rooted in Indian seasonality and shaped by kitchens across Europe and Asia, Chef Mira brings precision, warmth and quiet imagination to every plate.</p>
          <div className="signature">Mira Anand</div>
        </div>
      </section>

      <section id="gallery" className="gallery section-dark">
        <div className="gallery-heading">
          <p className="eyebrow">Inside ZYNE</p>
          <h2>Moments,<br />Served Beautifully</h2>
        </div>
        <div className="gallery-grid">
          {[heroImage, seaBassImage, celebrationImage, ravioliImage, privateDiningImage, chocolateImage].map((image, index) => (
            <figure key={image} className={`gallery-${index + 1}`}>
              <img src={image} alt={["ZYNE dining room", "Seasonal sea bass", "Guests celebrating", "Truffle ravioli", "Private dining room", "Chocolate marquise"][index]} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="testimonials section-light">
        <div className="section-heading centered">
          <p className="eyebrow">Guest Book</p>
          <h2>In Their Words</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <blockquote key={item.author}>
              <span>“</span>
              <p>{item.quote}</p>
              <footer><strong>{item.author}</strong><small>{item.note}</small></footer>
              <em>0{index + 1}</em>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="reserve" className="reservation">
        <img src={privateDiningImage} alt="An intimate table at ZYNE" loading="lazy" width={1408} height={1008} />
        <div className="reservation-shade" />
        <div className="reservation-content">
          <p className="eyebrow">Reservations</p>
          <h2>Your Table Awaits</h2>
          <p>Join us for an evening shaped around flavour, warmth and the pleasure of being present.</p>
          <a className="button button-gold" href="mailto:reservations@zyne.restaurant">Reserve a Table</a>
        </div>
      </section>

      <section id="contact" className="contact section-warm">
        <div className="contact-brand"><BrandMark /><p>Where zest meets elegance.</p></div>
        <div className="contact-block"><p className="eyebrow">Visit</p><address>Indiranagar<br />Bengaluru, Karnataka</address></div>
        <div className="contact-block"><p className="eyebrow">Hours</p><p>Tuesday–Sunday<br />6:00 pm–11:30 pm</p><small>Closed Mondays</small></div>
        <div className="contact-block"><p className="eyebrow">Reservations</p><a href="mailto:reservations@zyne.restaurant">reservations@zyne.restaurant</a></div>
      </section>

      <footer className="footer">
        <p>© 2026 ZYNE. All rights reserved.</p>
        <div><a href="#home">Instagram</a><a href="#home">Privacy</a><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}