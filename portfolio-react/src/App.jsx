import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

function App() {

  return (

    <BrowserRouter>

      <ThemeToggle />
      

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/projects" 
          element={<Projects />} 
        />


        <Route 
          path="/about" 
          element={<About />} 
        />


        <Route 
          path="/skills" 
          element={<Skills />} 
        />


        <Route 
          path="/contact" 
          element={<Contact />} 
        />


        <Route 
          path="/admin" 
          element={<Admin />} 
        />

<Footer />
<ScrollToTop />
      </Routes>

    </BrowserRouter>

  );

}


export default App;