import React from 'react';
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import HomeHeader from './components/HomeHeader/HomeHeader';
import SpacingSection from './components/Spacing/SpacingSection';
import SizeSection from './components/Sizing/SizeSection';
import ImagesSection from './components/Images/ImagesSection';
import Guidance from './components/Guidance/GuidanceSection';
import Animation from './components/Animation/AnimationSection';
import Footer from './components/Footer/footer';

import ErrorPage from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <HomeHeader/>
      <Routes>
        <Route path="/" element={(
            <>
              <HeroSection />
              <SpacingSection/>
              <SizeSection/>
              <ImagesSection/>
              <Guidance/>
              <Animation/>
            </>
          )} />
        <Route path="/Error" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
