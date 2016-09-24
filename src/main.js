import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './routers'


Vue.use(VueRouter);
const router = new VueRouter();
router.mode = "html5";
//路由钩子
router.beforeEach((transition)=> {
  //跳转前可进行验证等操作
  if (transition.to.auth) {
    // console.log(transition.to.path);
  } else {
    // console.log("transition.next()");
    transition.next();
  }
});
router.afterEach(function (transition) {
  //跳转后的一些操作
  console.log('成功浏览到: ' + transition.to.path)
});
// 默认跳转
router.redirect({
  '*': '/home/article'
});
// router.go('/home/article');//手动跳转
routerMap(router);
router.start(App, 'app');
