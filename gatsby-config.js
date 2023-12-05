/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();

module.exports = {
  pathPrefix: `/samples-visa`,

  // siteMetadata:= サイト全体で使用するメタデータを定義するために使われます。
  // サイトのタイトル、説明、著者などの一般的な情報を含むことが多いです。GraphQLクエリを通じてサイトのどこからでもアクセスできます。
  siteMetadata: {
    title: `Sample Page: Get-Visa`,
    description: `My one sample page for corresponding to bussiness type.`,
    image: `assets/favicon.png`,
    siteUrl: `https://riotamoriya.github.io/samples-visa/`,
    type: `website`,
    keywords: ``,
  },
  plugins: [
    {
      // gatsby-plugin-manifest:= Gatsbyサイトのウェブアプリマニフェストを生成するプラグインです。これはPWA（Progressive Web App）の要件の一部として使用されます。
      // サイトをスマートフォンのホームスクリーンに追加する際のアイコン、アプリ名、色などの設定を定義します。また、オフラインサポートやアプリの外観に関する設定も含みます。
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sample Page: Get-Visa`, // アプリ名
        short_name: `Get-Visa`, // 短いアプリ名
        description: `My one sample page for corresponding to bussiness type.`,
        lang: `ja`,
        display: `standalone`,
        start_url: `/`,
        background_color:  `#FFE200`, // 背景色：蒲公英色
        theme_color: `#FFE200`, // テーマ色
        icon: 'src/assets/favicon.png',
        icons: [
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `icons/icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,　// 追加
      options: {
        siteUrl: `https://riotamoriya.github.io/samples-visa/`,
        stripQueryString: true,
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt', // 追加
      options: {
        host: 'https://riotamoriya.github.io/samples-visa/',
        sitemap: 'https://riotamoriya.github.io/samples-visa/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },

    `gatsby-plugin-sitemap`, // 追加

    `gatsby-plugin-sass`,



    `gatsby-plugin-image`, `gatsby-plugin-sharp`,`gatsby-transformer-sharp`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      }
    },

    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/helpers/notices`,
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notices",
        path: `${__dirname}/src/helpers/explanations`,
      }
    },
        

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "PrivacyPolicies",
        path: `${__dirname}/docs/PrivacyPolicies`,
      }
    },
    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {// 固定サイズにする場合に指定
              width: 800,
              height: 400,
            }
          }
        ]
      }
    }, `gatsby-plugin-twitter`,

    {
      // gatsby-plugin-s3:= aws s3デプロイプラグイン
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_S3_BUCKET,
        acl: null
      },
    },


  ],
};


