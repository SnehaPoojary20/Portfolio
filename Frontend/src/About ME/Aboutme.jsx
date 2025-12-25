import React from 'react';
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about">

      <div className="image">
        <img src="/Sneha.jpg" className="profile-img" alt="Sneha Poojary" />
      </div>

      <div className="description">
        <h1 className="title">
          Hello, I’m <span>Sneha Poojary</span>
        </h1>

        <h4 className="bio">
          I’m a passionate web developer focused on building intuitive,<br />
          responsive, and impactful digital experiences.<br /><br />
          I love transforming ideas into seamless UI and clean, efficient code.<br />
          Crafting beautiful interfaces and solving real-world problems<br />
          through technology is what drives me every day.
        </h4>
        <br></br>
        <h4 className="bio">When I’m not coding, you’ll find me lost in the pages of a good book 📚</h4>
      </div>
     
    </section>
  );
};

export default Aboutme;

