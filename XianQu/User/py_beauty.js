
mysql = require("mysql");
url = require("url");

function getConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'python'
	});
	return connection;
}


exports.beautyList = function find(request, response) {

	var connection = getConnection();
	connection.connect();

	var query = url.parse(request.url, true).query;
	var sql = 'select distinct title, image_url from beauty;';
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