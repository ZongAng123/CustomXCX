// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
     //  本地图片
        // '/pages/images/swiper01.png',
        // '/pages/images/swiper1.png',
        // '/pages/images/swiper2.png',
      // 网络图片
       'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4036653037,1064903215&fm=26&gp=0.jpg',
       'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.jiemian.com%2F101%2Foriginal%2F20170423%2F149291241174035700.jpg&refer=http%3A%2F%2Fimg1.jiemian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618283949&t=91754e024b7f25c7ec509b56677802a7',
       'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/14ce36d3d539b60083fb9a13eb50352ac65cb759.jpg'
    ],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true, //指示点
    vertical: false, //滑动方向是否为纵向
    autoplay: true, //是否自动切换
    interval: 2000, //自动切换时间间隔
    duration: 500, //滑动动画时长
    prolist: [
      {
        logo: '/pages/images/hhhh.png',
        title: '小程序练习',
        desc: '22周岁以上即可\n最快三小时下款\n件均8万，最高20万'
      },
      
    ],
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() { // 页面创建时执行
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
