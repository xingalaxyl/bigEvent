$(function() {

  // 首先实现登录按钮的修改，将submit进行修改
  //    - 重新书写，或者通过e.preventDefault()
  //    - 获取input_txt和input_pass的内容
  $('.input_sub').on('click',function(e) {
    e.preventDefault();
    var txt = $('.input_txt').val();
    var pass = $('.input_pass').val();
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: {
        user_name: txt,
        password: pass
      },
      success: function(res) {
        // console.log(res);
        if(res.code === 200) {
          location.href = './index.html';
        }
      }
    });
  });




















})