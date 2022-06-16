import React from 'react'
import Layout from '../components/layout/Layout';
import Link from 'next/link'

function news() {
  return (
    <Layout>
      <Link href="/">
        news
      </Link>
    </Layout>

  )
}

export default news