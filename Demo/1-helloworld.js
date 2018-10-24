// 一个nodejs应用由三部分构成：
// 1.引入required模块
// 2.创建服务器
// 3.接收请求和响应请求。


var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-type': 'text/plain;charset=utf8'
	});
	response.end('welcome you! jiangliansong~~将军');
}).listen(8888);
console.log('server start running');