import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Navigation({currentPage, handlePageChange}) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          href="/"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <h1 className="navbar-item">Nya Tyus</h1>
          <a
            className="navbar-item {currentPage === 'About Me' ? 'active'}"
            href="#aboutMe"
            onClick={() => handlePageChange("About Me")}
          >
            About Me
          </a>

          <a
            className="navbar-item {currentPage === 'Portfolio' ? 'active'"
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </a>

          <a
            className="navbar-item {currentPage === 'Contact' ? 'active'"
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Conatct
          </a>

          <a
            className="navbar-item {currentPage === 'Resume' ? 'active'"
            href="#resume"
          >
            Resume
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
