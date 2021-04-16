export default {
  pages: [
    'pages/home/index/index',
    'pages/my/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#4580F7',
    list: [{
      pagePath: 'pages/home/index/index',
      text: '找车'
    },{
      pagePath: 'pages/my/my/index',
      text: '我的'
    }]
  }
}
