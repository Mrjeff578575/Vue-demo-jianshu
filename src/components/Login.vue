<template>
	<div class="login-container">
		<div class="login-logo"></div>
		<div class="login-header">
			<a href="#">&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;·</a>
			<a href="#">&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
		<div class="login-input">
			<form class="form-horizontal" accept-charset="UTF-8" method="post">
				<div class="username">
					<span class="span1"><i class="fa fa-user"></i></span>
					<input type="text" name="sign_in[name]" placeholder="手机号码/电子邮件" class="span2">
				</div>
				<div class="password">
					<span class="span1"><i class="fa fa-unlock-alt"></i></span>
					<input type="password" name="sign_in[password]" placeholder="密码" class="span2">
				</div>
				<button class="login-btn" type="submit"><span>登录</span></button>
				<div class="login-control" style="color:#555555;font-size:12px;">
					<span style="float:left" class="checkbox" :class="{checked: checked === true}"
						@click="checked = !checked">
						<input type="checkbox" style="position: absolute; opacity: 0;" checked="checked">
						<ins class="check"></ins>
					</span>
					<span style="float:left">记住我</span>
					<span style="float:right"><a href="#" style="color:#555555">忘记密码</a></span>
				</div>
			</form>
		</div>		
		<div class="login-way">
			<h5>您还可以通过以下方式登录</h5>
			<ul>
				<li class="qqicon"><i class="fa fa-qq"></i></li>
				<li class="weiboicon"><i class="fa fa-weibo"></i></li>
				<li class="wechaticon"><i class="fa fa-wechat"></i></li>
				<li class="googleicon"><i class="fa fa-google-plus"></i></li>
				<li class="githubicon"><i class="fa fa-github"></i></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			let checked = 'true'
			return {checked}
		}
	}
</script>
<style>
	form{
		width: 300px;
		margin: 0 auto;
		height: 245px;
		border-bottom: 1px solid rgba(113,113,113,0.17);
	}
	.login-container{
		padding: 125px 0 50px;
    	text-align: center;
	}
	.login-logo{
		width: 252px;
		height: 123px;
		margin: 0 auto;
		background: url('../../static/jianshu_logo.jpg') no-repeat;
		background-size:100%;
	}
	.login-header{
		font-size: 17.5px;
		margin: 70px 0 40px 0;
	}
	.login-header:before{
		position: relative;
		display: inline-block;
		top: -6px;
		content: '';
		height: 1px;
		width: calc(50% - 200px);
		background-color: rgba(113,113,113,0.17);
	}
	.login-header:after{
		position: relative;
		top: -6px;
		display: inline-block;
		content: '';
		height: 1px;
		width: calc(50% - 200px);
		background-color: rgba(113,113,113,0.17);
	}
	.login-header a{
		color: #b1b1b1;
	}
	.span1{
		display: inline-block;
		width: 34px;
		height: 34px;
		font-size: 12px;
		font-weight: normal;
		padding: 4px 5px;
		margin: 1px;
		border:1px solid #ccc;
		border-radius: 4px 0 0 4px;
		line-height: 34px;
	}
	.span2{		
		width: 246px;
		height: 44px;
		position: relative;
		right: 6px;
		padding: 4px 12px;
		border:1px solid #ccc;
		border-radius: 0 4px 4px 0;
		transition: border linear 0.2s; 
		box-sizing: border-box;
	}
	.span2:focus{
		outline: none;
		border-color: rgba(82,168,236,0.8);
	}
	.username, .password{
		width: 300px;
		height: 44px;
		margin: 0 auto;
	}
	.username{
		margin-bottom: 15px;
	}
	.login-btn{
		margin: 30px auto 15px auto;
		width: 100%;
		height: 50px;
		background-color: #049cdb;
		border: 0;
		border-radius: 4px;
		cursor: pointer;
	}
	.login-btn span{
		font-size: 18px;
		color: #ffffff;
	}
	.checkbox{	
    	display: inline-block;
    	vertical-align: middle;
    	position: relative;
    	margin: 0;
    	padding: 0;
    	width: 18px;
   	 	height: 18px;
    	background: url('../../static/checkbox.jpg') no-repeat;
    	background-position: -40px 0;
    	border: none;
    	cursor: pointer;
	}
	.login-control .checked{
		background-position: -20px 0;
	}
	.check{
		position: absolute;
    	top: 0%;
    	left: 0%;
    	display: block;
    	width: 100%;
    	height: 100%;
    	margin: 0px;
    	padding: 0px;
    	border: 0px;
    	opacity: 0;
    	background: rgb(255, 255, 255);
	}
	.login-way h5{
		margin:20px 0;
		font-weight: normal;
		color: #b1b1b1;
	}
	.login-way li{
		display: inline-block;
		margin: 0 5px;
		width: 40px;
		height: 40px;
		text-align: center;
		background-color: #b1b1b1;
		border-radius: 50%;
	}
	.login-way .wechaticon:hover{
		background-color:#49be38;
	}
	.login-way .qqicon:hover{
		background-color:#50BCF2;
	}
	.login-way .googleicon:hover{
		background-color:#F7566A;
	}
	.login-way .weiboicon:hover{
		background-color:#F6774F;
	}
	.login-way .githubicon:hover{
		background-color:#494D4F;
	}
	.login-way li:hover i{
		color: #ffffff;
	}
	.login-way i{
		line-height: 40px;
		font-size: 25px;
	}
</style>