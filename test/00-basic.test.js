const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../src/index');
const knex = require('../src/db/connection');


chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(chaiHttp);

const randomTemp = () => Math.random() * (-10 - 10) + 10;

describe('Add data', () => {
	describe('POST /api/v1/add - Send new data', () => Promise.all([
		it('should ACCEPT new tempreature', () => 
			chai.request(server)
				.post('/api/v1/add')
				.send({
					celcius: randomTemp()
				})
				.then(res => {
					res.status.should.equal(201);
					res.body.status.should.equal('OK');
					res.type.should.equal('application/json');
				})
		),
		it('should REJECT malformed JSON', () => 
			chai.request(server)
				.post('/api/v1/add')
				.send('BAD')
				.then(res => {
					res.status.should.equal(400);
					res.body.error.should.exist;
					res.type.should.equal('application/json');
				})
		),
		it('should REJECT withuot tempreature', () => 
			chai.request(server)
				.post('/api/v1/add')
				.send('BAD')
				.then(res => {
					res.status.should.equal(400);
					res.body.error.should.exist;
					res.type.should.equal('application/json');
				})
		),
		it('should REJECT string instead of tempreature', () => 
			chai.request(server)
				.post('/api/v1/add')
				.send({
					celcius: "7.34"
				})
				.then(res => {
					res.status.should.equal(400);
					res.body.error.should.exist;
					res.type.should.equal('application/json');
				})
		),
		it('should REJECT without body', () => 
			chai.request(server)
				.post('/api/v1/add')
				.send('BAD')
				.then(res => {
					res.status.should.equal(400);
					res.body.error.should.exist;
					res.type.should.equal('application/json');
				})
		)
	]));
});
describe('Get data', () => Promise.all([
	describe('GET /api/v1/data/all - Get all data', () => Promise.all([
		it('should RETURN all data', async () => {
			const tempreature = parseFloat(randomTemp().toFixed(4));
			await chai.request(server)
				.post('/api/v1/add')
				.send({
					celcius: tempreature
				});
			return chai.request(server)
				.get('/api/v1/data/all')
				.then(res => {
					res.status.should.equal(200);
					res.body.should.be.an('array').that.contains.something.like({celcius: tempreature});
					res.type.should.equal('application/json');
				}
		)})
	])),
	describe('GET /api/v1/data/latest - Get latest data', () => Promise.all([
		it('should RETURN 1 latest data point', () => 
			chai.request(server)
				.get('/api/v1/data/latest/1')
				.then(res => {
					res.status.should.equal(200);
					res.body.should.be.an('array').to.have.lengthOf(1)
					res.type.should.equal('application/json');
				}
		)),
		it('should REJECT negative number of data points', () => 
			chai.request(server)
				.get('/api/v1/data/latest/-1')
				.then(res => {
					res.status.should.equal(400);
					res.body.error.should.exist;
					res.type.should.equal('application/json');
				}
		))
	])),
	describe('GET /api/v1/data/all.csv - Get all data as csv file', () => Promise.all([
		it('should RETURN big csv', () => 
			chai.request(server)
				.get('/api/v1/data/all.csv')
				.then(res => {
					res.status.should.equal(200);
					res.type.should.equal('text/csv');
				}
		))
	]))
]));