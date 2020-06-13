import React, { FC } from 'react';

import '../styles/layout.css';
import { css } from '@emotion/core';
import SEO from './SEO';

type Props = {
  location?: Location;
};

const Layout: FC<Props> = ({ location, children }) => {
  return (
    <div>
      {location && <SEO pathname={location.pathname} />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
