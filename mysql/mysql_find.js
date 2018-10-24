var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'mytest', 
}); 

connection.connect();
 
var  sql = 'select * from websites';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log("result:" + JSON.stringify(result[0]));
       console.log(typeof(result));//输出对象类型
       // console.log("results: " + x);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();