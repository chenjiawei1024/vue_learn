import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mysite',
  description: 'Just playing around.',
  lang: 'zh',
  lastUpdated: true,
  //TODO: 在生成站点时需要额外配置
  cleanUrls: 'without-subfolders',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'My Custom Title',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      }
    ],
  },
})
