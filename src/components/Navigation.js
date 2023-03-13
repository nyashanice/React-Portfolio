import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  nav: {
    background: '#ffb3c6',
  },
};

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={styles.nav}
    >
      <h1>Nya Tyus</h1>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item active">
            <a
              href="#aboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://docs.google.com/document/d/1CxE84TLEQTlU-VEgh5_n1IS3XcxpDtly30RFOQFtGHo/edit"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
