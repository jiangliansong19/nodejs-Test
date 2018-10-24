url = require("url");
// mysql = require("mysql");
http = require("http");
fs = require("fs");

// function getConnection() {
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'xianqu'
//   });
//   return connection;
// }
var express = require("express");
var app = express();


// app.use(express.static('public/images/avatar'));

exports.changeInfo = function changeInfo(req, res, upload) {

  // var account = req.body.account;
  // var password = req.body.password;
  console.log("enter changeInfo+1");
  console.log(req.files); // 上传的文件信息

  var des_file = __dirname + "/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data) {
    fs.writeFile(des_file, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });

  // // var  sql = "select * from user where account='" + account + "'";
  // var connection = getConnection();
  // connection.connect();
  // var sql = 'select * from user where account=?';
  // var param = account;
  // connection.query(sql, param, function(err, result) {
  //   if (err) {
  //     console.log('[SELECT ERROR] - ', err.message);
  //     return;
  //   }

  //   var string = JSON.stringify(result[0]);
  //   var obj = JSON.parse(string);

  //   console.log('--------------------------SELECT----------------------------');
  //   console.log('result: ' + string);
  //   console.log('------------------------------------------------------------');

  //   if (account == obj.account) {
  //     if (password == obj.password) {
  //       response.end(string);
  //     } else {
  //       response.end("{'errorcode':100078,'message':'密码错误'}");
  //     }
  //   }
  //   response.end("{'errorcode':100094,'message':'账号不存在'}");
  // });

  // connection.end();
}