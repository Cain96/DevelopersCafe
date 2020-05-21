import React, { FC } from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';

type Props = {
  location: Location;
};

const SecondPage: FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};

export default SecondPage;
