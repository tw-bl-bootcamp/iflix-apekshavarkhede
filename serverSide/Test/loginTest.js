var server = require('../server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');
chai.use(chaihttp);
var fs = require('fs');

describe('Given wrong email and  wrong Password when login', () => {
    it('will return status code 422', (done) => {
        let loginCredential = {
            email: "apeksha123@gmail.com",
            password: "a123"
        }
        chai.request(server)
            .post('/login')
            .send(loginCredential)
            .end((err, res) => {
                assert.equal(422, res.status);
                done();
            })
    })
})