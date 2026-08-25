import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-meta">
          <span className="prompt-eyebrow">whoami</span>
          <div className="status-pill">
            <span className="badge-dot" />
            Open to Work · SDE-1 / Backend / AI Eng · May 2026
          </div>
          <img className="profile-img" src="/Sneha.jpeg" alt="Sneha Poojary" />
        </div>

        <div className="about-content">
          <h1 className="title">
            Sneha Poojary<span className="prompt-cursor" />
          </h1>
          <p className="about-role">Backend Software Engineer — Python · Node.js · LLM Integration</p>

          <p className="bio">
            I build backend systems that hold up outside the demo — and I like the
            part of engineering most people skip past: figuring out why something
            breaks before it does.
          </p>

          <p className="bio">
            Give me a problem and I'll take it apart until I understand every
            piece — where the data lives, what happens when a dependency fails,
            what breaks first under load. I'd rather spend an extra hour on the
            failure case than ship something that only works when everything
            goes right.
          </p>

          <p className="bio bio-question">
            I pick things up fast because I have to — most of what I know about
            backend systems, I taught myself by building and breaking things,
            not by being told the "right" way first.
          </p>

          <div className="about-cta">
            <a href="mailto:snehapoojary2004@gmail.com" className="btn-primary">Hire Me</a>
            <a
              href="https://drive.google.com/file/d/19CHkb1HVqLKDENXDXriFsLuS4kCQvTQz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;


