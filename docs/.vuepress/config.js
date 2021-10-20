module.exports = {
  title: 'Vue2 Gulu',
  base: '/vue2-gulu/',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get_start/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          // '/components/tabs',
          // '/components/popover',
          '/components/toast',
          // '/components/collapse',
        ]
      }
    ]
  }
}
