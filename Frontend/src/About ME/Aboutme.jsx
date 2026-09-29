import "./Aboutme.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src="/Sneha.jpeg" alt="Sneha Poojary" className="about-image" />
        </div>

        <div className="about-text-wrapper">
          <p className="about-text">
            I'm a Computer Engineering graduate who enjoys turning ideas into
            reliable, well-built backend systems. I'm strongest in Python and
            JavaScript, with a solid grip on data structures and algorithms, API
            design, databases and writing clean, tested code. I like understanding
            how things work under the hood, and I'm equally curious about how AI
            fits into real-world products. I'm a fast learner who picks up new
            tools and concepts quickly, adapts easily, and enjoys solving a
            problem until it's done properly. I also love sharing what I learn by
            writing technical content for others.
          </p>
          <br></br> <br></br> <br></br>
          <p className="about-text">
            I have pursued my B.E in Computer Engineering from{" "}
            <strong>Universal College Of Engineering</strong>,{" "}
            <strong>University of Mumbai</strong> from 2022–2026.
          </p>
        </div>
      </div>
    </section>
  );
}
