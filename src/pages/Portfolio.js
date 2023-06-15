import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <Header />
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <div>
          <h2>Shot Clock</h2>
          <p>Description...</p>
          <p>MySQL, Handlebars, Bulma</p>
          <p>
            Contributors: Nya Tyus, Seve Nerowski, Teresa Rodriguez, Jillian
            Hallmark, Nick Fierke
          </p>
          <div className="d-flex flex-row">
            <Link
              to="https://github.com/nyashanice/SHOT_CLOCK"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              to="https://github.com/nyashanice/SHOT_CLOCK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </Link>
          </div>
        </div>
        <div>
          <h2>Voyage Vistas</h2>
          <p>Description...</p>
          <p>React, Bootstrap</p>
          <div className="d-flex flex-row">
            <Link
              to="https://github.com/nyashanice/Travel-Agent-Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              to="https://nyashanice.github.io/Travel-Agent-Site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </Link>
          </div>
        </div>
        <div>
          <h2>The Faithful Pixel</h2>
          <p>Description...</p>
          <p>React, Bootstrap</p>
          <div className="d-flex flex-row">
            <Link
              to="https://github.com/nyashanice/Freelance-Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              to="https://www.thefaithfulpixel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </Link>
          </div>
        </div>
        <div>
          <h2>Fast Twitch Frenzy</h2>
          <p>Description...</p>
          <p>React, Bootstrap</p>
          <div className="d-flex flex-row">
            <Link
              to="https://github.com/nyashanice/Fast-Twitch-Frenzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              to="https://nyashanice.github.io/Fast-Twitch-Frenzy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
