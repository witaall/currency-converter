import request from 'supertest';
import chai from 'chai';
import app from '../src';
import { StatusCodes } from 'http-status-codes';
import { ResponseMsg } from '../src/controllers/currency-conversion';

const expect = chai.expect;

describe('GET /api/v1/exchange-rates', () => {
  it('should return an error when converting from an unknown currency', (done) => {
    request(app)
      .get('/api/v1/currency-conversion')
      .query({ source: 'USDA', target: 'TWD', amount: 100 })
      .end((err, res) => {
        expect(res.statusCode).to.equal(StatusCodes.BAD_REQUEST);
        done();
      });
  });

  it('should return an error when amount is not provided', (done) => {
    request(app)
      .get('/api/v1/currency-conversion')
      .query({ source: 'USD', target: 'TWD' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(StatusCodes.BAD_REQUEST);
        done();
      });
  });

  it('should convert $1,525 USD to TWD', (done) => {
    request(app)
      .get('/api/v1/currency-conversion')
      .query({ source: 'USD', target: 'JPY', amount: '$1,525' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(StatusCodes.OK);
        expect(res.body).to.have.property('msg').equal(ResponseMsg.SUCCESS);
        expect(res.body).to.have.property('amount').equal('$170,496.53');
        done();
      });
  });
});