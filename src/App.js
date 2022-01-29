import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Tech from './Components/Tech';
import Sports from './Components/Sports';
import Finance from './Components/Finance';
import Entertainment from './Components/Entertainment';
import SearchResults from './Components/SearchResults';

const App = () => {
  const [searchText, setSearchText] = useState("");

  const searchT = (text) => {
    setSearchText(text);
  }

  return (
    <>
      <Router>
        <Navbar title="News App" dark={true} search={true} searchT={searchT} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/search" element={<SearchResults searchText={searchText} />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;

