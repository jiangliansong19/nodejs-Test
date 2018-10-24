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

exports.register = function insert(request, response) {
	var connection = getConnection();
	connection.connect();

	//获取参数
	var query = url.parse(request.url, true).query;
	var account = query.account;
	var password = query.password;

	var addSql = 'INSERT INTO user(account,password) VALUES(?,?)';
	var addSqlParams = [account, password];
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