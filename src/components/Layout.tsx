import React, { FC } from 'react';
import 'normalize.css';
import { Helmet } from 'react-helmet';
import SEO from './SEO';

type Props = {
  location?: Location;
};

const Layout: FC<Props> = ({ location, children }) => {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width" />
      </Helmet>
      {location && <SEO pathname={location.pathname} />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
