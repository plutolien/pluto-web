import Head from "next/head";
import React from 'react'
import Layout from '../../components/Layout/Layout'

function contact() {
  return (
    <div>
    <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          Contact
      </Layout>
    </div>
  )
}

export default contact