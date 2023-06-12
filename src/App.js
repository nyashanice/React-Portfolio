import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";

export default function App() {
  return (
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}