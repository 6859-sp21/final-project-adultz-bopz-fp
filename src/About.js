import React from "react";
import "./About.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About-page">
      <div className="About-container">
        <div className="About-carousel">
          <Carousel showStatus={false} showThumbs={false}>
            <section id="carousel1" className="About-section">
              <div>
                <p className="About-title About-white-background">Exploring Censorship and Lyric Alterations in Kidz Bopz Music from 2001-2019</p>
                <p className="About-team About-white-background">
                  Nico Salinas, Shannen Wu {"&"} Jessica Yin
                </p>
              </div>
              <Link to="/app" className="launch-button">
                Launch Visualization App
              </Link>
            </section>
            <section id="carousel2" className="About-section About-section-white-background">
              <h2>ABSTRACT GOES HERE</h2>
            </section>

            <section id="carousel3" className="About-section About-section-white-background">
              <h2>VIDEO DEMO HERE</h2>
            </section>

            <section id="carousel4" className="About-section About-section-white-background">
              <h2>INSTALLATION DEMO INSTRUCTIONS</h2>
              <div className="About-section-info">
                <h4>Dataset URL: <a href="https://github.com/the-pudding/data/tree/master/kidz-bop">https://github.com/the-pudding/data/tree/master/kidz-bop</a></h4>
                
                <h4>Installation</h4>
                <ol>
                  <li>Locally clone the repository</li>
                  <li>Run <code>npm install</code> to install all node dependices</li>
                  <li>To test locally, run <code>npm start</code> and open a Chrome tab at <code>http://localhost:3000</code></li>
                </ol>
                
                <h4>Deployment</h4>
                The deployed site is managed by GitHub Pages. To deploy this repo:
                <ol>
                  <li>Run <code>npm run predeploy</code></li>
                  <li>Run <code>npm run deploy</code></li>
                  <li>Visit the deployed site at <a href="https://6859-sp21.github.io/final-project-adultz-bopz-fp/">https://6859-sp21.github.io/final-project-adultz-bopz-fp/</a></li>
                </ol>
              </div>
            </section>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;