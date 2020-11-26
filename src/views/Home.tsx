import React from 'react';
import HeroView from './Hero';
import AboutView from './About';

const HomeView: React.FC = () => {
  return (
    <>
      <HeroView />

      <div style={{ height: '100vh' }} />
      <AboutView />
    </>
  );
};

export default HomeView;
