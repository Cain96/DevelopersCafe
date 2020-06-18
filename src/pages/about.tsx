import React, { FC } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Layout from '../components/Layout';
import '../styles/about.scss';

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

const AboutPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div className="about">
        <div className="about__profile">
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <Img
            className="about__image"
            alt="ロゴ画像"
            fixed={data.squareLogo.childImageSharp.fixed}
          />

          <div className="about__info">
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
            <h2 className="about__indexLink">Episodes</h2>
          </Link>
        </div>

        <div className="about__starring">
          <h2 className="about__starringTitle">Starring</h2>
          <div className="about__bioContainer">
            <div className="about__bioWrapper">
              <Img
                className="about__bioImage"
                alt="アイコン画像"
                fixed={data.kurokenIcon.childImageSharp.fixed}
              />
              <div className="about__bioName">くろけん</div>
              <div className="about__bioText">
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

            <div className="about__bioWrapper">
              <Img
                className="about__bioImage"
                alt="アイコン画像"
                fixed={data.kosukeIcon.childImageSharp.fixed}
              />
              <div className="about__bioName">こうすけ</div>
              <div className="about__bioText">
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
