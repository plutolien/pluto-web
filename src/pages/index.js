import Head from "next/head";
import Feature from "../pages/feature/Feature";
import Hero from "../pages/hero/Hero";
import Layout from "../components/Layout/Layout";
// import Testimoni from "../pages/testimonial/Testimoni";

export default function Home() {
  return (
    <>
      <Head>
        <title>Plutolien | Software</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        {/* <Testimoni/> */}
      </Layout>
    </>
  );
}
