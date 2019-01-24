const request = require("supertest");
const app = require("../app.js");

describe("API request", () => {
    it("should return a 422 status because of missing body", (done) => {
        request(app)
            .post("/creditcard/number")
            .expect(422)
            .expect("POST body is empty or missing")
            .end(done);
    })
    
    it("should return a 422 status because of an empty body", (done) => {
        request(app)
            .post("/creditcard/number")
            .expect(422)
            .expect("POST body is empty or missing")
            .end(done);
    })
    
    it("should return a 422 status because of the parameter 'number' missing in the body", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"wrong": "data"})
            .expect(422)
            .expect("POST body is missing parameter 'number'")
            .end(done);
    })
    
    it("should return a 400 status because of the parameter 'number' is empty", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": null})
            .expect(400)
            .expect("Number is empty")
            .end(done);
    })
    
    it("should return a 200 status but issuer is unknown and is not luhn valid because the value is a string of letters", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "abcdefg"})
            .expect(200)
            .expect({
                "number": "abcdefg",
                "luhnValid": false,
                "issuer": "Unknown",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })

    it("should return a 200 status and issuer is Unknown", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "9111111111111111"})
            .expect(200)
            .expect({
                "number": "9111111111111111",
                "luhnValid": false,
                "issuer": "Unknown",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
   
    it("should return a 200 status and issuer is VISA but is not luhn valid", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "4111111111111"})
            .expect(200)
            .expect({
                "number": "4111111111111",
                "luhnValid": false,
                "issuer": "VISA",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
    
    it("should return a 200 status and issuer is VISA and is luhn valid", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "4111111111111111"})
            .expect(200)
            .expect({
                "number": "4111111111111111",
                "luhnValid": true,
                "issuer": "VISA",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
    
    it("should return a 200 status and issuer is AMEX and is luhn valid", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "378282246310005"})
            .expect(200)
            .expect({
                "number": "378282246310005",
                "luhnValid": true,
                "issuer": "AMEX",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
    
    it("should return a 200 status and issuer is Discover and is luhn valid", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "6011111111111117"})
            .expect(200)
            .expect({
                "number": "6011111111111117",
                "luhnValid": true,
                "issuer": "Discover",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
    
    it("should return a 200 status and issuer is Mastercard and is luhn valid", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "5105105105105100"})
            .expect(200)
            .expect({
                "number": "5105105105105100",
                "luhnValid": true,
                "issuer": "Mastercard",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
    
    it("should return a 200 status and issuer is Mastercard but is not luhn valid", (done) => {
        request(app)
            .post("/creditcard/number")
            .set('Accept', 'application/json')
            .send({"number": "5105105105105106"})
            .expect(200)
            .expect({
                "number": "5105105105105106",
                "luhnValid": false,
                "issuer": "Mastercard",
                "links": [{
                    "rel": "self",
                    "href": "http://localhost:3600/creditcard/checknumber"
                }]
            })
            .end(done);
    })
    
})