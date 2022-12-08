let app = require('../app'),
express = require('express'),
assert = require('assert'),
request = require('supertest'),
chai = require('chai'),
{expect} = require('chai'),
chai_http = require('chai-http'),
should = chai.should();
chai.use(chai_http);

describe('groups test', function()
{
    describe('get /groups', function()
    {
        it('should have 200 success status response, res.body should be an array', function(done)
        {
            chai.
            request(app)
            .get('/groups')
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

    describe('', function()
    {
        let idx = Math.random().toString().slice(2);
        describe('post /groups/add', function()
        {
            it('should have 200 success status response, res.body should be a string', function(done)
            {
                chai.
                request(app)
                .post('/groups/add')
                .send({idx: idx})
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

        describe('get /groups/idx/:idx', function()
        {
            it('should have 200 success status response, res.body should be an array', function(done)
            {
                chai.
                request(app)
                .get('/groups/idx/:idx')
                .send({idx: idx})
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

        describe('delete /groups/idx/:idx', function()
        {
            it('should have 200 success status response, res.body should be a string', function(done)
            {
                chai
                .request(app)
                .delete('/groups/idx/:idx')
                .send({idx: idx})
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
    });   

    /* describe('delete /groups/remove', function()
    {
        it('should have 200 success status response, res.body should be a string', function(done)
        {
            chai.
            request(app)
            .delete('/groups/remove')
            .end(function(e, res)
            {
                if(e)
                    throw e;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('string');
                done();
            });
        })
    }); */
});