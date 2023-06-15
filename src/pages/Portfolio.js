import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="portfolio-header text-center m-2">Portfolio</h1>
      </div>
      <div>
        <div className="m-2 p-1 project-card">
          <h2 className="m-0 p-0 project-title">Shot Clock</h2>
          <p className="m-1 p-0 project-text">
            Shot Clock is an NBA game predictor website that also shows users
            previous season statistics. You login, choose a team, and predict
            the game outcome versus any other team!{" "}
          </p>
          <p className="m-0 p-0 project-stack">MySQL, Handlebars, Bulma</p>
          <p className="m-0 p-0 text-muted project-text contributors">
            Contributors: Nya Tyus, Seve Nerowski, Teresa Rodriguez, Jillian
            Hallmark, Nick Fierke
          </p>
          <div className="d-flex flex-row justify-content-around m-0 p-0">
            <Link
              to="https://github.com/nyashanice/SHOT_CLOCK"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </Link>
            <Link
              to="https://github.com/nyashanice/SHOT_CLOCK"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Deployed
            </Link>
          </div>
        </div>
        <div className="m-2 p-1 project-card">
          <h2 className="m-0 p-0 project-title">Voyage Vistas</h2>
          <p className="m-1 p-0 project-text">
            Voyage Vistas Travel Agency website showcases the services offered
            by the business, testimonials, and a inquiry form to fill out for
            interested visitors.
          </p>
          <p className="m-0 p-0 project-stack">React, Bootstrap</p>
          <div className="d-flex flex-row justify-content-around m-0 p-0">
            <Link
              to="https://github.com/nyashanice/Travel-Agent-Site"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </Link>
            <Link
              to="https://nyashanice.github.io/Travel-Agent-Site/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Deployed
            </Link>
          </div>
        </div>
        <div className="m-2 p-1 project-card">
          <h2 className="m-0 p-0 project-title">The Faithful Pixel</h2>
          <p className="m-1 p-0 project-text">
            The Faithful Pixel website is for freelance web development
            services. On the website, you can find out more about the developer,
            what services are offered, and fill out an inquiry form.
          </p>
          <p className="m-0 p-0 project-stack">React, Bootstrap</p>
          <div className="d-flex flex-row justify-content-around m-0 p-0">
            <Link
              to="https://github.com/nyashanice/Freelance-Site"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </Link>
            <Link
              to="https://www.thefaithfulpixel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Deployed
            </Link>
          </div>
        </div>
        <div className="m-2 p-1 project-card">
          <h2 className="m-0 p-0 project-title">Fast Twitch Frenzy</h2>
          <p className="m-1 p-0 project-text">
            Fast Twitch Frenzy is a fitness event for athletes of all ages. The
            website gives you information about the event, the event staff, and
            ticket information.
          </p>
          <p className="m-0 p-0 project-stack">React, Bootstrap</p>
          <div className="d-flex flex-row justify-content-around m-0 p-0">
            <Link
              to="https://github.com/nyashanice/Fast-Twitch-Frenzy"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </Link>
            <Link
              to="https://nyashanice.github.io/Fast-Twitch-Frenzy/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
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
