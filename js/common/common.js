
// define([], function() {
//   /**
//    * 
//    * 判断用户有没有登陆过
//    * 没有的话就跳转到登录页
//    */

//   var cookieArr = document.cookie.split('; ');
//   var isLogin = false;

//   // 必须是所有的cookie,都没有PHPSESSID,才算没有登录过,那么打开到登录页面
//   for(var i =0; i< cookieArr.length; i++) {
//     // 存在,那么证明登陆过,结束循环结构
//     if(cookieArr[i].indexOf('PHPSESSID=') === 0) {
//       isLogin = true;
//       break;
//     }
//   }
  
//   !isLogin && (location.href = '/html/home/login.html');
// });




/**
 * jqueryCookie shi define定义的模块,但是像这种jquery插件
 * 他们提供给的功能放置到了原型活自己身上,并没有返回东西,所有引入他们得到的返回值是undefined
 * 要使用他们提供的功能 必须借助于jquery
 */
define(['jquery', 'jqueryCookie'], function($, undefined) {

  /**
   * 直接判断
   */
  if(!$.cookie('PHPSESSID')) {
    location.href = '/html/home/login.html';
  }
});
