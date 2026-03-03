import img from "./images/hero-section.webp";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="accent">Tisha Movaliya</span>
          </h1>

          <h2 className="role"> React Developer </h2>

          <p className="description">
            Passionate about building responsive and scalable web applications
            using React and modern JavaScript. Experienced in API integration,
            state management, and creating clean, maintainable UI components.
          </p>

          <div className="hero-buttons">
            <a
              href="/Tisha_Movaliya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>

            <a
              href="https://github.com/tishamovaliya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>

            <a href="#contact" className="btn secondary">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={img} alt="Tisha Movaliya profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
