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
                    done();
                })
        })

        it("It should not return JWT token", (done) => {
            chai.request(API)
                .post("/api/1/get_token")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })

        it("It should return Token Not Found", (done) => {
            let body = {
                product_code: "12MxM",
                user_id: 100,
                amount: 1954
            }
            chai.request(API)
                .post("/api/1/check_discount")
                .send(body)
                .end((err, response) => {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    done();
                })
        })

        it("It should return Token Not Found", (done) => {
            let body = {
                product_code: "12MxM",
                user_id: 100,
                amount: 1954
            }
            chai.request(API)
                .get("/api/1/check_discount")
                .send(body)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.be.a('object');
                    done();
                })
        })

        it("It should return amount", (done) => {
            let body = {
                product_code: "12MM",
                user_id: 100,
                amount: 1954
            }
            let header = {
                authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxIiwidXNlclR5cGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiTWFzdW0gT3NtYW4iLCJwaG9uZSI6IjAxNjg2MTYzMzIzIiwidGVhbSI6ImRldiIsInJlZnJlc2hLZXkiOiIrNkVLYWNPcmgvNkVETC92VFFwdTlnPT0iLCJpYXQiOjE2MjkzNTY1OTZ9.5pH0uL6Ivk1PRrvKifwJ2afqxn74eEb6w2KeyOxJL9Q"
            }
            chai.request(API)
                .post("/api/1/check_discount")
                .send(body)
                .set(header)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('status');
                    done();
                })
        })
    })
})