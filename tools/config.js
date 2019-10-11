/* 
  定义一块区域，用一些变量来存储所需要用到的接口信息
  定义一个baseUrl用来存放基地址
  定义其他大写标识符来存储接口其他地址
*/
var baseUrl = 'http://localhost:8000/';

// 用户登录接口
var USER_LOGIN = baseUrl + 'admin/login';
// 用户退出登录接口
var USER_LOGOUT = baseUrl + 'admin/logout';
// 获取用户信息接口
var USER_GETUSER = baseUrl + 'admin/getuser';
// 文章数量统计
var ARTICLE_COUNT = baseUrl + 'admin/article_count';
// 评论数量统计
var COMMENT_COUNT = baseUrl + 'admin/comment_count';
// 月新增文章数
var MONTH_ARTICLE_COUNT = baseUrl + 'admin/month_article_count';
// 各类型文章数量统计
var ARTICLE_CATEGORY_COUNT = baseUrl + 'admin/article_category_count';
// 月文章访问量
var ARTICLE_CATEGORY_VISIT = baseUrl + 'admin/article_category_visit';
// 文章搜索
var SEARCH = baseUrl + 'admin/search';
// 发布文章
var ARTICLE_PUBLISH = baseUrl + 'admin/article_publish';
// 文章编辑
var ARTICLE_EDIT = baseUrl + 'admin/article_edit';
// 删除文章
var ARTICLE_DELETE = baseUrl + 'admin/article_delete';
// 文章类别搜索
var CATEGORY_SEARCH = baseUrl + 'admin/category_search';
// 新增文章类别
var CATEGORY_ADD = baseUrl + 'admin/category_add';
// 编辑文章类别
var CATEGORY_EDIT = baseUrl + 'admin/category_edit';
// 删除文章类别
var CATEGORY_DELETE = baseUrl + 'admin/category_delete';
// 文章评论搜索
var COMMENT_SEARCH = baseUrl + 'admin/comment_search';
// 评论审核通过
var COMMENT_PASS = baseUrl + 'admin/comment_pass';
// 评论审核不通过
var COMMENT_REJECT = baseUrl + 'admin/comment_reject';
// 删除评论
var COMMENT_DELETE = baseUrl + 'admin/comment_delete';
// 获取用户信息
var USERINFO_GET = baseUrl + 'admin/userinfo_get';
// 编辑用户信息
var USERINFO_EDIT = baseUrl + 'admin/userinfo_edit';