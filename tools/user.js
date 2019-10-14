var user = {
  
  // --- login ---
  login: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback
    });
  },

  // --- logout ---
  logout: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback
    });
  },
  // --- getuser获取用户简介信息 ---
  getuser: function(options) {
    $.ajax({
      type: 'get',
      url: USER_GETUSER,
      success: options.callback
    });
  },

  // --- getuserinfo 获取用户详细信息 ---
  getuserinfo: function(options) {
    $.ajax({
      type: 'get',
      url: USERINFO_GET,
      success: options.callback
    });
  },

  // --- edituserinfo 编辑用户信息 ---
  edituserinfo: function(options) {
    $.ajax({
      type: 'post',
      url: USERINFO_EDIT,
      data: options.data,
      contentType: false,
      processData: false,
      success: options.callback
    });
  },










}