const mysql = require('mysql');

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

db.connect(err => {
	if (err) {
		console.log(err);
	} else {
		console.log('Database Connect');
	}
});

module.exports = db;
