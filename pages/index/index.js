//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     icon1: "../../img/右箭头(2).png",
     grogress: [
        {
           name: "科研教学 TEACHING AND RESEARCH",
           url: "../../img/grogress1.jpg",
           info1: "广西大学陈正教授到南宁学院做学术报告",
           info2: "南宁学院副校长陈雄章带队赴白起镇参加...",
           info3: "长江学者朱红平教授到南宁学院曹家“2014..",
           info4: "南宁学院参加2017年广西高校科教服务背......",
           info5: "广西大学陈正教授到南宁学院做学术报告"
        },
        {
           name: "校企合作 SCHOOL-ENTERPRISE",
           url: "../../img/grogress1.jpg",
           info1: "广西大学陈正教授到南宁学院做学术报告",
           info2: "南宁学院副校长陈雄章带队赴白起镇参加...",
           info3: "长江学者朱红平教授到南宁学院曹家“2014..",
           info4: "南宁学院参加2017年广西高校科教服务背......",
           info5: "广西大学陈正教授到南宁学院做学术报告"
        },
        {
           name: "海外交流 OVERSEAS EXCHANGE",
           url: "../../img/grogress1.jpg",
           info1: "广西大学陈正教授到南宁学院做学术报告",
           info2: "南宁学院副校长陈雄章带队赴白起镇参加...",
           info3: "长江学者朱红平教授到南宁学院曹家“2014..",
           info4: "南宁学院参加2017年广西高校科教服务背......",
           info5: "广西大学陈正教授到南宁学院做学术报告"
        }
     ],
     logo3:"../../img/logo3.png",
     log:"../../img/log.jpg",
    navbg1:"../../img/na-bg1.png",
    barnerimg5:"../../img/6.jpg",
    barnerimg3: "../../img/3.jpg",
    barnerimg2: "../../img/2.jpg",
     barnerimg1: "../../img/1.jpg",
    info1:[
       "../../img/info1.jpg",
       "../../img/info2.jpg",
       "../../img/info3.jpg"
    ],
     info2: [
       "../../img/info4.jpg",
       "../../img/info5.jpg",
       "../../img/info6.jpg"
    ],
    infoxiaozhang:"../../img/书信.png"
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
