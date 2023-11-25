import React from 'react'
import './App.css';

// components
import Home from './components/Home';
import About from './components/About';

// react-router-dom 
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />\ */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
