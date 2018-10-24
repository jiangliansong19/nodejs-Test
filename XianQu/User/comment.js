mysql = require("mysql");
url = require("url");

function getConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'xianqu'
	});
	return connection;
}

exports.comment = function insert(request, response) {
	var connection = getConnection()
	connection.connect()

	//获取参数
	var query = url.parse(request.url, true).query
	var user_id = query.user_id
	var date = query.date
	var content = query.content

	var addSql = 'INSERT INTO comment(user_id, date, content) VALUES(?,?,?)';
	var addSqlParams = [user_id, date, content];
	//增
	connection.query(addSql, addSqlParams, function(err, result) {
		if (err) {
			console.log('[INSERT ERROR] - ', err.message);
			return;
		}

		console.log('--------------------------INSERT----------------------------');     
		console.log('INSERT ID:', result);
		console.log('-----------------------------------------------------------------');

		response.end("success");
	});

	connection.end();
}

exports.history = function find(request, response) {

	var connection = getConnection();
	connection.connect();

	var query = url.parse(request.url, true).query;
	var user_id = query.user_id;

	var sql = 'select * from comment where user_id = "' + user_id + '";';
	connection.query(sql, function(err, rows){
		if (err) {
			console.log(err);
			return;
		}
		var result = '';
		result = JSON.stringify(rows);
		response.end('{"rows":' + result + '}');
	})
	connection.end();
}