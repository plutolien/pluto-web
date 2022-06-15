/**
 * @type {import('next-sitemap').IConfig}
 * @see https://plutolien.com
 */
module.exports = {
  siteUrl: 'https://plutolien.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
