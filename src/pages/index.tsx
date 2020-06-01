import React, { FC } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/index.scss'

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
      {/* <div>
        <h1 className="hoge">Test</h1>
        <Link to="/about/">AboutUs</Link>
      </div> */}
      <div className="top">
        <div className="top__profile">
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <div className="top__image">
          </div>
          <div className="top__info">
            <span>
              新卒ソフトウェアエンジニアが送る<br/>
              テック系ポッドキャスト。<br/>
              ご意見・ご感想は #DevelopersCafe<br/>
              またはdevelopers.cafe.podcast@gmail.com まで
            </span>
          </div>
          <div className="top__starring">
            <h2 className="top__starringTitle"></h2>
            <div className="top__profileContainer">
              <div className="top__biographical"></div>
              <div className="top__bio"></div>
            </div>
          </div>
        </div>

        <div className="top__episodes">
          <div className="top__episodeData">
            2020/XX/XX
          </div>
          <h2 className="top__episodeTitle">
            #11: 新社会人の春 >
          </h2>
          <div className="top__episodeExplain">
          ここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキストが入りますここにこの回を説明するテキスト
          </div>
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
  }
`;

export default IndexPage;
