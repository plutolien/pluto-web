import Head from "next/head";
import Feature from "../components/Feature";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Service from "../components/Service";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Plutolien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Service/>
        <Counter/>
        <Services />
      </Layout>
    </>
  );
}
