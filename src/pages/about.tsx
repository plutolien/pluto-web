import React from 'react'
import Layout from '../components/layout/Layout';
import Link from 'next/link'

function about() {
  return (
    <Layout>
      <Link href="/">
        about
      </Link>
    </Layout>

  )
}

export default about