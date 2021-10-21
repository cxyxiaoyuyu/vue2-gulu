module.exports = {
  title: 'Vue2 Gulu',
  base: '/vue2-gulu/',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/'},
      { text: 'GitHub', link: 'https://github.com/cxyxioayuyu/vue2-gulu'}
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get_start/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        sidebarDepth: 0, 
        children: [
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
          '/components/collapse',
        ]
      }
    ]
  }
}
