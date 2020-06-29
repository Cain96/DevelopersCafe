import React, { FC } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/Layout';

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
const aboutStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 0;
  font-size: 10px;
`;

const aboutProfileStyle = css`
  flex-basis: 25%;
  margin-right: 36px;
`;

const aboutImageStyle = css`
  width: 100%;
  display: block;
`;

const aboutInfoStyle = css`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-size: 2em;
`;

const aboutIndexLinkStyle = css`
  display: block;
  text-align: center;
  color: hsla(0, 0%, 0%, 0.8);
  margin-top: 28px;
  font-size: 4em;
`;

const aboutStarringStyle = css`
  flex-basis: 75%;
`;

const aboutStarringTitleStyle = css`
  font-size: 4em;
  text-align: center;
  border-bottom: 1px solid #707070;
`;

const aboutBioContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const aboutBioWrapperStyle = css`
  margin: auto;
  text-align: center;
  flex: 1 0;

  & + & {
    margin-left: 20px;
  }
`;

const aboutBioImageStyle = css`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 50%;
`;

const aboutBioNameStyle = css`
  margin-top: 24px;
  font-size: 2.4em;
`;

const aboutBioTextStyle = css`
  margin-top: 20px;
  font-size: 2.4em;
`;

const AboutPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div css={aboutStyle}>
        <div css={aboutProfileStyle}>
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <Img css={aboutImageStyle} alt="ロゴ画像" fixed={data.squareLogo.childImageSharp.fixed} />

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
              <Img
                css={aboutBioImageStyle}
                alt="アイコン画像"
                fixed={data.kurokenIcon.childImageSharp.fixed}
              />
              <div css={aboutBioNameStyle}>くろけん</div>
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

            <div css={aboutBioWrapperStyle}>
              <Img
                css={aboutBioImageStyle}
                alt="アイコン画像"
                fixed={data.kosukeIcon.childImageSharp.fixed}
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

export const pageQuery = graphql`
  query aboutQuery {
    squareLogo: file(relativePath: { eq: "square-logo.png" }) {
      childImageSharp {
        fixed(width: 330, height: 330) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kosukeIcon: file(relativePath: { eq: "icon-kosuke.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kurokenIcon: file(relativePath: { eq: "icon-kuroken.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default AboutPage;
