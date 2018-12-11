const Router = require('koa-router');
const controller = require('./controller');
const {getParams} = require('./requestFunctions');

const router = new Router();
const BASE_URL = `/api/v1`;

router.post(`${BASE_URL}/add`, async (ctx) => {
	ctx.body = await controller.addData(ctx);
	ctx.status = 201;
});

router.get(`${BASE_URL}/data/latest/:limit`, async (ctx) => {
	ctx.body = await controller.getData(ctx, {limit:getParams(ctx, 'limit')});
	ctx.status = 200;
});

router.get(`${BASE_URL}/data/latest`, async (ctx) => {
	ctx.body = await controller.getData(ctx);
	ctx.status = 200;
});

router.get(`${BASE_URL}/data/all`, async (ctx) => {
	ctx.body = await controller.getData(ctx);
	ctx.status = 200;
});

router.get(`${BASE_URL}/data/all.csv`, async ctx => {
	ctx.body = await controller.getData(ctx, {format:'csv'})
	ctx.response.type = 'text/csv';
	ctx.status = 200;
});

module.exports = router;
