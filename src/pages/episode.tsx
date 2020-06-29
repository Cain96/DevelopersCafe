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
const episodeStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 0;
  font-size: 10px;
`;

const episodeProfileStyle = css`
  flex-basis: 25%;
  margin-right: 36px;
`;

const episodeInfoStyle = css`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-size: 2em;
`;

const episodeStarringStyle = css`
  margin-top: 20px;
`;

const episodeStarringTitleStyle = css`
  font-size: 4em;
  border-bottom: 1px solid #707070;
  text-align: center;
`;

const episodeBioContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const episodeBioWrapperStyle = css`
  margin: auto;
  text-align: center;
`;

const episodeBioImageStyle = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const episodeBioNameStyle = css`
  margin-top: 20px;
  font-size: 2.4em;
`;

const episodeAboutLinkStyle = css`
  display: block;
  color: hsla(0, 0%, 0%, 0.8);
  text-align: center;
  margin-top: 28px;
  font-weight: bold;
  font-size: 4em;
`;

const episodeContentDetailStyle = css`
  font-size: 2em;
  margin-top: 32px;
`;

const episodeShownotesTitleStyle = css`
  margin-top: 32px;
  border-top: 1px solid #707070;
  padding-top: 32px;
`;

const episodeShownotesContentStyle = css`
  font-size: 2em;
`;

const EpisodePage: FC<Props> = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div css={episodeStyle}>
        <div css={episodeProfileStyle}>
          <Img alt="ロゴ画像" fixed={data.squareLogo.childImageSharp.fixed} />

          <div css={episodeInfoStyle}>
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

          <div css={episodeStarringStyle}>
            <h2 css={episodeStarringTitleStyle}>Starring</h2>
            <div css={episodeBioContainerStyle}>
              <div css={episodeBioWrapperStyle}>
                <Img
                  css={episodeBioImageStyle}
                  alt="アイコン画像"
                  fixed={data.kurokenIcon.childImageSharp.fixed}
                />
                <div css={episodeBioNameStyle}>くろけん</div>
              </div>

              <div css={episodeBioWrapperStyle}>
                <Img
                  css={episodeBioImageStyle}
                  alt="アイコン画像"
                  fixed={data.kosukeIcon.childImageSharp.fixed}
                />
                <div css={episodeBioNameStyle}>こうすけ</div>
              </div>
            </div>
          </div>

          <Link to="/about/" css={episodeAboutLinkStyle}>
            About Us
          </Link>
        </div>

        <div>
          {/* iframe 挿入 */}
          <iframe
            title="anchor player"
            src="https://anchor.fm/developers-cafe/embed/episodes/11-ectm8q/a-a1v8s28"
            height="150px"
            width="100%"
            frameBorder="0"
            scrolling="no"
          />

          <div css={episodeContentDetailStyle}>
            <span>
              今回は新社会人になって二ヶ月になったこうすけに悩んでいることを聞いてみました。
              <br />
              その後はコロナ渦における働き方についてトークしました。
              <br />
              あとはテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </span>
          </div>

          <h2 css={episodeShownotesTitleStyle}>ShowNotes</h2>

          <ul css={episodeShownotesContentStyle}>
            <li>リモート入社式と新入社員のオンボーディグ</li>
            <li>リモート飲みとは？</li>
            <li>運動不足どう解消してる？</li>
            <li>Uber Eatsを使ってみた</li>
            <li>maintainableなcssとは何なのだろうか</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query EpisodeQuery {
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

export default EpisodePage;
