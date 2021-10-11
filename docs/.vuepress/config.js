module.exports = {
  title: 'Hello VuePress',
  base: '/gulu/',
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
            '/components/button-group',
            '/components/input',
            '/components/grid',
        ]
      }
    ]
  }
}
