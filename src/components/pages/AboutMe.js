import React from "react";


export default function AboutMe() {
  return (
    <div id="aboutMe" className="d-flex flex-row">
      {/* title and picture */}
      <div className="d-flex flex-column w-50">
        {/* title */}
        <div>
          <h1>About Me</h1>
        </div>
        {/* picture */}
        <div>
          <img
            src="../../IMG_5699.JPG"
            alt="Author with graduation cap"
          
          ></img>
        </div>
      </div>
      {/* actual info */}
      <div className="w-50">
        <p>
          My name is Nya Tyus and I am a current student in the Georgia Tech
          Full Stack Coding Bootcamp. As a student, I have learned various tools
          and programming languages. To name a few, I have experience with
          MySQL, NoSQL, Express.js, Node.js, object oriented programming, React,
          and more! I have worked on a total of 3 group projects where we learn
          to collarboate, communicate, brainstorm, and use Git. In my free time,
          I like to travel, read, record and edit YouTube and TikTok videos, and
          cook. I also love the color pink as you can see!
        </p>
      </div>
    </div>
  );
}
