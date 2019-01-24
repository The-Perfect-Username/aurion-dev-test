const assert = require("assert");
const { getIssuer } = require("../lib/issuer.js");

describe("Get issuer", () => {
    
    it("should return VISA", () => {
        assert.equal(getIssuer(4111111111111111), "VISA");
    });
    
    it("should return VISA", () => {
        assert.equal(getIssuer(4111111111111), "VISA");
    });
    
    it("should return VISA", () => {
        assert.equal(getIssuer(4012888888881881), "VISA");
    });
    
    it("should return AMEX", () => {
        assert.equal(getIssuer(378282246310005), "AMEX");
    });
    
    it("should return Discover", () => {
        assert.equal(getIssuer(6011111111111117), "Discover");
    });
    
    it("should return Mastercard", () => {
        assert.equal(getIssuer(5105105105105100), "Mastercard");
    });
    
    it("should return Mastercard", () => {
        assert.equal(getIssuer(5105105105105106), "Mastercard");
    });
    
    it("should return Unknown", () => {
        assert.equal(getIssuer(9111111111111111), "Unknown");
    });
})