/** @jsx jsx */
import { FC } from 'react';
import Link from 'gatsby-link';
import { css, jsx } from '@emotion/react';
import Layout from '../components/Layout';
import { black, borderGray, navajoWhite } from '../lib/color';
import { rgba } from '../lib/utils/rgba';

type Props = {
  location: Location;
};

const EpisodePage: FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <div css={episodeStyle}>
        <div css={episodeProfileStyle}>
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <div css={episodeImageStyle} />

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
                <div css={episodeBioImageStyle} />
                <div css={episodeBioNameStyle}>くろけん</div>
              </div>
              <div css={episodeBioWrapperStyle}>
                <div css={episodeBioImageStyle} />
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

          <div css={episodeShownotesContentStyle}>
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

const episodeContentDetailStyle = css`
  font-size: 1.25rem;
  margin-top: 32px;
`;

const episodeShownotesTitleStyle = css`
  margin-top: 32px;
  border-top: 1px solid ${borderGray};
  padding-top: 32px;
`;

const episodeShownotesContentStyle = css`
  font-size: 1.25rem;
`;

export default EpisodePage;
