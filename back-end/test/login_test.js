let app = require('../app'),
express = require('express'),
assert = require('assert'),
request = require('supertest'),
chai = require('chai'),
{expect} = require('chai'),
chai_http = require('chai-http'),
should = chai.should();
chai.use(chai_http);

describe('login test', function()
{
    describe('get /login/', function()
    {
        it('should have 200 success status response, res.body should be an array', function(done)
        {
            chai.
            request(app)
            .get('/login/')
            .end(function(e, res)
            {
                if(e)
                    throw e;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
        })
    });

});