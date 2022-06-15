import React from 'react'
import Layout from '../../components/layout/Layout';
import About from '../../components/About/about';
import Brands from '../../components/Brands/brands';
import Hero from '../../components/Hero/hero';
import Portfolio from '../../components/portfolio/portfolio';
import Service from '../../components/Service/service';

function Home() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Brands/>
    </Layout>
  )
}

export default Home