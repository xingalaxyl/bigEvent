

var article = {

  // 展示分类信息方法
  getCate: function (options) {
    $.ajax({
      url: CATEGORY_SEARCH,
      success: options.callback
    });
  },

  // --- 添加文章分类信息 ---
  addCate: function(options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_ADD,
      data: options.data,
      success: options.callback
    });
  },

  // --- 编辑文章分类信息功能 ---
  editCate: function(options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_EDIT,
      data: options.data,
      success: options.callback
    });
  },

  // --- 删除文章分类信息功能 ---
  delCate: function (options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_DELETE,
      data: options.data,
      success: options.callback
    });
  },
}








