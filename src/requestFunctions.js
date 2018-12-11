module.exports = {
	getBody: (ctx) => {
		if(!ctx.request.hasOwnProperty('body'))
			ctx.throw(400, 'Missing body in request.');

		return ctx.request.body;
	},
	getParams: (ctx, key) => {
		if(!ctx.params.hasOwnProperty(key))
			ctx.throw(400, 'Missing param in request.');

		return ctx.params[key];
	}
}