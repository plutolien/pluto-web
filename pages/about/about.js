import Head from "next/head";
import React from 'react'
import Layout from '../../components/Layout/Layout'

function about() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        About
      </Layout>
    </div>
  )
}

export default about