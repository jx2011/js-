
/**
 * Module dependencies.
 */
    /*
    *   加载模块
    */
 //加载 在node_modules 的 express 模块
var express = require('express')
    , http = require('http')
    , path = require('path');

//  express  初始化
var app = express();

// 设置服务的监听端口
app.set('port', 8000);

//  设置express 寻找资源（客户端的）的位置
app.use(express.static(__dirname + '/frontend'));
// 设置 ejs 引擎，这里是通过express 去帮助我们加载
app.set('view engine','ejs');
// 设置ejs 文件存放位置
app.set('views',__dirname + '/frontend/ejsfile');
// 设置站点图标
app.use(express.favicon());
// 设置日志
app.use(express.logger('dev'));   // 日志

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, './')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'),
    function(){
        console.log('Express port ' + app.get('port'));
    });

//----------- 路由开始---------------------


