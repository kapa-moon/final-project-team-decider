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

    describe('post /groups/addLocation', function()
    {
        it('should have 200 success status response, res.body should be a string', function(done)
        {
            chai.
            request(app)
            .post('/groups/addLocation')
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

    // INSTANCE OF LOCATION OBJECT
    // var entryToVote = {
    //     group_idx: curGroupID,
        
    //     location: {   
    //         group_id: curGroupID,
    //         location_id: props.location.location_id,
    //         vote: props.location.vote + 1
    //     }
    // }

    describe('post /groups/updateVote', function()
    {   
        let group_idx = Math.random().toString().slice(2);
        let location = {
            group_id: group_idx,
            vote: Math.floor(Math.random() * 10),
            location_id: Math.random().toString().slice(2)
        }
        it('should have 200 success status response, res.body should be a string', function(done)
        {
            chai.
            request(app)
            .post('/groups/updateVote')
            .send({
                group_idx,
                location,
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

    // const locationSelected = {
    //     group_idx: curGroupID,
    //     location: chosenLocation
    // }

    describe('post /groups/setSelectedLocation', function()
    { 
        let group_idx = Math.random().toString().slice(2);
        let location = {
            group_id: group_idx,
            vote: Math.floor(Math.random() * 10),
            location_id: Math.random().toString().slice(2)
        }
        it('should have 200 success status response, res.body should be a string', function(done)
        {
            chai.
            request(app)
            .post('/groups/setSelectedLocation')
            .send({
                group_idx,
                location,
            })
            .end(function(e, res)
            {
                if(e)
                    throw e;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('string');
                done();
            });
        });
    });

    describe('post /groups/deleteLocation', function()
    { 
        let group_idx = Math.random().toString().slice(2);
        let location = {
            group_id: group_idx,
            vote: Math.floor(Math.random() * 10),
            location_id: Math.random().toString().slice(2)
        }
        it('should have 200 success status response, res.body should be a string', function(done)
        {
            chai.
            request(app)
            .post('/groups/deleteLocation')
            .send({
                group_idx,
                location,
            })
            .end(function(e, res)
            {
                if(e)
                    throw e;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('string');
                done();
            });
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