import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

// import './layout.css';
import { css } from '@emotion/core';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
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
