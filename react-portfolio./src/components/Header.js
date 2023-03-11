import React, {useState} from 'react';
import Navigation from "./Navigation";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


import "bootstrap/dist/css/bootstrap.css";

export default function Header() {

const [currentPage, setCurrentPage] = useState("AboutMe");

const setPage = () => {
  if (currentPage === "AboutMe") {
    return <AboutMe />;
  }
  if (currentPage === "Portfolio") {
    return <Portfolio />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }

};

const handlePageChange = (page) => setCurrentPage(page);


return (
  <header>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    {setPage()}
  </header>
);
}