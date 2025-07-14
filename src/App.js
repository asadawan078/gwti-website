import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CarbonTracker from './components/CarbonTracker';
import CarbonResultsDashboard from './components/CarbonResultsDashboard';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CarbonTracker />
      <CarbonResultsDashboard />
      <NewsFeed />
      <Footer />
    </>
  );
}

export default App;