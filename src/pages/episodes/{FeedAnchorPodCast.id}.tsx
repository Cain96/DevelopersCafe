/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { css, jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { black, borderGray, navajoWhite } from '../../lib/color';
import { rgba } from '../../lib/utils/rgba';
import { convertEmbedUrl } from '../../lib/utils/url';
import { convertContent } from '../../lib/episode/content';

export const pageQuery = graphql`
  query EpisodePage($id: String) {
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
    allFeedAnchorPodCast(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          content
          contentSnippet
          link
          pubDate
          title
          itunes {
            image
          }
        }
      }
    }
  }
`;

type Props = {
  location: Location;
  data: GatsbyTypes.EpisodePageQuery;
};

const EpisodePage: FC<Props> = ({ location, data }) => {
  const episode = data.allFeedAnchorPodCast.edges[0].node;

  return (
    <Layout location={location} title={episode.title}>
      <div css={episodeStyle}>
        <div css={episodeProfileStyle}>
          <img
            src={episode.itunes?.image}
            alt={`${episode.title}のカバー画像`}
            width="330"
            height="330"
            css={episodeImageStyle}
          />
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
                <GatsbyImage
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  image={data.kurokenIcon!.childImageSharp!.gatsbyImageData}
                  css={episodeBioImageStyle}
                  alt="くろけんのアイコン画像"
                />
                <div css={episodeBioNameStyle}>くろけん</div>
              </div>
              <div css={episodeBioWrapperStyle}>
                <GatsbyImage
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  image={data.kosukeIcon!.childImageSharp!.gatsbyImageData}
                  css={episodeBioImageStyle}
                  alt="こうすけのアイコン画像"
                />
                <div css={episodeBioNameStyle}>こうすけ</div>
              </div>
            </div>
          </div>

          <Link to="/about/">
            <h2 css={episodeaboutLinkStyle}>
              About Us
              {/* TODO: font-awesome のパッケージをインストールする */}
              <i className="fas fa-arrow-right" />
            </h2>
          </Link>
        </div>

        <div css={episodeContentStyle}>
          {episode.link && (
            <iframe
              title="anchor player"
              src={convertEmbedUrl(episode.link)}
              height="100px"
              width="100%"
              frameBorder="0"
              scrolling="no"
            />
          )}
          <div css={episodeShownotesContentsStyle}>
            <h2 css={episodeTitleStyle}>{episode.title}</h2>
            <h3 css={episodeShownotesTitleStyle}>ShowNotes</h3>
            <div css={episodeShownotesContentsStyle}>{convertContent(episode.contentSnippet)}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const episodeStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 0;
`;

const episodeProfileStyle = css`
  flex-basis: 25%;
  margin-right: 36px;
`;

const episodeImageStyle = css`
  width: 100%;
  height: auto;
  background-color: ${navajoWhite};
  display: block;

  &:before {
    padding-top: 100%;
    display: block;
    background-color: ${navajoWhite};
    content: '';
  }
`;

const episodeInfoStyle = css`
  margin-top: 20px;
  display: block;
  text-align: center;
  font-size: 1.25rem;
`;

const episodeStarringStyle = css`
  margin-top: 20px;
`;

const episodeStarringTitleStyle = css`
  font-size: 2.5rem;
  border-bottom: 1px solid ${borderGray};
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
  background-color: ${navajoWhite};
`;

const episodeBioNameStyle = css`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const episodeaboutLinkStyle = css`
  display: block;
  color: ${rgba(black, 0.8)};
  text-align: center;
  margin-top: 28px;
  font-size: 2.5rem;
`;

const episodeContentStyle = css`
  text-align: left;
`;

const episodeTitleStyle = css`
  margin-top: 32px;
  border-top: 1px solid ${borderGray};
  padding-top: 32px;
`;

const episodeShownotesTitleStyle = css`
  padding-top: 12px;
`;

const episodeShownotesContentsStyle = css`
  font-size: 1rem;
`;

export default EpisodePage;
