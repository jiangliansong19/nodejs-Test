
mysql = require("mysql");

function getConnection() {
	var connection = mysql.createConnection({
  		host     : 'localhost',
 		  user     : 'root',
  		password : 'root',
  		database : 'mytest'
	});
	return connection;
}

function testFind() {
	var connection = getConnection();
    connection.connect();

    var  sql = 'select * from websites';
	//查
	connection.query(sql,function (err,result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log('result:\n' + JSON.stringify(result[0]));
       console.log('------------------------------------------------------------\n\n');  
	});
 
	connection.end();
}

function testInsert() {
	var connection = getConnection();
    connection.connect();

	var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
	var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
	//增
	connection.query(addSql,addSqlParams,function (err,result) {
        if(err){
         	console.log('[INSERT ERROR] - ',err.message);
         	return;
        }        
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
	});
	connection.end();
}

function testDelete() {
	var connection = getConnection();
    connection.connect();

	var delSql = 'DELETE FROM websites where id=3';
	//删
	connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
	});
	connection.end();
}

testFind();
testInsert();
testDelete();