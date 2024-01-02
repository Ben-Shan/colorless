import React from 'react';
import './global.css';
import HeroSection from './components/HeroSection/HeroSection';
import HomeHeader from './components/HomeHeader/HomeHeader';
import SpacingSection from './components/Spacing/SpacingSection';

function App() {
  return (
    <div>
      <HomeHeader/>
      <HeroSection />
      <SpacingSection/>
    </div>
  );
}

export default App;
