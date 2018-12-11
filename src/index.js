#!/usr/bin/env node
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const allRoutes = require('./routes')

const app = new Koa();
const PORT = 38003;

app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.log(`E: ${err.status} -> ${err.message || 'API fatal error'}`);
		ctx.status = err.status || 500;
		ctx.body = {
			  error: err.message || 'API fatal error'
		};
	}
})
app.use(bodyParser());
app.use(cors({
	origin: '*',
	methods: ['GET', 'POST']
}));
app.use(allRoutes.routes());

const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
