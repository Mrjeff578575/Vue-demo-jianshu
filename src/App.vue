<template>
<div class="container">
  <div class="sidebar">
    <ul class="dropdown">
      <li :class="{active: show === 'home'}">
        <a @click="show = 'home'" v-link="'/home/article'"><i class="fa fa-home"></i><span>&nbsp;&nbsp;首页</span></a>
      </li>
      <li :class="{active: show === 'topic'}">
        <a @click="show = 'topic'" v-link="'/topic/topic_article'"><i class="fa fa-th"></i><span>&nbsp;&nbsp;专题</span></a>
      </li>
      <li><a href="#"><i class="fa fa-mobile"></i><span>&nbsp;&nbsp;下载手机应用</span></a></li>
    </ul>
    <ul class="nav-user">
      <li><a href=""><i class="fa fa-font"></i><span>&nbsp;&nbsp;显示模式</span></a></li>
      <li><a v-link="'/login'"><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;登录</span></a></li>
    </ul>
  </div>
  <div class="home">
    <router-view transition = 'display' transition-mode = 'out-in'></router-view>
  </div>
  <div class="rightbar">
    <nav>
      <a v-link="'/login'"><i class="fa fa-sign-in"></i>登录</a>
      <a href="#"><i class="fa fa-user"></i>注册</a>
    </nav>
  </div>
</div>
</template>
<style>
  .display-transition{
  transition: all 0.5s;
  }
  .display-leave{
  opacity: 0;
  transform: translateX(50px);
  } 
  .display-enter{
    opacity: 1;
  }
  .container{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  @media screen and (max-width: 1300px){
    .nav-user li{
        width: 40px;
        height: 30px;
        overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 40px;
      overflow: hidden;
    }
    .showbar{
      transform: translateX(-130px);
      transition: all 0.5s;
    }
    .sidebar li{
      padding: 20px 0;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
    .sidebar .fa-mobile{
      margin-right: 8px;
      font-size: 50px;
    }
  }
</style>
<script>
import store from './vuex/store'

export default {
  store,
  data () {
    return {
      show:'home'
    }
  }
}
</script>