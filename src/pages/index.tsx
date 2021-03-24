/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { css, jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { black, borderGray, navajoWhite, pastelOrange } from '../lib/color';
import { rgba } from '../lib/utils/rgba';
import { IndexPageQuery } from '../../types/graphql-types';
import { kosuketwitterUrl, kurokenTwitterUrl } from '../lib/data/urls';

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    squareLogo: file(relativePath: { eq: "square-logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 330, height: 330, layout: FIXED)
      }
    }
    kosukeIcon: file(relativePath: { eq: "icon-kosuke.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, height: 100, layout: FIXED)
      }
    }
    kurokenIcon: file(relativePath: { eq: "icon-kuroken.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, height: 100, layout: FIXED)
      }
    }
  }
`;

const indexList = [...Array(11)].map((_, i) => 11 - i);

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
type Props = {
  location: Location;
  data: IndexPageQuery;
};

const IndexPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div css={topStyle}>
        <div css={topProfileStyle}>
          <GatsbyImage
            image={data.squareLogo?.childImageSharp?.gatsbyImageData}
            css={topImageStyle}
            alt="ロゴ画像"
          />

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
              <a
                href={kurokenTwitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                css={topBioWrapperStyle}
              >
                <GatsbyImage
                  image={data.kurokenIcon?.childImageSharp?.gatsbyImageData}
                  css={topBioImageStyle}
                  alt="くろけんのアイコン画像"
                />
                <div css={topBioNameStyle}>くろけん</div>
              </a>
              <a
                href={kosuketwitterUrl}
                target="_blank"
                rel="noopener noreferrer "
                css={topBioWrapperStyle}
              >
                <GatsbyImage
                  image={data.kosukeIcon?.childImageSharp?.gatsbyImageData}
                  css={topBioImageStyle}
                  alt="こうすけのアイコン画像"
                />
                <div css={topBioNameStyle}>こうすけ</div>
              </a>
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
          {indexList.map((i) => (
            <div css={topEpisodeStyle} key={i}>
              {/* TODO: <Link to={'/episode/' + i}> に直す */}
              <Link to="/episode/" css={topEpisodeLinkStyle}>
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
          ))}
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
  text-decoration: none;
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
  padding: 16px 8px;
  border-radius: 8px;
  border: 1px solid ${borderGray};
  background-color: ${pastelOrange};

  & + & {
    margin-top: 20px;
  }
`;

const topEpisodeLinkStyle = css`
  text-decoration: none;
`;

const topEpisodeDataStyle = css`
  font-size: 1rem;
  font-weight: bold;
`;

const topEpisodeTitleStyle = css`
  font-size: 1.25rem;
  margin-top: 16px;
`;

const topEpisodeExplainStyle = css`
  font-size: 1rem;
  margin-top: 16px;
`;

export default IndexPage;
