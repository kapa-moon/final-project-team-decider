let app = require('../app'),
express = require('express'),
assert = require('assert'),
request = require('supertest'),
chai = require('chai'),
{expect} = require('chai'),
chai_http = require('chai-http'),
should = chai.should();
chai.use(chai_http);

describe('search test', function()
{
    describe('get /search', function()
    {
        it('should have 200 success status response, res.body should be a string', function(done)
        {
            chai.
            request(app)
            .get('/search')
            .end(function(e, res)
            {
                if(e)
                    throw e;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('string');
                done();
            });
        })
    });

    describe('get /search/api/print_list', function()
    {
        it('should have 200 success status response, res.body should be an array', function(done)
        {
            chai.
            request(app)
            .get('/search/api/print_list')
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

    describe('get /search/api/get_list', function()
    {
        it('should have 200 success status response, res.body should be an array', function(done)
        {
            chai.
            request(app)
            .get('/search/api/get_list')
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

    describe('get /search/search', function()
    {
        it('should have 200 success status response, res.body should be an array', function(done)
        {
            chai.
            request(app)
            .get('/search/search')
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

    describe('post /search/search', function()
    {
        it('should have 200 success status response, res.body should be an object', function(done)
        {
            chai.
            request(app)
            .post('/search/search')
            .send(JSON.stringify('search_keyword'))
            .end(function(e, res)
            {
                if(e)
                    throw e;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                done();
            });
        })
    });
})