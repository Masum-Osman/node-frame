const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const API = 'http://localhost:9798'

chai.should();
chai.use(chaiHttp);

describe('TEST APIs', () => {
    describe("Test GET route/api/1/get_token", () => {
        it("It should return JWT token", (done) => {
            chai.request(API)
                .get("/api/1/get_token")
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object')
                    response.body.should.have.property('accessToken')
                    done();
                })
        })

        it("It should not return JWT token", (done) => {
            chai.request(API)
                .get("/api/1/token")
                .end((err, response) => {
                    response.should.not.have.status(201);
                    // response.body.should.not.be.a('object')
                    done();
                })
        })
    })
})