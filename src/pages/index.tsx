/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { css, jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { black, borderGray, navajoWhite } from '../lib/color';
import { rgba } from '../lib/utils/rgba';

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
type Props = {
  location: Location;
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const IndexPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div css={topStyle}>
        <div css={topProfileStyle} className="top__profile">
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <div css={topImageStyle} />

          <div css={topInfoStyle}>
            <span>
              新卒ソフトウェアエンジニアが送る
              <br />
              テック系ポッドキャスト。
              <br />
              ご意見・ご感想は #DevelopersCafe
              <br />
              またはdevelopers.cafe.podcast@gmail.com まで
            </span>
          </div>

          <div css={topStarringStyle}>
            <h2 css={topStarringTitleStyle}>Starring</h2>
            <div css={topBioContainerStyle}>
              <div css={topBioWrapperStyle}>
                <div css={topBioImageStyle} />
                <div css={topBioNameStyle}>くろけん</div>
              </div>
              <div css={topBioWrapperStyle}>
                <div css={topBioImageStyle} />
                <div css={topBioNameStyle}>こうすけ</div>
              </div>
            </div>
          </div>

          <Link to="/about/">
            <h2 css={topAboutLinkStyle}>
              About Us
              {/* TODO: font-awesome のパッケージをインストールする */}
              <i className="fas fa-arrow-right" />
            </h2>
          </Link>
        </div>

        <div css={topEpisodesContainerStyle}>
          {(() => {
            const index = [...Array(11)].map((_, i) => 11 - i);
            let episodes: Array<JSX.Element> = [];
            episodes = index.map((i) => {
              return (
                <div css={topEpisodeStyle} key={i}>
                  {/* TODO: <Link to={'/episode/' + i}> に直す */}
                  <Link to="/episode/">
                    <div css={topEpisodeDataStyle}>2020/XX/XX</div>

                    <h2 css={topEpisodeTitleStyle}>#{i}: 新社会人の春</h2>

                    <div css={topEpisodeExplainStyle}>
                      ここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入ります
                      {/*
                       */}
                      ここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキスト
                    </div>
                  </Link>
                </div>
              );
            });
            return <ul>{episodes}</ul>;
          })()}
        </div>
      </div>
    </Layout>
  );
};

const topStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 0;
`;

const topProfileStyle = css`
  flex-basis: 25%;
  margin-right: 36px;
`;

const topImageStyle = css`
  width: 100%;
  background-color: ${navajoWhite};
  display: block;

  &:before {
    padding-top: 100%;
    display: block;
    background-color: ${navajoWhite};
    content: '';
  }
`;

const topInfoStyle = css`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-size: 1.25rem;
`;

const topStarringStyle = css`
  margin-top: 20px;
`;

const topStarringTitleStyle = css`
  font-size: 2.5rem;
  border-bottom: 1px solid ${borderGray};
  text-align: center;
`;

const topBioContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const topBioWrapperStyle = css`
  margin: auto;
  text-align: center;
`;

const topBioImageStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${navajoWhite};
`;

const topBioNameStyle = css`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const topAboutLinkStyle = css`
  display: block;
  color: ${rgba(black, 0.8)};
  text-align: center;
  margin-top: 28px;
  font-size: 2.5rem;
`;

const topEpisodesContainerStyle = css`
  flex-basis: 75%;
`;

const topEpisodeStyle = css`
  padding: 16px 0;

  & + & {
    border-top: 1px solid ${borderGray};
  }
`;

const topEpisodeDataStyle = css`
  font-size: 1.25rem;
  font-weight: bold;
`;

const topEpisodeTitleStyle = css`
  font-size: 2.5rem;
  margin-top: 16px;
`;

const topEpisodeExplainStyle = css`
  font-size: 1.25rem;
  margin-top: 16px;
`;

export default IndexPage;
