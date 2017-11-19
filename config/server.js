var server = module.exports = {};

var supertest = require("supertest");
let environment = require('./environment')

server.api = supertest.agent(environment.jsonplaceholder)