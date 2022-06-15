import * as React from 'react';

import Seo from '@/components/Seo';

import Layout from '../components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />
      404 Not Found
    </Layout>
  );
}
