import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Home from "./component/Home";
import Intro from "./sub/Intro";
import API from "./sub/API";
import Contact from "./sub/Contact";
import NotFound from "./sub/NotFound";
import MovieDetail from "./sub/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/api" element={<API />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
