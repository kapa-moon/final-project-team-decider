let app = require('../app'),
express = require('express'),
assert = require('assert'),
request = require('supertest'),
chai = require('chai'),
{expect} = require('chai'),
chai_http = require('chai-http'),
should = chai.should();
chai.use(chai_http);

describe('locations test', function()
{
    describe('get /locations', function()
    {
        it('should have 200 success status response, res.body should be an array', function(done)
        {
            chai.
            request(app)
            .get('/locations/')
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
        const group_id = Math.random().toString().slice(2);
        const location_id = Math.random().toString().slice(2);
        const name = Math.random().toString().slice(2);
        const location_address = Math.random().toString().slice(2);
        const longitude = Number(Math.floor(Math.random() * 10));
        const latitude = Number(Math.floor(Math.random() * 10));
        const type = Math.random().toString().slice(2);
        const category = Math.random().toString().slice(2);
        const distance = Number(Math.floor(Math.random() * 10));
        const image = Math.random().toString().slice(2);
        const vote = Number(Math.floor(Math.random() * 10));
        const newLocation = {
            group_id: group_id,
            location_id: location_id,
            name: name,
            location_address: location_address,
            longitude: longitude,
            latitude: latitude,
            type: type,
            category: category,
            distance: distance,
            image: image,
            vote: vote,
        };
        describe('post /locations/add', function()
        {
            it('should have 200 success status response, res.body should be a string', function(done)
            {
                chai.
                request(app)
                .post('/locations/add')
                .send(newLocation)
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

        describe('delete /locations/location_id', function()
        {
            it('should have 200 success status response, res.body should be a string', function(done)
            {
                chai.
                request(app)
                .delete('/locations/location_id/:location_id')
                .send({location_id: location_id})
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

        describe('get /locations/group_id/:group_id', function()
        {
            it('should have 200 success status response, res.body should be an array', function(done)
            {
                chai.
                request(app)
                .get('/locations/group_id/:group_id')
                .send({group_id: group_id})
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

        describe('get /locations/location_id/:location_id', function()
        {
            it('should have 200 success status response, res.body should be an array', function(done)
            {
                chai.
                request(app)
                .get('/locations/location_id/:location_id')
                .send({location_id: location_id})
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

        describe('post /locations/vote', function()
        {
            it('should have 200 success status response, res.body should be an string', function(done)
            {
                chai.
                request(app)
                .post('/locations/vote')
                .send({
                    group_id: group_id, location_id: location_id
                },{
                    $set: 1
                })
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

});