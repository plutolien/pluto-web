import React from "react";
import Layout from "../components/layout/Layout";
import About from "../components/About/about";
import Brands from "../components/Brands/brands";
import Hero from "../components/Hero/hero";
import Portfolio from "../components/portfolio/portfolio";
import Service from "../components/Service/service";
import Counter from "../components/Counter/counter";
import Fact from "../components/Facts/facts";
import Testimonial from "../components/Testimonial/testimonial";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Service />
      <Counter/>
      <Fact/>
      <Portfolio />
      <Brands />
      <Testimonial/>
    </Layout>
  );
}

export default Home;
