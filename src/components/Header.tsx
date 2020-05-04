import React, { FC } from 'react';
import Link from 'gatsby-link';
import { css } from '@emotion/core';

const Header: FC = () => {
  return (
    <div
      css={css({
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      })}
    >
      <div
        css={css({
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        })}
      >
        <h1
          css={css({
            margin: 0,
          })}
        >
          <Link
            to="/"
            css={css({
              color: 'white',
              textDecoration: 'none',
            })}
          >
            Gatsby
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
