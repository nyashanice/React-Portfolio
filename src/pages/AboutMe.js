import React from "react";
import { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/AboutMe.css";

export default function AboutMe() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center about-header m-2">About Me</h1>
        <div className="about-content">
          <Card className="contact-card-bg m-3 contact-card mx-auto">
            <Card.Body className="p-2">
              <Link to="/" className="contact-text">
                <Card.Subtitle className="mb-2">&#60; Home</Card.Subtitle>
              </Link>
              <Image
                className="mx-auto d-block headshotImg"
                src="../React-Portfolio/images/headshot.png"
                alt=""
                roundedCircle
              />
              <Card.Title className="text-center">Nya Tyus 🩷</Card.Title>
              <Card.Subtitle className="text-center text-muted mb-2">
                "Tinker Bell of the tech world"
              </Card.Subtitle>
              <div className="d-flex flex-row justify-content-around text-center">
                <Card
                  className="m-0 p-1 contact-text"
                  style={{ width: "5rem" }}
                >
                  <Card.Title className="m-0 p-0">✉️</Card.Title>
                  <Link to="mailto:nyastyus@gmail.com" className="contact-text">
                    <Card.Text>email</Card.Text>
                  </Link>
                </Card>
                <Card
                  className="m-0 p-1 contact-text"
                  style={{ width: "5rem" }}
                >
                  <Card.Title className="m-0 p-0">🔗</Card.Title>
                  <Link
                    to="https://www.linkedin.com/in/nyatyus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-text"
                  >
                    <Card.Text>connect</Card.Text>
                  </Link>
                </Card>
                <Card
                  className="m-0 p-1 contact-text"
                  style={{ width: "5rem" }}
                >
                  <Card.Title className="m-0 p-0">💻</Card.Title>
                  <Link
                    to="https://github.com/nyashanice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-text"
                  >
                    <Card.Text>follow</Card.Text>
                  </Link>
                </Card>
              </div>
              <div className="contact-div m-1 mb-2 mt-2">
                <p className="m-0 p-0">tech stack</p>
                <p className="m-0 p-0 contact-text">
                  MERN, MySQL, JavaScript, Excel
                </p>
              </div>
              <div className="contact-div m-1 mb-2 mt-2">
                <p className="m-0 p-0">interests</p>
                <p className="m-0 p-0 contact-text">
                  cooking, reading, traveling
                </p>
              </div>
              <div className="contact-div m-1 contact-text">
                <Link to="mailto:nyastyus@gmail.com" className="contact-text">
                  <div className="p-2 contact-list-group">Send Message</div>
                </Link>
                <div
                  ref={target}
                  onClick={() =>
                    navigator.clipboard.writeText("http://localhost:3000") &&
                    setShow(!show)
                  }
                  className="p-2 contact-list-group"
                >
                  Share Contact
                </div>
                <Overlay target={target.current} show={show} placement="top">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Link copied to clipboard!
                    </Tooltip>
                  )}
                </Overlay>
                <div className="p-2">Add to Favorites</div>
              </div>
            </Card.Body>
          </Card>
          <div className="about-main-txt m-3">
            <p>
              My name is Nya Tyus and I hold a B.S. in Biology from Clayton
              State University and I am a graduate of the Georgia Tech Full
              Stack Coding Bootcamp. As a college student, I learned to use
              statistical analysis tools in Excel and RStudio which I used in
              multiple labs and lectures over the years. As a bootcamp student,
              I learned various tools and programming languages. To name a few,
              I have experience with MERN stack (MongoDB, Express.js, React,
              Node.js), MySQL, JavaScript, and more!
            </p>
            <p>
              As a student, I've worked on group projects where I learned to
              collaborate, communicate, brainstorm, and use Git. I also worked
              on numerous solo coding projects and assignments and I continue to
              do so currently.
            </p>
            <p>
              In my free time, I like to travel, read, record and edit YouTube
              and TikTok videos, and cook. I also love the color pink as you can
              see!
            </p>
            <p>Currently learning: Python</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
