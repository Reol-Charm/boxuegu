define(['jquery', 'jqueryCookie', 'template'], function ($, undefined, template) {
    /**
     * 
     * 1\ 获取本地存取的用户信息
     * 2\ 把用户信息解析为js对象方便使用
     * 3\ 拼接用户信息模板字符串
     * 4\ 调用模板引擎的compile方法编译这个模板字符串,得到一个渲染函数
     * 5\ 调用渲染函数 把要渲染的数据传入进去,得到一个完整的html
     * 6\ 最后把html替换到页面的指定位置
     * 
     */
    (function () {
      // 1\ 获取本地存储的用户信息
      var userInfoStr = $.cookie('userInfo');
      var userInfoObj;

      // 把用户信息解析为js对象方便使用
      try {
        userInfoObj = JSON.parse(userInfoStr);

      } catch (e) {
        userInfoObj = {};
      }

      // 拼接用户信息模板字符串
      var prifileTpl =
        '<div class="profile">' +
          '<div class="avatar img-circle">' +
            '<img src={{ tc_avatar? tc_avatar : "/img/default.png" }}>' +
          '</div>' +
          '<h4>{{ tc_name }}</h4>' +
        '</div>';

      // 调用模板引擎的compile方法编译这个模板字符串
      var userInfoRender = template.compile(prifileTpl);

      // 调用渲染函数,把要渲染的数据传入进去,就会得到一个完整的html
      var userInfoHTML = userInfoRender(userInfoObj);

      // 最后把html替换到页面的指定位置
      $('.aside').prepend(userInfoHTML);

    })();


    // 导航栏下拉列表
    (function() {
      // 点击具有下拉列表功能的a标签 那么暂时隐藏对应的ul列表
      $('.nav-slide').on('click', function() {
        $(this).next().slideToggle();
      });
    })();

    // 根据页面定位有车导航的焦点
    (function() {
      /***
       * 
       * 根据一些页面规律进行焦点
       * 1\获取当前页面的路径
       * 2\ 移除所有a标签的active类名
       * 3\ 把路径当做属性选择页面对应的a标签 给对应的a标签单独添加
       * 
       */

      var pathHref = {

      };
      var patname =  location.pathname;
      var aHref = pathHref[pathname]? pathHref[pathname]: pathname;
    })();
});