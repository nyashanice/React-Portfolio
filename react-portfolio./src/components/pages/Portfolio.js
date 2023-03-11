import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  cardStyles: {
    width: "18rem",
    backgroundColor: "#fb6f92",
  },
  textStyles: {
    textColor: "#ffb3c6",
  },
};

export default function Portfolio() {
  return (
<div>
  <div>
    <h1 style={styles.textStyles}>Portfolio</h1>
  </div>
  <div>
    <div className="d-flex flex-row">
      <div className="card mx-auto" style={styles.cardStyles}>
        <img
          className="card-img-top"
          src="../../cardImages/basketball.jpeg"
          alt="Basketball going through hoop"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Shot Clock</h5>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/nyashanice/SHOT_CLOCK"
            className="card-link"
          >
            GitHub
          </a>
          <a href="http://shot-clock.herokuapp.com/login" className="card-link">
            Deployed Site
          </a>
        </div>
      </div>

      <div className="card mx-auto" style={styles.cardStyles}>
        <img
          className="card-img-top"
          src="../../cardImages/inspiration.png"
          alt="5 balled up pieces of paper in a row with the yellow one drawn to resemble a lightbulb"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Inspire Calendar</h5>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/nyashanice/Inspire-Calendar"
            className="card-link"
          >
            GitHub
          </a>
          <a
            href="https://nyashanice.github.io/Inspire-Calendar/"
            className="card-link"
          >
            Deployed Site
          </a>
        </div>
      </div>
    </div>

    <div className="d-flex flex-row">
      <div className="card mx-auto" style={styles.cardStyles}>
        <img
          className="card-img-top"
          src="../../cardImages/planner.jpeg"
          alt="Calendar with sticky notes on it and multiple hands reaching towards it"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Time Management Planner</h5>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/nyashanice/Time-Managament-Planner"
            className="card-link"
          >
            GitHub
          </a>
          <a
            href="https://nyashanice.github.io/Time-Managament-Planner/"
            className="card-link"
          >
            Deployed Site
          </a>
        </div>
      </div>

      <div className="card mx-auto" style={styles.cardStyles}>
        <img
          className="card-img-top"
          src="../../cardImages/notes.png"
          alt="Notepad with purple pen"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Personal Note Taker</h5>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/nyashanice/Personal-Note-Taker"
            className="card-link"
          >
            GitHub
          </a>
          <a
            href="https://personal-note-taker.herokuapp.com/"
            className="card-link"
          >
            Deployed Site
          </a>
        </div>
      </div>
    </div>

    <div className="d-flex flex-row">
      <div className="card mx-auto" style={styles.cardStyles}>
        <img
          className="card-img-top"
          src="../../cardImages/weather.jpeg"
          alt="Partly  cloudy weather with rain"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/nyashanice/Weather-Dashboard"
            className="card-link"
          >
            GitHub
          </a>
          <a
            href="https://nyashanice.github.io/Weather-Dashboard/"
            className="card-link"
          >
            Deployed Site
          </a>
        </div>
      </div>

      <div className="card mx-auto" style={styles.cardStyles}>
        <img
          className="card-img-top"
          src="../../cardImages/social_network.png"
          alt="Social icons floating from user screens"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Social Network API</h5>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/nyashanice/Social-Network-API"
            className="card-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</div>)}
