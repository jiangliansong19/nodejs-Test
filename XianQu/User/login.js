url = require("url");
mysql = require("mysql");
http = require("http");

function getConnection() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'xianqu'
  });
  return connection;
}

exports.login = function login(request, response) {

  var account = request.body.account;
  console.log("account = " + account);
  var password = request.body.password;

  // var  sql = "select * from user where account='" + account + "'";
  var connection = getConnection();
  connection.connect();
  var sql = "select * from user where account='" + account + "';";
  connection.query(sql, function (err, result) {
    
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return response.send("{'errorcode':100058,'message':'数据库查询失败'}");
    }

    if (result.length && result[0]) {
      var string = JSON.stringify(result[0]);
      var obj = JSON.parse(string);
      console.log("loginString:" + string);
  
      if (account == obj.account && password == obj.password) {
        return response.send(string);
      } else {
        return response.send("{'errorcode':100078,'message':'密码错误'}");
      }
    }else {
      return response.send(JSON.stringify({'errorcode':100078,'message':'账号不存在'}));
    }


  });
}
