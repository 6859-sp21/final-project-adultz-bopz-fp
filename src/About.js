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

              <p style={{marginTop: "24px"}}><i>Note: Use the left and right carousel arrows to navigate the project page. </i></p>
            </section>
            <section id="carousel2" className="About-section About-section-white-background">
              <h2>Abstract</h2>
              <p className="About-section-abstract">Censorship and lyric alterations in music is observed in many public media channels such as the radio, TV, film among others. Often, it’s easy to identify certain profane words and find a replace the word in the lyric to produce a “Clean” or “Radio Edit” of a song. However, in the case study of Kidz Bop, a brand known for making songs as kid friendly as possible, we can visualize these trends to understand how music is altered for young audience, and in some cases, can change the context of a lyric or complete remove it. Our interactive data visualization tools process a hierarchical data transformation to create trends and associations among songs, artists, and altered words found in our music. </p>
            </section>

            <section id="carousel3" className="About-section About-section-white-background">
              <h2>Project Trailer</h2>
              <div class="video-container">
                <iframe width="560" height="560" src="https://www.youtube.com/embed/39xePSyzGp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p>
                Shannen Wu, Jessica Yin, and Nico Salinas  <br />
                <i>(Guest performances from Matt Tung)</i>
              </p>
            </section>

            <section id="carousel4" className="About-section About-section-white-background">
              <h2>INSTALLATION DEMO INSTRUCTIONS</h2>
              <div className="About-section-info">
                <h3>Dataset URL: <a className="About-section-info-link" target="_blank" href="https://github.com/the-pudding/data/tree/master/kidz-bop" rel="noreferrer">https://github.com/the-pudding/data/tree/master/kidz-bop</a></h3>
                
                <h3>Installation</h3>
                <ol>
                  <li>Locally clone the repository</li>
                  <li>Run <code>npm install</code> to install all node dependices</li>
                  <li>To test locally, run <code>npm start</code> and open a Chrome tab at <code>http://localhost:3000</code></li>
                </ol>
                
                <h3>Deployment</h3>
                The deployed site is managed by GitHub Pages. To deploy this repo:
                <ol>
                  <li>Run <code>npm run predeploy</code></li>
                  <li>Run <code>npm run deploy</code></li>
                  <li>Visit the deployed site at <a className="About-section-info-link" target="_blank" href="https://6859-sp21.github.io/final-project-adultz-bopz-fp/" rel="noreferrer">https://6859-sp21.github.io/final-project-adultz-bopz-fp/</a></li>
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
