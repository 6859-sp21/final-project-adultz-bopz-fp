import React from "react";
import img1 from './media/img1.png';
import img2 from './media/img2.png';
import img3 from './media/img3.png';
import img4 from './media/img4.png';
import "./About.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About-container">
      <div className="About-img-container">
        <img className="About-img-container-item" src={img1} />
        <img className="About-img-container-item" src={img2} />
        <img className="About-img-container-item" src={img3} />
        <img className="About-img-container-item" src={img4} />
      </div>
      <div className="About-carousel">
        <Carousel  dynamicHeight={false} showStatus={false} showThumbs={false}>
        <section id="carousel1" className="About-section">
          <div>
            <p className="About-title About-white-background">Understanding Kidz Bopz</p>
            <p className="About-team About-white-background">Nico Salinas, Shannen Wu {"&"} Jessica Yin</p>
          </div>
          <Link to="/app" className="About-launch-button">Launch Visualization App</Link>
        </section>
        <section id="carousel2" className="About-section About-section-white-background">
          <h2>ABSTRACT GOES HERE</h2>
        </section>

        <section id="carousel3" className="About-section About-section-white-background">
          <h2>VIDEO DEMO HERE</h2>
        </section>

        <section id="carousel4" className="About-section About-section-white-background">
          <h2>INSTALLATION DEMO INSTRUCTIONS</h2>
        </section>
      </Carousel>
      </div>
    </div>
  );
};

export default About;
