import React from 'react';
import './stylesheets/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Work from './Work';
import About from './About';

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Footer />
  </div>
);


export default App;
