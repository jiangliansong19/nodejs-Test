
function say(word) {
	console.log("程序执行结束" + word);
}
function execute(someFunc, value) {
	someFunc(value);
}


//阻塞执行代码
var fs = require("fs");
var data = fs.readFileSync("/Users/jiangliansong/Desktop/code.txt");
execute(say, "jiangliansong");


//非阻塞执行代码
fs.readFile("/Users/jiangliansong/Desktop/code.txt", function(err,data){
	if (err) return console.error(err);
	console.log(data.toString());
});
execute(function(word){console.log(word)},"hello")


