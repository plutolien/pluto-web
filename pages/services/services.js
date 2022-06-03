import Head from "next/head";
import React from 'react'
import Layout from '../../components/Layout/Layout'

function services() {
  return (
    <div>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        Services
      </Layout>
    </div>
  )
}

export default services