import React from 'react'
import Layout from '../components/layout/Layout';
import Link from 'next/link'

function store() {
  return (
    <Layout>
      <Link href="/">
        store
      </Link>
    </Layout>

  )
}

export default store