let controllerIndex = module.exports = {};
 
const chai = require('chai');
const should = chai.should();
const server = require('../config/server')

controllerIndex.activitiesListGet = function(statusCodeResponse){
    // Activities List - Get
    return function (done) {
        server.api.get(`/api/Activities`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.activitiesGet = function(statusCodeResponse){
    // Activities - Get Id
    return function (done) {
        server.api.get(`/api/Activities/1`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.activitiesDelete = function(statusCodeResponse){
    // Activities - Delete
    return function (done) {
        server.api.delete(`/api/Activities/100`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.activitiesPost = function(statusCodeResponse){
    // Activities - Post
    return function (done) {
        let createUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.post(`/api/Activities`)
        .send(createUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.activitiesPut = function(statusCodeResponse){
    // Activities - Put
    return function (done) {
        let updateUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.put(`/api/Activities/101`)
        .send(updateUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.authorsListGet = function(statusCodeResponse){
    // Activities List - Get
    return function (done) {
        server.api.get(`/api/Authors`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.authorsPost = function(statusCodeResponse){
    // Activities - Get Id
    return function (done) {
        server.api.get(`/api/Authors/1`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.authorsGet = function(statusCodeResponse){
    // Activities - Delete
    return function (done) {
        server.api.delete(`/api/Authors/100`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.authorsPut = function(statusCodeResponse){
    // Activities - Post
    return function (done) {
        let createUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.post(`/api/Authors`)
        .send(createUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.authorsDelete = function(statusCodeResponse){
    // Activities - Put
    return function (done) {
        let updateUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.put(`/api/Authors/101`)
        .send(updateUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.booksListGet = function(statusCodeResponse){
    // Activities List - Get
    return function (done) {
        server.api.get(`/api/Authors`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.booksPost = function(statusCodeResponse){
    // Activities - Get Id
    return function (done) {
        server.api.get(`/api/Books/1`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.booksGet = function(statusCodeResponse){
    // Activities - Delete
    return function (done) {
        server.api.delete(`/api/Books/100`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.booksPut = function(statusCodeResponse){
    // Activities - Post
    return function (done) {
        let createUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.post(`/api/Books`)
        .send(createUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.booksDelete = function(statusCodeResponse){
    // Activities - Put
    return function (done) {
        let updateUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.put(`/api/Books/101`)
        .send(updateUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.coverPhotosListGet = function(statusCodeResponse){
    // Activities List - Get
    return function (done) {
        server.api.get(`/api/CoverPhotos`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.coverPhotosPost = function(statusCodeResponse){
    // Activities - Get Id
    return function (done) {
        server.api.get(`/api/CoverPhotos/1`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.coverPhotosGet = function(statusCodeResponse){
    // Activities - Delete
    return function (done) {
        server.api.delete(`/api/CoverPhotos/100`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.coverPhotosPut = function(statusCodeResponse){
    // Activities - Post
    return function (done) {
        let createUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.post(`/api/CoverPhotos`)
        .send(createUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.coverPhotosDelete = function(statusCodeResponse){
    // Activities - Put
    return function (done) {
        let updateUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.put(`/api/CoverPhotos/101`)
        .send(updateUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.usersListGet = function(statusCodeResponse){
    // Users List - Get
    return function (done) {
        server.api.get(`/api/Users`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.usersGet = function(statusCodeResponse){
    // User - Get Id
    return function (done) {
        server.api.get(`/api/Users/1`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.usersDelete = function(statusCodeResponse){
    // Users - Delete
    return function (done) {
        server.api.delete(`/api/Users/100`)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.usersPost = function(statusCodeResponse){
    // Users - Post
    return function (done) {
        let createUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.post(`/api/Users`)
        .send(createUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}
controllerIndex.usersPut = function(statusCodeResponse){
    // Users - Put
    return function (done) {
        let updateUser = { "ID": 101, "UserName": "Harry", "Password": "test123" }
        server.api.put(`/api/Users/101`)
        .send(updateUser)
        .expect(res => {
            res.statusCode.should.equal(statusCodeResponse)
            res.status.should.equal(statusCodeResponse)
        })
        .end(function(err, res) {
            if(err){
                console.log(res.body)
            }
            else{
                done();
            }
        })
    }
}