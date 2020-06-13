import React, { FC } from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';
import '../styles/about.scss';

type Props = {
  location: Location;
};

const AboutPage: FC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="about">
        <div className="about__profile">
          {/* TODO: gatsby-image を用いて、 Image タグに置き換える */}
          <div className="about__image" />

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
              <div className="about__bioImage" />
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
              <div className="about__bioImage" />
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

export default AboutPage;
