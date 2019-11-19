const db = require('../config/db');

module.exports = {
	uploadUserImage: body => {
		return new Promise((resolve, reject) => {
			db.query('INSERT INTO users SET ?', body, (eror, hasil) => {
				if (!eror) {
					resolve(hasil);
				} else {
					reject(eror);
				}
			});
		});
	},
};
