import React from 'react';
import './global.css';
import HeroSection from './components/HeroSection/HeroSection';
import HomeHeader from './components/HomeHeader/HomeHeader';
import SpacingSection from './components/Spacing/SpacingSection';
import SizeSection from './components/Sizing/SizeSection';
import ImagesSection from './components/Images/ImagesSection';
import Guidance from './components/Guidance/GuidanceSection';
import Animation from './components/Animation/AnimationSection';

function App() {
  return (
    <div>
      <HomeHeader/>
      <HeroSection />
      <SpacingSection/>
      <SizeSection/>
      <ImagesSection/>
      <Guidance/>
      <Animation/>
    </div>
  );
}

export default App;
