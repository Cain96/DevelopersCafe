import React, { FC } from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';
import '../styles/episode.scss';

type Props = {
  location: Location;
};

const EpisodePage: FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="episode">
        <div className="episode__profile">
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <div className="episode__image" />

          <div className="episode__info">
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

          <div className="episode__starring">
            <h2 className="episode__starringTitle">Starring</h2>
            <div className="episode__bioContainer">
              <div className="episode__bioWrapper">
                <div className="episode__bioImage" />
                <div className="episode__bioName">くろけん</div>
              </div>

              <div className="episode__bioWrapper">
                <div className="episode__bioImage" />
                <div className="episode__bioName">こうすけ</div>
              </div>
            </div>
          </div>

          <Link to="/about/">
            <h2 className="episode__aboutLink">
              About Us
              {/* TODO: font-awesome のパッケージをインストールする */}
              <i className="fas fa-arrow-right" />
            </h2>
          </Link>
        </div>

        <div className="episode__info">
          {/* iframe 挿入 */}
          <iframe
            title="anchor player"
            src="https://anchor.fm/developers-cafe/embed/episodes/11-ectm8q/a-a1v8s28"
            height="150px"
            width="100%"
            frameBorder="0"
            scrolling="no"
          />

          <div className="episode__detail">
            <span>
              今回は新社会人になって二ヶ月になったこうすけに悩んでいることを聞いてみました。
              <br />
              その後はコロナ渦における働き方についてトークしました。
              <br />
              あとはテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </span>
          </div>

          <div className="episode__shownotes">
            <h2 className="episode__title">ShowNotes</h2>

            <ul className="episode__content">
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

export default EpisodePage;
