import React from "react";
import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import WhyBragility from "./pages/whyBragility/WhyBragility";
import TheSolution from "./pages/theSolution/TheSolution";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import Employees from "./pages/employees/Employees";
import Faq from "./pages/FAQ/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/whyBragility" element={<WhyBragility />}></Route>
            <Route path="/theSolution" element={<TheSolution />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
