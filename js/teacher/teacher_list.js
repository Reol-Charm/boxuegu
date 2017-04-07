// define(['aside', 'header', 'loading', 'nprogress', 'jquery', 'template', 'bootstrap'], function (undefined, undefined, undefined, nprogress, $, template, undefined) {

//   // 渲染讲师列表
//   (function () {
//     /**
//      * 
//      * 1\发送请求获取僵尸列表
//      * 2\ 请求成功后调用template方法得到讲师列表的html
//      * 3\ 把html添加到页面中即可
//      */
//     $.get('/v6/teacher', function (data) {
//       if (data.code === 200) {
//         $('.table-teacher-list').append(template('teacher-list-tpl', data));
//         console.log(data);
//       }
//     });
//   })();

//   // 弹出模态框
//   (function () {
//     // 代理事件
//     // $(父元素).on('事件的类型', '父元素中想触发事件的子元素选择器', function(){})
//     $('#teacherModal').on('show.bs.modal', function (e) {
//       console.log(e);
//       // if (!) return e.preventDefault() // 阻止模态框的展示
//     })
//   })();

//   nprogress.done();
// });


define(['aside', 'header', 'loading', 'nprogress', 'jquery', 'template', 'bootstrap'], function (undefined, undefined, undefined, nprogress, $, template, undefined) {

  // 渲染讲师列表
  (function () {
    /**
     * 
     * 1\发送请求获取僵尸列表
     * 2\ 请求成功后调用template方法得到讲师列表的html
     * 3\ 把html添加到页面中即可
     */
    $.get('/v6/teacher', function (data) {
      if (data.code === 200) {
        $('.table-teacher-list').append(template('teacher-list-tpl', data));
        console.log(data);
      }
    });
  })();

  // 弹出模态框
  (function () {
    // 代理事件
    // $(父元素).on('事件的类型', '父元素中想触发事件的子元素选择器', function(){})

    // $('#teacherModal').on('show.bs.modal', function (e) {
      // console.log(e);
      
      // if (!) return e.preventDefault() // 阻止模态框的展示
    // })
  })();

  nprogress.done();
});