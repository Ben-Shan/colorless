import React from 'react';
import './global.css';
import HeroSection from './components/HeroSection/HeroSection';
import HomeHeader from './components/HomeHeader/HomeHeader';
import SpacingSection from './components/Spacing/SpacingSection';
import SizeSection from './components/Sizing/SizeSection';
import ImagesSection from './components/Images/ImagesSection';
import Guidance from './components/Guidance/GuidanceSection';

function App() {
  return (
    <div>
      <HomeHeader/>
      <HeroSection />
      <SpacingSection/>
      <SizeSection/>
      <ImagesSection/>
      <Guidance/>
    </div>
  );
}

export default App;
