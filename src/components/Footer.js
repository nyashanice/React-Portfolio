import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  logoStyles: {
    width: "2rem",
  },
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <a href="https://www.linkedin.com/in/nyatyus/">
          <img src="../../linkedin.png" alt="LinkedIn logo" style={styles.logoStyles}></img>
        </a>
        <a href="https://github.com/nyashanice">
          <img src="../../github.png" alt="GitHub logo" style={styles.logoStyles}></img>
        </a>
      </div>
    </footer>
  );
}
