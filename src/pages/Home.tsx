import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import AIModels from '../sections/AIModels';
import BuildOnData from '../sections/BuildOnData';
import PowerfulFeatures from '../sections/PowerfulFeatures';
import Plugins from '../sections/Plugins';
import Process from '../sections/Process';
import CaseStudies from '../sections/CaseStudies';
import CTA from '../sections/CTA';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Process />
      <CaseStudies />
      <Pricing />
      <AIModels />
      <BuildOnData />
      <PowerfulFeatures />
      <Plugins />
      <CTA />
    </>
  );
};

export default Home;
