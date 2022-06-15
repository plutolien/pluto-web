import * as React from 'react';

import Layout from '../components/layout/Layout';
import About from '../pages/About/about';
import Brands from '../pages/Brands/brands';
import Hero from '../pages/Hero/hero';
import Portfolio from '../pages/portfolio/portfolio';
import Service from '../pages/Service/service';

export default function HomePage() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Brands/>
    </Layout>
  );
}
