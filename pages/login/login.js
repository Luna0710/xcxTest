import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
	data:{
		user:"",
		pass:""
	},
	onLoad: function () {
	},
	changeUser(data){
		this.setData({"user":data.detail})
	},
	changePass(data){
		this.setData({"pass":data.detail})
	},
	login(){
		console.log(this.data)
		if(this.data.user==""||this.data.pass==""){
			Toast('用户名和密码不能为空');
			return;
		}
		wx.navigateTo({
		  url: '../index/index'
		})
	},
})