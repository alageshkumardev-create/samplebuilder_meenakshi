import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Accordion  from './components/Accordion';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Founder from './pages/Founder';
import Leadership from './pages/Leadership';
import CompletedProjects from './pages/CompletedProjects';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import OngoingProjects from './pages/OngoingProjects';
import ProjectDetail from './pages/ProjectDetail';
import Media from './pages/Media';
// import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/media" element={<Media />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
