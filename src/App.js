import './App.css';
//import {CFooter} from './components/CFooter'
//import CHeader from './components/CHeader'
//import CContents from './components/CContents'
//import COuter from './components/COuter'

import React from "react";
//import logo from "./logo.svg";
import { Component } from "react";
//import HeaderComponent from "./components/HeaderComponent";
//import Navbar from "./components/NavbarComponent";

import { BrowserRouter as Router, Route, Routes, /*Link*/ } from "react-router-dom";
import Rasy from "./pages/Rasy";
import Home from "./pages/Home";
import Opieka from "./pages/Opieka";
import Stadniny from "./pages/Stadniny";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Rasy" element={<Rasy />} />
            <Route path="/Stadniny" element={<Stadniny />} />
            <Route path="/Opieka" element={<Opieka />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
