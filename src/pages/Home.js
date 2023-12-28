import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-bg home-cols">
      <div className="home-left">
        <div className="home-name p-2 pb-0 pt-5">Nya Tyus</div>
        {/* <div className="home-subtitle p-2 pt-0">
        AKA Tinker Bell of the tech world
      </div> */}
        <div className="home-title p-2">[Data Analyst]</div>
      </div>
      <div className="home-right">
        <ul className="home-nav-list text-center p-0 mt-3">
          <Link to="/about" className="home-list-item">
            <li className="p-3">About</li>
          </Link>
          <Link to="/portfolio" className="home-list-item">
            <li className="p-3">Portfolio</li>
          </Link>
          <Link
            to="https://docs.google.com/document/d/1mxySfbGPRAebNYT9sg1TugIC9A6-xjTFVPPQhXeQBwY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="home-list-item"
          >
            <li className="p-3">Resume</li>
          </Link>
        </ul>
        <div className="d-flex flex-row justify-content-center">
          <Link to="mailto:nyastyus@gmail.com">
            <img
              src="../React-Portfolio/images/email.png"
              alt=""
              className="home-icon m-2"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/nyatyus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../React-Portfolio/images/linkedin.png"
              alt=""
              className="home-icon m-2"
            />
          </Link>
          <Link
            to="https://github.com/nyashanice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../React-Portfolio/images/github.png"
              alt=""
              className="home-icon m-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
