const app = getApp();
var a=0
Page({
  data: {
    array: ['无提醒','清明雨上','阿司匹林','我的一个道姑朋友', '红马'],
    objectArray: [
      {
        id: 0,
       url: ''
      },
      {
        id: 1,
        url: 'http://music.163.com/song/media/outer/url?id=167882.mp3'
      },
      {
        id: 2,
       url: 'http://music.163.com/song/media/outer/url?id=1396141677.mp3'
      },
      {
        id: 3,
        url: 'http://music.163.com/song/media/outer/url?id=1367452194.mp3'
      },
      {
        id:4 ,
        url:'http://music.163.com/song/media/outer/url?id=1828574198.mp3'
      }
    ],
    index :app.globalData.urlindex
  },
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
      murl: wx.getStorageSync('murl'),
    	workTime: wx.getStorageSync('workTime'),
      restTime: wx.getStorageSync('restTime'),
      index:app.globalData.urlindex,
    })
  },
  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  },
  ChooseMusic: function(e) {
    app.globalData.urlindex=e.detail.value
    console.log( this.data.objectArray[e.detail.value].url)
   wx.setStorage({
    key: 'murl',
    data: this.data.objectArray[e.detail.value].url
    })
    this.setData({
      index: e.detail.value
    })
  },
})
