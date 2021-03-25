/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { css, jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Layout from '../components/Layout';
import { black, borderGray, navajoWhite, pastelOrange } from '../lib/color';
import { rgba } from '../lib/utils/rgba';
import { kosuketwitterUrl, kurokenTwitterUrl } from '../lib/data/urls';

dayjs.extend(utc);

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
    allFeedAnchorPodCast(sort: { fields: isoDate, order: DESC }) {
      edges {
        node {
          id
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
  data: GatsbyTypes.IndexPageQuery;
};

const IndexPage: FC<Props> = ({ location, data }) => {
  const episodes = data.allFeedAnchorPodCast.edges.map((edge) => edge.node);

  return (
    <Layout location={location}>
      <div css={topStyle}>
        <div css={topProfileStyle}>
          <GatsbyImage
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            image={data.squareLogo!.childImageSharp!.gatsbyImageData}
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
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  image={data.kurokenIcon!.childImageSharp!.gatsbyImageData}
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
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  image={data.kosukeIcon!.childImageSharp!.gatsbyImageData}
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
          {episodes.map((episode) => (
            <div css={topEpisodeStyle} key={episode.id}>
              <Link to={`/episodes/${episode.id}`} css={topEpisodeLinkStyle}>
                <img
                  src={episode.itunes?.image}
                  alt={`${episode.title}のカバー画像`}
                  width="80"
                  height="80"
                />
                <div css={topEpisodeDataStyle}>
                  <div css={topEpisodePubDateStyle}>
                    {dayjs(episode.pubDate).utc().local().format('YYYY/MM/DD')}
                  </div>
                  <h2 css={topEpisodeTitleStyle}>{episode.title}</h2>
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
  margin: 0 auto;

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
  display: flex;
  align-items: center;
`;

const topEpisodeDataStyle = css`
  margin-left: 12px;
`;

const topEpisodePubDateStyle = css`
  font-size: 1rem;
  font-weight: bold;
`;

const topEpisodeTitleStyle = css`
  font-size: 1.25rem;
  margin-top: 16px;
`;

export default IndexPage;
