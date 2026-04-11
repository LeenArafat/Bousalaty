import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homebage.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">مستشارك الأكاديمي الذكي</span>
        </div>

        {/* Links */}
        <div className="navbar-links">
          <a href="#" className="nav-link">تحميل دخول</a>

          {/* 🔥 Login routing */}
          <Link to="/login" className="nav-link">
            تسجيل دخول
          </Link>

          <button className="btn-primary">ابدأ الاختبار</button>

          <span className="hamburger">☰</span>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section className="hero">
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          اكتشف تخصصك الذكي
          <br />
          <span className="highlight">مع مساعدك AI</span>
        </h1>

        <p className="hero-subtitle">
          تحليل ميولك ومهاراتك واقتراح أفضل تخصص لك
        </p>

        <button className="btn-green">ابدأ التحليل الذكي</button>
      </div>

      <div className="hero-illustration">
        <div className="illustration-blob"></div>
        <div className="robot-card">🤖</div>
        <div className="student-card">🧑‍💻</div>
        <div className="floating-card">💡</div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const cards = [
    {
      icon: "⚙️",
      title: "تحليل تخصص فوري",
      desc: "تحليل سريع لمهاراتك",
    },
    {
      icon: "🔍",
      title: "اقتراح تخصصات",
      desc: "اقتراحات مناسبة لك",
    },
    {
      icon: "🤖",
      title: "ذكاء اصطناعي",
      desc: "تحليل متقدم لشخصيتك",
    },
  ];

  return (
    <section className="how-it-works">
      <h2 className="section-title">كيف يعمل الموقع؟</h2>

      <div className="cards-grid">
        {cards.map((card, i) => (
          <div className="feature-card" key={i}>
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ComparisonBanner = () => (
  <section className="comparison-banner">
    <div className="comparison-inner">
      <div>🎓 علوم الحاسوب</div>
      <div className="vs-circle">VS</div>
      <div>🤖 الذكاء الاصطناعي</div>
    </div>
  </section>
);

const ChatbotButton = () => (
  <button className="chatbot-btn">💬</button>
);

const YazanHomePage = () => {
  return (
    <div className="app" dir="rtl">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ComparisonBanner />
      <ChatbotButton />
    </div>
  );
};

export default YazanHomePage;