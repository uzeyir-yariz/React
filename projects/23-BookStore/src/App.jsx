import "bulma/css/bulma.css";
import React from "react";

// component
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// router
import { Route, Routes } from "react-router-dom";

// router pages
import Home  from "./pages/Home.jsx"
import About  from "./pages/About.jsx"
import Contact  from "./pages/Contact.jsx"

// lazy
const Bookshelf = React.lazy(() => import("./pages/Bookshelf.jsx"));


function App() {
  return (
   <>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
    
    <Footer />
   </>
  );
}

export default App;
