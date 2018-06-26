// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     fire:"../../img/热点.png",
      infonav:"../../img/info-nav.png",
      fireinfo:[
         {
            date:"2018-03-22",
            info:"南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-21",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-20",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-19",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-18",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-17",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-16",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-15",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-14",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-14",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         },
         {
            date: "2018-03-14",
            info: "南宁学院大学生心理健康教育与咨询新中心....."
         }
      ],
      background: " background:rgba(63,126,193,0.9); color: white",
      displays:"block"
  },
   firetap:function(){
      var background=this.data.background;
      var dis = this.data.displays
      var fireinfo=this.data.fireinfo
      if (background == " background:rgba(63,126,193,0.9); color: white"){
         this.setData({
            background:"",
            dis:"none"
         })
      } else {
         this.setData({
            background: " background:rgba(63,126,193,0.9); color: white",
            dis:"block"
            
         })
         
      }
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})