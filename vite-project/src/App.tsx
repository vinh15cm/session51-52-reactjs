import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import About2 from './components/About2'
import Contact2 from './components/Contact2'
import Elements from './components/Elements'
import Services from './components/Services'
import Index from './components/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route><Route path="/" element={<About2 />} /></Route>
          <Route><Route path="/" element={<Contact2 />} /></Route>
          <Route><Route path="/" element={<Elements />} /></Route>
          <Route><Route path="/" element={<Services />} /></Route>
          <Route><Route path="/" element={<Index />} /></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

