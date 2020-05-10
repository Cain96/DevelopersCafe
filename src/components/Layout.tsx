import React, { FC } from 'react';

import './layout.css';
import { css } from '@emotion/core';
import SEO from './SEO';
import Header from './Header';

type Props = {
  location?: Location;
};

const Layout: FC<Props> = ({ location, children }) => {
  return (
    <div>
      {location && <SEO pathname={location.pathname} />}
      <Header />
      <div
        css={css({
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        })}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
