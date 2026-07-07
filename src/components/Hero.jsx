import profile from "../assets/images/WhatsApp Image 2026-07-07 at 5.29.19 PM.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">
        <h3>Hello, I'm</h3>

        <h1>Kinjal Verma</h1>

        <h2>Aspiring Developer</h2>

        <p>
          B.Tech(IT) student passionate about
          building responsive websites using React and JavaScript.
        </p>

        <a href="#" className="btn">
          Download Resume
        </a>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;