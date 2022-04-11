import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './Component/Nav'
import Explore from './Component/Top/Explore'
import Converter from './Component/converter/CurrencyConverter';
import Search from "./Component/AllCurr/Search"
import News from './Component/Newz/Newz';
import Contact from './Component/Newz/Sec3';
import Error from "./Component/Error";
import Footer from "./Component/Footer"

function App() {
  return (
    <>
 {/* <Router>
      <Nav  />
        <Routes>
          <Route exact path="/" element={<Explore/>}/>
          <Route  path="/search" element={<Search/>}/>
          <Route  path = "/converter" element = {<Converter /> } />
          <Route  path = "/news" element = {<News /> } />
          <Route  path = "/contact" element = {<Contact /> } />

          <Route path="*" element={<Error/>}/>
        </Routes> 
      <Footer />
    </Router>  */}


  <Nav />
  <Explore />
  <Converter />
  <Search />
  <News />
  <Contact />
  <Footer />
  
  </>
  );
}

export default App;
