const knex = require('../connection');

module.exports = {
	getData: (limit) => knex('readings')
			.select('*')
			.orderBy('created_at', 'DESC')
			.limit(limit),

	addData: (data) => knex('readings')
		.insert(data),
}