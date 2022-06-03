import Head from "next/head";
import React from 'react'
import Layout from '../../components/Layout/Layout'

function projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        Projects
      </Layout>
    </div>
  )
}

export default projects