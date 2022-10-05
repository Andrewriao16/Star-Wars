import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Favorite from "./components/Fav";
import Description from './components/Description';
import Navigation from "./components/UI/Nav";

import { PeopleProvider } from "./components/context/PeopleProvider";


function App() {
  return (
    <PeopleProvider>
      <Router>
        <Navigation />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/description/:name" element={<Description />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </PeopleProvider>
  )
}

export default App;
