// src/App.jsx
import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Specials from './components/Specials';
import Highlights from './components/Highlights';
import Dining from './components/Dining';
import Reviews from './components/Reviews';
import FollowUs from './components/FollowUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <TopBar />
        <Navbar />
      </header>

      <main>
        <Hero />
        <Menu />
        <Experience />
        <Specials />
        <Highlights />
        <Dining />
        <Reviews />
        <FollowUs />
        <Contact />
      </main>
      
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default App;