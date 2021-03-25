import React, { FC } from 'react';
import 'normalize.css';
import { Helmet } from 'react-helmet';
import SEO from './SEO';

type Props = {
  location?: Location;
  title?: string;
};

const Layout: FC<Props> = ({ location, title, children }) => {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width" />
      </Helmet>
      {location && <SEO pathname={location.pathname} title={title} />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
