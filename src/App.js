import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

// import About from './pages/About'; // Adjust the path as needed
// import Services from './pages/Services'; // Adjust the path as needed
// import Contact from './pages/Contact'; // Adjust the path as needed

const App = () => {
  return (
    <Router>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
