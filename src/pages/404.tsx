import React, { FC } from 'react';
import Layout from '../components/Layout';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
