import React from 'react';
import './stylesheets/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import './stylesheets/Fonts.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Contact />
    <Footer />
  </div>
);


export default App;
