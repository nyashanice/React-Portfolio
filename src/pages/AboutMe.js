import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    // <div id="aboutMe" className="d-flex flex-row">
    //   {/* title and picture */}
    //   <div className="d-flex flex-column w-50">
    //     {/* title */}
    //     <div>
    //       <h1>About Me</h1>
    //     </div>
    //     {/* picture */}
    //     <div>
    //       <img
    //         src="../../IMG_5699.JPG"
    //         alt="Author with graduation cap"

    //       ></img>
    //     </div>
    //   </div>
    //   {/* actual info */}
    //   <div className="w-50">
    //     <p>
    //       My name is Nya Tyus and I am a current student in the Georgia Tech
    //       Full Stack Coding Bootcamp. As a student, I have learned various tools
    //       and programming languages. To name a few, I have experience with
    //       MySQL, NoSQL, Express.js, Node.js, object oriented programming, React,
    //       and more! I have worked on a total of 3 group projects where we learn
    //       to collarboate, communicate, brainstorm, and use Git. In my free time,
    //       I like to travel, read, record and edit YouTube and TikTok videos, and
    //       cook. I also love the color pink as you can see!
    //     </p>
    //   </div>
    // </div>
    <div>
      <Card className="contact-card-bg">
        <Card.Body className="p-2">
          <Card.Subtitle className="mb-2 text-muted">&#60; Home</Card.Subtitle>
          <Image
            className="mx-auto d-block headshotImg"
            src="../images/headshot.png"
            alt=""
            roundedCircle
          />
          <Card.Title className="text-center">Nya Tyus 🩷</Card.Title>
          <Card.Subtitle className="text-center">
            "Tinker Bell of the tech world"
          </Card.Subtitle>
          <div className="d-flex flex-row justify-content-around text-center">
            <Card className="m-0 p-1 contact-text" style={{ width: "5rem" }}>
              <Card.Title className="m-0 p-0">✉️</Card.Title>
              <Card.Text>Email</Card.Text>
            </Card>
            <Card className="m-0 p-1 contact-text" style={{ width: "5rem" }}>
              <Card.Title className="m-0 p-0">🔗</Card.Title>
              <Card.Text>Connect</Card.Text>
            </Card>
            <Card className="m-0 p-1 contact-text" style={{ width: "5rem" }}>
              <Card.Title className="m-0 p-0">💻</Card.Title>
              <Card.Text>Follow</Card.Text>
            </Card>
          </div>
          <div className="contact-div m-1">
            <p className="m-0 p-0">tech stack</p>
            <p className="m-0 p-0 contact-text">MERN, MySQL, JavaScript</p>
          </div>
          <div className="contact-div m-1">
            <p className="m-0 p-0">interests</p>
            <p className="m-0 p-0 contact-text">cooking, reading, traveling</p>
          </div>
          <ListGroup variant="list-group-flush" className="contact-text">
            <ListGroup.Item>Send Message</ListGroup.Item>
            <ListGroup.Item>Share Contact</ListGroup.Item>
            <ListGroup.Item>Add to Favorites</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
