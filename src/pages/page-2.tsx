import React, { FC } from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';

const SecondPage: FC = () => {
  return (
    <Layout>
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};

export default SecondPage;
