import React from 'react';
import { graphql } from 'gatsby'
import * as styles from './cookie-setting.module.scss';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container';

// import SEO from '../components/SEO';

import ToggleSection from '../components/ToggleSection';

import Button from '../components/Button';


const PrivacyPolicyPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>Cookie ポリシー</h3>
              <pre>
                このサイトでは Cookie を使用しています。Cookie の種類に関する詳細を確認し、それぞれのカテゴリの Cookie を有効/無効にすることができます。ホームページのフッターにあるリンクから、いつでも設定を調整できます。
              </pre>
            </div>

            <div className={styles.buttonContainer}>
              <Button level={'levelGreen'} size={'basic'}>すべてに同意</Button>
              <Button level={'levelGreenWhite'} size={'basic'}>同意しない</Button>
            </div>

            <div className={styles.links}>
              <u>概要</u>
              <u>プライバシーポリシー</u>
            </div>

            
            <div className={styles.toggleSections}>
              <ToggleSection　title={`必須`}/>
              <ToggleSection　title={`機能`}/>
              <ToggleSection　title={`パフォーマンス`}/>
            </div>


          </div>


          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>必須</h3>
              <pre>
                必須 Cookie は当サイトのサービス提供のために必要不可欠な Cookie です。必須 Cookie は当サイトに帰属するファーストパーティ Cookie に分類されます。これは、必須 Cookie に保存されたすべてのデータは当サイトで利用されることを意味します。
              </pre>
            </div>
            
            <ToggleSection
              title={`Cloudflare`}
              contents="Cloudflareは、ウェブサイトのセキュリティとパフォーマンスを向上させるサービスです。Cloudflareは、ウェブサイトのロード時間を改善するためにコンテンツデリバリネットワーク（以下「CDN」）を提供します。CDNを使用することで、地域的または国際的に分散されたサーバーの助けを借りて、コンテンツをより迅速に検索可能にすることができます。 ︎ プロバイダー：Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA クッキー名と有効期間： __cfruid (有効期間: セッション), __cf_bm (有効期間: 30分), __cf_clearance (有効期間: 30分)"
              cookiePolicy = 'https://www.cloudflare.com/ja-jp/cookie-policy/'
              privacyPolicy = 'https://www.cloudflare.com/ja-jp/privacypolicy/'
            />

          </div>

          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>機能</h3>
              <pre>
                機能 Cookie は、訪問者から提供された地域や言語などのデータをもとに訪問者の閲覧体験を向上するために使われます。保存された情報はすべて匿名化され、個人を特定することはできません。当サイト以外での行動の追跡はできません。
              </pre>
            </div>

            <ToggleSection
              title={`YouTube`}
              contents="これらのクッキーは、埋め込まれたYouTubeの動画によって設定されています。これらのクッキーは、動画の表示頻度や再生に使用される設定など、匿名の統計データを登録します。訪問者がGoogleアカウントにログインしない限り、個人データは収集されません。Googleアカウントにログインしている場合、訪問者が動画に「いいね！」をクリックしたときなど、ユーザーの選択がユーザーのアカウントに関連付けられます。 利用クッキー名および有効期限：YSC(1セッションのみ有効), secure-HSID,(有効期限:2ヶ月) Secure-SSID(有効期限:2ヶ月), Secure-APSID(有効期限:2ヶ月), VISITORINFO1LIVE(有効期限:5ヶ月), SIDCC(有効期限:1年), LOGIN_INFO(有効期限:2年),PREF(有効期限:2年):SID(有効期限:2年),_Secure-3PSID(有効期限:2年),HSID(有効期限:2年),SSID(有効期限:2年),APISID(有効期限:2年),SAPISID(有効期限:2年),_Secure-3PAPISID(有効期限:2年),Consent(有効期限:28年)。"
              cookiePolicy = 'https://policies.google.com/technologies/cookies'
              privacyPolicy = 'https://policies.google.com/privacy'
            />
            
            <ToggleSection
              title={`Twitter`}
              contents="こちらのプラグインはTwitterからのコンテンツをウェブサイトに表示するためにあります。本プラグインは、コンテンツの表示目的としてデータを収集します。収集するデータは、訪問者ブラウザ種類、ツイートの日時、ツイートボタンが設置されているインターネットアドレス、ウェブサイト訪問者のIPアドレス、オペレーティングシステム情報を含みます。"
              cookiePolicy = 'https://help.twitter.com/en/rules-and-policies/twitter-cookies'
              privacyPolicy = 'https://twitter.com/en/privacy'
            />

          </div>

          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>マーケティング／サードパーティ</h3>
              <pre>
                マーケティング Cookie / サードパーティ Cookie は、当サイト以外の第三者によって生成される Cookie です。この Cookie は、ウェブ上での行動から興味関心を推測し、特定の広告を出す「行動ターゲティング」などに使われます。
              </pre>
            </div>

            <ToggleSection
              title={`このカテゴリに属する Cookie はありません`}
              contents=""
            />
          </div>

          
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3>パフォーマンス</h3>
              <pre>
                パフォーマンス Cookie は、訪問者が当サイト内のどのページを訪れたか、どのコンテンツに興味を示していたかなどの情報を収集します。端末の IP アドレスは自動的に匿名化され、特定の個人情報である関連付けはできないようになっています。
              </pre>
            </div>

            <ToggleSection
              title={`Google Analytics`}
              contents="これらの Cookie は、閲覧体験の向上のため、訪問者が当ページをどのような形で利用および操作されるかについて、匿名で情報を収集します。 提供元：Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA または EU 圏内からの訪問の場合：Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Cookie 名：_ga, _gat and _gid) Cookie の有効期限：2年"
              cookiePolicy = 'https://policies.google.com/technologies/cookies'
              privacyPolicy = 'https://policies.google.com/privacy'
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          order
        }
        body
        id
      }
    }
  }
`;



export default PrivacyPolicyPage;

// export const Head = () => {
//   return <SEO title={'お知らせ'} pathname={'/notice'}></SEO>
// }


