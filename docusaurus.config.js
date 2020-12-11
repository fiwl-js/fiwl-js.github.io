/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'FIWL.js',
  tagline: 'Arrange your web app layout as efficiently as possible.',
  url: 'https://fiwl-js.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fiwl-js',
  projectName: 'fiwl-js.github.io',
  themeConfig: {
    announcementBar: {
      id: 'supportus-new',
      content:
        '<span class="text-white">⭐️ If you like Motion Layout, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeffersonlicet/react-motion-layout">GitHub</a>! ⭐️</span>',
    },
    navbar: {
      title: 'FIWL',
      logo: {
        alt: 'My Facebook Project Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/fiwl-js/fiwl-js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Created with ♥ by FIWL community',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fiwl-js/fiwl-js.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://cdn.panelbear.com/analytics.js?site=IsD6EBUV3pJ',
      async: true,
    },
    'https://gitcdn.link/cdn/fiwl-js/fiwl-js.github.io/ecb105a8ad3f83d10bea7940eae3ce228aaa8bdd/static/panelbear.config.js',
  ],
  stylesheets: [
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
  ],
};
