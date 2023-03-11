// import logo from './logo.svg';
// import './App.css';

import React from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const setPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      {setPage()}
      <Footer />
    </div>
  );
}
