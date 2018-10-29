var http = require("http");
var url = require("url");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})



var login = require("./User/login.js");
var register = require("./User/register.js")
var comment = require("./User/comment.js")
var changeInfo = require("./User/changeInfo.js")
var beauty = require("./User/py_beauty.js")

app.get('/', function (req, res) {
	res.send('Hello World');
 })

app.get("/login.html", function(req, res) {
	var path = __dirname + "/public/login.html" ;
	res.sendFile(path);
})

//登录
app.post("/login", urlencodedParser, function(req, res) {
	login.login(req, res);
});

//发表评论
app.get("/publishComment", function(req, res) {
	comment.comment(req, res);
});
//获取历史评论信息
app.get("/commentHistory", function(req, res) {
	comment.history(req, res);
});

//todo
app.post("/changeInfo", function(req, res, upload) {
	console.log("enter changeInfo");
	changeInfo.changeInfo(req, res);
})

//获取beauty信息
app.get("/beautyList", function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	beauty.beautyList(req, res);
})



var server = app.listen(8888, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
