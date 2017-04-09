define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template'], function($, undefined, undefined, undefined, nprogress, loading, template) {

  template.helper('random', function(source, param) {
    var params = param.split(', ');
    return Math.ceil(Math.random() * (params[1] - params[0] + params[0]));
  });

  // 渲染课程列表
  $.get('/v6/course', function(data) {
    if(data.code == 200) {
      $('.courses').append(template('course-list-tpl', data));
    }
  });
  nprogress.done();
});