let app = require('../app'),
    express = require('express'),
    assert = require('assert'),
    request = require('supertest'),
    chai = require('chai'),
    { expect } = require('chai'),
    chai_http = require('chai-http'),
    should = chai.should();
chai.use(chai_http);

describe('user test', function () {
    describe('get /user', function () {
        it('should have 200 success status response, res.body should be an array', function (done) {
            chai.
                request(app)
                .get('/user')
                .end(function (e, res) {
                    if (e)
                        throw e;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        })
    });

    describe('', function () {
        let user_id = Math.random().toString().slice(2);
        let email = `${Math.random().toString().slice(2)}@gmail.com`;
        let hash = Math.random().toString().slice(2);
        let name = `${Math.random().toString().slice(2)}name`;
        let my_location = `${Math.random().toString().slice(2)}location`;
        let my_groups = [Math.random().toString().slice(2), Math.random().toString().slice(2)];
        let current_group = Math.random().toString().slice(2);
        let voted_locations = [Math.random().toString().slice(2), Math.random().toString().slice(2)];
        describe('post /user/add', function () {
            it('should have 200 success status response, res.body should be a string', function (done) {
                chai.
                    request(app)
                    .post('/user/add')
                    .send({
                        user_id: user_id,
                        email: email,
                        username: name,
                        hash: hash,
                        my_location: my_location,
                        my_groups: my_groups,
                        current_group: current_group,
                        voted_locations: voted_locations,
                    })
                    .end(function (e, res) {
                        if (e)
                            throw e;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('string');
                        done();
                    });
            })
        });

        describe('post /user/vote', function () {
            let location_id = Math.random().toString().slice(2);
            let user_id = Math.random().toString().slice(2);
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .post('/user/vote')
                    .send({
                        user_id: user_id,
                        location_id: location_id,
                    })
                    .end(function (e, res) {
                        if (e)
                            throw e;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('string');
                        done();
                    });
            })
        });

        describe('post /user/unvote', function () {
            let location_id = Math.random().toString().slice(2);
            let user_id = Math.random().toString().slice(2);
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .post('/user/unvote')
                    .send({
                        user_id: user_id,
                        location_id: location_id,
                    })
                    .end(function (e, res) {
                        if (e)
                            throw e;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('string');
                        done();
                    });
            })
        });
    });
});