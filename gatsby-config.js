module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://invest.mthli.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '笨办法学投资',
        short_name: '笨办法学投资',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'content/assets/profile.jpg',
      },
    },
    {
      resolve: '@mthli/gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        baseDir: '/',
        contentDir: 'content',

        siteName: '笨办法学投资',
        pageTitle: '笨办法学投资',
        baseUrl: 'https://invest.mthli.com',
        description: 'Learning Invest the Hard Way 💸',
        githubRepo: 'mthli/invest',
        twitterHandle: 'mth_li',
        gaTrackingId: 'UA-70441776-4',

        gatsbyRemarkPlugins: [
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-footnotes',
            options: {
              footnoteBackRefPreviousElementDisplay: 'inline',
              footnoteBackRefDisplay: 'inline',
              footnoteBackRefAnchorStyle: 'text-decoration: none;',
            },
          },
        ],

        sidebarCategories: {
          null: [
            'index',
            // TODO
          ],
          '基础知识': [
            // TODO
          ],
          '宏观经济': [
            // TODO
          ],
          '公司调研': [
            // TODO
          ],
          '2022 年': [
            // TODO
          ],
          '参考资料': [
            // TODO
          ],
        },
      },
    },
  ],
};
