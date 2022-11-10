let app = require('../app'),
express = require('express'),
assert = require('assert'),
request = require('supertest'),
chai = require('chai'),
chai_http = require('chai-http'),
should = chai.should();
chai.use(chai_http),
{expect} = require('chai');

describe('search', function()
{
    describe('localhost:4000/search/', function()
    {
        it('should have 200 success status response', function(done)
        {
            chai.
            request(app)
            .get('localhost:4000/search/')
            // .set('Accept', 'application/json')
            .end(function(e, res)
            {
                expect(res).to.have.status(200);
                if(e)
                    throw e;
            });
            // assert(1 == 1);
        })
    })
})