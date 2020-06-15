import React, { FC } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Img, { FixedObject } from "gatsby-image";
import Layout from '../components/Layout';
import '../styles/index.scss';

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
    squareLogo: {
      childImageSharp: {
        fixed: FixedObject;
      }
    },
    kosukeIcon: {
      childImageSharp: {
        fixed: FixedObject;
      }
    },
    kurokenIcon: {
      childImageSharp: {
        fixed: FixedObject;
      }
    }
  };
};

const IndexPage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div className="top">
        <div className="top__profile">
          <Img className="top__image" alt="ロゴ画像" fixed={data.squareLogo.childImageSharp.fixed} />

          <div className="top__info">
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

          <div className="top__starring">
            <h2 className="top__starringTitle">Starring</h2>
            <div className="top__bioContainer">
              <div className="top__bioWrapper">
              <Img className="top__bioImage" alt="アイコン画像" fixed={data.kurokenIcon.childImageSharp.fixed} />
                <div className="top__bioName">くろけん</div>
              </div>

              <div className="top__bioWrapper">
                <Img className="top__bioImage" alt="アイコン画像" fixed={data.kosukeIcon.childImageSharp.fixed} />
                <div className="top__bioName">こうすけ</div>
              </div>
            </div>
          </div>

          <Link to="/about/">
            <h2 className="top__aboutLink">
              About Us
              {/* TODO: font-awesome のパッケージをインストールする */}
              <i className="fas fa-arrow-right" />
            </h2>
          </Link>
        </div>

        <div className="top__episodesContainer">
          {(() => {
            const index = [...Array(11)].map((_, i) => 11 - i);
            let episodes: Array<JSX.Element> = [];
            episodes = index.map((i) => {
              return (
                <div className="top__episode">
                  {/* TODO: <Link to={'/episode/' + i}> に直す */}
                  <Link to="/episode/">
                    <div className="top__episodeData">2020/XX/XX</div>

                    <h2 className="top__episodeTitle">#{i}: 新社会人の春</h2>

                    <div className="top__episodeExplain">
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
    site {
      siteMetadata {
        title
      }
    }
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
