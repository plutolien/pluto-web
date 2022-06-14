import Head from "next/head";
import type { NextPage } from "next";

import Layout from "../components/Layout/layout";
import Hero from "../pages/Hero/hero";
import About from "../pages/About/about";
import Service from "../pages/Service/service";
import Projects from "../pages/projects/projects";
import Brand from "../pages/Brand/brand";
// import Testimonial from "../pages/Testimonial/testimonial";


const Home: NextPage = () => {
  return (
    <div>
      {/* Head Start */}
      <Head>
        <title>Plutolien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Head End */}

      {/* Layout Start */}
      <Layout>
        <Hero/>
        <About/>
        <Service/>
        <Projects/>
        <Brand/>
        {/* <Testimonial/> */}
      </Layout> 
      {/* Layout End      */}
    </div>
  );
};

export default Home;
