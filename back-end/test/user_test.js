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

    describe('get /user', function () {
        it('should have 404 failure status response', function (done) {
            chai.
                request(app)
                .get('/users')
                .end(function (e, res) {
                    if (e)
                        throw e;
                    expect(res).to.have.status(404);
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

        describe('post /user/add', function () {
            it('should have 400 failure status response', function (done) {
                chai.
                    request(app)
                    .post('/user/add')
                    .send()
                    .end(function (e, res) {
                        if (e)
                            throw e;
                        expect(res).to.have.status(400);
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

        describe('post /user/add', function () {
            it('should have 200 success status response, res.body should be a string', function (done) {
                chai.
                request(app)
                .post('/user/add')
                .send
                ({
                    user_id: user_id
                })
                .end(function(e, res)
                {
                    if(e)
                        throw e;
                    expect(res.body).to.be.an('string');
                    done();
                });
            });
        });

        describe('delete /user/remove', function () {
            it('should have 200 success status response, res.body should be a string', function (done) {
                chai.
                request(app)
                .delete('/user/remove')
                .send()
                .end(function(e, res)
                {
                    if(e)
                        throw e;
                    expect(res.body).to.be.an('string');
                    done();
                });
            });
        });

        describe('get /user/print/:user_id', function () {
            it('should have 200 success status response, res.body should be a string', function (done) {
                chai.
                request(app)
                .get('/user/print/:user_id')
                .send({user_id:user_id})
                .end(function(e, res)
                {
                    if(e)
                        throw e;
                    expect(res.body).to.be.an('array');
                    done();
                });
            });
        });
        
        describe('post user/addgroup', function () {
            let group_idx = Math.random().toString().slice(2);
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .post('/user/addgroup')
                    .send({
                        user_id: user_id,
                        group_idx: group_idx,
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

        describe('delete /removegroup', function () {
            let group_idx = Math.random().toString().slice(2);
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .delete('/user/removegroup')
                    .send({
                        user_id: user_id,
                        group_idx: group_idx,
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

        describe('delete /remove_a_group_from_all_user', function () {
            let group_idx = Math.random().toString().slice(2);
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .delete('/user/remove_a_group_from_all_user')
                    .send({
                        user_id: user_id,
                        group_idx: group_idx,
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

        describe('delete /remove_all_group', function () {
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .delete('/user/remove_all_group')
                    .send()
                    .end(function (e, res) {
                        if (e)
                            throw e;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('string');
                        done();
                    });
            })
        });

        describe('post /switchgroup/:user_id', function () {
            it('should have 200 success status response, res.body should be a user string', function (done) {
                chai.
                    request(app)
                    .post('/user/switchgroup/:user_id')
                    .send({
                        user_id: user_id,
                        current_group: current_group,
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