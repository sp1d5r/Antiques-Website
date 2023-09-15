import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Router>
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
