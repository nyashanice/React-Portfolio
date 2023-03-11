import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <a href="https://www.linkedin.com/in/nyatyus/">
          <img src="../../public/linkedin.png" alt="LinkedIn logo"></img>
        </a>
        <a href="https://github.com/nyashanice">
          <img src="../../public/github.png" alt="GitHub logo"></img>
        </a>
      </div>
    </footer>
  );
}
