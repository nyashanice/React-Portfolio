import React from "react";
import 'bulma/css/bulma.min.css'

export default function App() {
  return (
    // <nav>
    //   <ul>
    //     <li><a href="#aboutMe">About Me</a></li>
    //     <li><a href="#portfolio">Portfolio</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //     <li><a href="#resume">Resume</a></li>
    //   </ul>
    // </nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#aboutMe">
        About Me
      </a>

      <a class="navbar-item" href="#portfolio">
        Portfolio
      </a>

      <a class="navbar-item" href="#contact">
        Conatct
      </a>

      <a class="navbar-item" href="#resume">
        Resume
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        </div>
      </div>
    </div>
  </div>
</nav> );
}