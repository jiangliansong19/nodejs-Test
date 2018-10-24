http = require("http");
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

function findAllWebsites() {
	var connection = getConnection();
    connection.connect();

    var  sql = 'select * from websites';
	connection.query(sql,function (err,result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
       console.log('--------------------------SELECT----------------------------');
       console.log('result:\n' + JSON.stringify(result));
       console.log('------------------------------------------------------------\n\n'); 
       // return JSON.stringify(result);
	});
 
	connection.end();
}

function start() {

	function onRequest(request, response) {
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end(findAllWebsites());
	}
	http.createServer(onRequest).listen(8889);
}

start();