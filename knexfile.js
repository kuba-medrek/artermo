const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
	client: 'pg',
	connection: 'postgres://<user>:<password>@<host>:<port>/<db_name>',
	migrations: {
		directory: path.join(BASE_PATH, 'migrations')
	},
	pool: {
		afterCreate: function(connection, callback) {
			connection.query('SET timezone = \'Europe/Warsaw\';', function(err) {
			callback(err, connection);
			});
		}
	 }
}