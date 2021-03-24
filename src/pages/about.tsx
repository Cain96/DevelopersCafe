/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { css, jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import { black, borderGray, navajoWhite } from '../lib/color';
import { rgba } from '../lib/utils/rgba';
import { AboutPageQuery } from '../../types/graphql-types';

export const pageQuery = graphql`
  query AboutPage {
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

type Props = {
  location: Location;
  data: AboutPageQuery;
};

const AboutPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div css={aboutStyle}>
        <div css={aboutProfileStyle}>
          <GatsbyImage
            image={data.squareLogo?.childImageSharp?.gatsbyImageData}
            css={aboutImageStyle}
            alt="ロゴ画像"
          />

          <div css={aboutInfoStyle}>
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

          <Link to="/">
            <h2 css={aboutIndexLinkStyle}>Episodes</h2>
          </Link>
        </div>

        <div css={aboutStarringStyle}>
          <h2 css={aboutStarringTitleStyle}>Starring</h2>
          <div css={aboutBioContainerStyle}>
            <div css={aboutBioWrapperStyle}>
              <GatsbyImage
                image={data.kurokenIcon?.childImageSharp?.gatsbyImageData}
                css={aboutBioImageStyle}
                alt="くろけんのアイコン画像"
              />
              <div css={aboutBioNameStyle}>くろけん</div>
              <div css={aboutBioTextStyle}>
                <span>
                  普段はユーザーに価値を届けるための仮説検証を回しており、施策設計、その効果検証、バックエンドからフロントエンドまで幅広くやっています。
                  <br />
                  ユーザーのことを考えたサービス開発をすることが好きです。
                  <br />
                  デザイン領域に興味があり、デザインとエンジニアリングの行き来をするようなサービス開発をするにはどうしたらよいか日々考えています。
                </span>
              </div>
            </div>

            <div css={aboutBioWrapperStyle}>
              <GatsbyImage
                image={data.kosukeIcon?.childImageSharp?.gatsbyImageData}
                css={aboutBioImageStyle}
                alt="こうすけのアイコン画像"
              />
              <div css={aboutBioNameStyle}>こうすけ</div>
              <div css={aboutBioTextStyle}>
                <span>
                  自己紹介ですエンジニアです
                  <br />
                  自己紹介ですエンジニアですです
                  <br />
                  自己紹介ですエンジニアですですです
                  <br />
                  自己紹介ですエンジニアです
                  <br />
                  自己紹介ですエンジニアですです
                  <br />
                  自己紹介ですエンジニアですですです
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const aboutStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 0;
`;

const aboutProfileStyle = css`
  flex-basis: 25%;
  margin-right: 36px;
`;

const aboutImageStyle = css`
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

const aboutInfoStyle = css`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-size: 1.25rem;
`;

const aboutStarringStyle = css`
  flex-basis: 75%;
`;

const aboutStarringTitleStyle = css`
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 1px solid ${borderGray};
`;

const aboutBioContainerStyle = css`
  margin-top: 20px;
`;

const aboutBioWrapperStyle = css`
  text-align: center;
  flex: 1 0;

  & + & {
    margin-top: 20px;
  }
`;

const aboutBioImageStyle = css`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${navajoWhite};
`;

const aboutBioNameStyle = css`
  margin-top: 24px;
  font-size: 1.5rem;
`;

const aboutBioTextStyle = css`
  margin-top: 20px;
  font-size: 1rem;
  text-align: left;
`;

const aboutIndexLinkStyle = css`
  display: block;
  text-align: center;
  color: ${rgba(black, 0.8)};
  margin-top: 28px;
  font-size: 2.5rem;
`;

export default AboutPage;
