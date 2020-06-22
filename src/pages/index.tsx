/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
type Props = {
  location: Location;
  data: {
    squareLogo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    kosukeIcon: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    kurokenIcon: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
  };
};

// FIXME: font-size を em → remに修正
const topStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 0;
  font-size: 10px;
`;

const topProfileStyle = css`
  flex-basis: 25%;
  margin-right: 36px;
`;

const topLogoStyle = css`
  width: 330px;
`;

const topInfoStyle = css`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-size: 2em;
`;

const topStarringStyle = css`
  margin-top: 20px;
`;

const topStarringTitleStyle = css`
  font-size: 4em;
  border-bottom: 1px solid #707070;
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
  background-color: navajowhite;
`;

const topBioNameStyle = css`
  margin-top: 20px;
  font-size: 2.4em;
`;

const topAboutLinkStyle = css`
  display: block;
  color: hsla(0, 0%, 0%, 0.8);
  text-align: center;
  margin-top: 28px;
  font-size: 4em;
`;

const topEpisodesContainerStyle = css`
  flex-basis: 75%;
`;

const topEpisodeStyle = css`
  padding: 16px 0;

  & + & {
    border-top: 1px solid #707070;
  }
`;

const topEpisodeDateStyle = css`
  font-size: 2em;
  font-weight: bold;
`;

const topEpisodeTitleStyle = css`
  font-size: 4em;
  margin: 16px 0 0;
`;

const topEpisodeExplainStyle = css`
  font-size: 2em;
  margin-top: 16px;
`;

const IndexPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div css={topStyle}>
        <div css={topProfileStyle}>
          <Img css={topLogoStyle} alt="ロゴ画像" fixed={data.squareLogo.childImageSharp.fixed} />

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
                <Img
                  css={topBioImageStyle}
                  alt="アイコン画像"
                  fixed={data.kurokenIcon.childImageSharp.fixed}
                />
                <div css={topBioNameStyle}>くろけん</div>
              </div>

              <div css={topBioWrapperStyle}>
                <Img
                  css={topBioImageStyle}
                  alt="アイコン画像"
                  fixed={data.kosukeIcon.childImageSharp.fixed}
                />
                <div css={topBioNameStyle}>こうすけ</div>
              </div>
            </div>
          </div>

          <Link to="/about/">
            <h2 css={topAboutLinkStyle}>
              About Us
              <i className="fas fa-arrow-right" />
            </h2>
          </Link>
        </div>

        <div css={topEpisodesContainerStyle}>
          {((): JSX.Element => {
            const index = [...Array(11)].map((_, i): number => 11 - i);
            let episodes: Array<JSX.Element> = [];
            episodes = index.map((i) => {
              return (
                <div css={topEpisodeStyle}>
                  {/* TODO: <Link to={'/episode/' + i}> に直す */}
                  <Link to="/episode/">
                    <div css={topEpisodeDateStyle}>2020/XX/XX</div>

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

export const pageQuery = graphql`
  query IndexQuery {
    squareLogo: file(relativePath: { eq: "square-logo.png" }) {
      childImageSharp {
        fixed(width: 330, height: 330) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kosukeIcon: file(relativePath: { eq: "icon-kosuke.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kurokenIcon: file(relativePath: { eq: "icon-kuroken.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
