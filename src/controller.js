const queries = require('./db/queries/queries');
const {validator} = require('./validation/validator');
const schemas = require('./validation/schemas');
const {getBody} = require('./requestFunctions');
const json2csv = require('json2csv').parse;
const moment = require('moment-timezone');

module.exports = {
	addData: async ctx => {
		const newTempreature = getBody(ctx);

		await validator(ctx, newTempreature, schemas.TempreatureAdd);
		await queries.addData({
			celcius_tempreature: newTempreature.celcius,
			light_intensity: newTempreature.light
		});
		
		return {status: 'OK'};
	},
	getData: async (ctx, {limit=500, format='json'}={}) => {
		if(limit < 0)
			ctx.throw(400, `Limit should be > 0 but is ${limit}`);

		const tempreatures = (await queries.getData(limit)).map(item => {item.created_at = moment(item.created_at).tz('Europe/Warsaw').format(); return item;}).reverse();

		if(format === 'json') {
			return tempreatures;
		} else if (format === 'csv') {
			return json2csv(tempreatures);
		}

		ctx.throw(400, `${format} is not valid format (csv/json)`);
	},
}
