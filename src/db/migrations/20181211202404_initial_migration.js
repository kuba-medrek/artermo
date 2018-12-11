exports.up = function(knex, Promise) {
	return knex.schema.createTable('readings', (table) => {
		table.increments();
		table.float('celcius_tempreature').notNullable();
		table.float('light_intensity').notNullable();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP(0)'));
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('readings');
};
