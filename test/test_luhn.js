const assert = require("assert");
const {luhnCheck, doubleDigit} = require("../lib/luhn.js");

describe("Luhn Validation", () => {
    it("should return true for VISA", () => {
        assert.equal(luhnCheck(4111111111111111), true);
    });
    
    it("should return false for VISA", () => {
        assert.equal(luhnCheck(4111111111111), false);
    });
    
    it("should return true for VISA as a string", () => {
        assert.equal(luhnCheck("4111111111111111"), true);
    });

    it("should return false for VISA as a string", () => {
        assert.equal(luhnCheck("4111111111111"), false);
    });
    
    it("should return true for AMEX", () => {
        assert.equal(luhnCheck(378282246310005), true);
    });
    
    it("should return false for AMEX", () => {
        assert.equal(luhnCheck(378282246310015), false);
    });
    
    it("should return true for AMEX as a string", () => {
        assert.equal(luhnCheck("378282246310005"), true);
    });

    it("should return false for AMEX as a string", () => {
        assert.equal(luhnCheck("378282246310015"), false);
    });
    
    it("should return true for Discover", () => {
        assert.equal(luhnCheck(6011111111111117), true);
    });
    
    it("should return false for Discover", () => {
        assert.equal(luhnCheck(6011111111111127), false);
    });
    
    it("should return true for Discover as a string", () => {
        assert.equal(luhnCheck("6011111111111117"), true);
    });

    it("should return false for Discover as a string", () => {
        assert.equal(luhnCheck("6011111111111127"), false);
    });
    
    it("should return true for MasterCard", () => {
        assert.equal(luhnCheck(5105105105105100), true);
    });
    
    it("should return false for MasterCard", () => {
        assert.equal(luhnCheck(5105105105105106), false);
    });
    
    it("should return true for MasterCard as a string", () => {
        assert.equal(luhnCheck("5105105105105100"), true);
    });

    it("should return false for MasterCard as a string", () => {
        assert.equal(luhnCheck("5105105105105106"), false);
    });
    
    it("should return false for an unknown issuer", () => {
        assert.equal(luhnCheck(9111111111111111), false);
    });
    
    it("should return false for an unknown issuer as a string", () => {
        assert.equal(luhnCheck("9111111111111111"), false);
    });
    
    it("should return false for having alphanumeric characters", () => {
        assert.equal(luhnCheck("51051051051051ac"), false);
    });
    
    it("should return false for being an empty string", () => {
        assert.equal(luhnCheck(""), false);
    });
    
    it("should return false for being null", () => {
        assert.equal(luhnCheck(null), false);
    });
    
    it("should return false having no numbers", () => {
        assert.equal(luhnCheck("abcdefg"), false);
    });
    
    it("should return 0", () => {
        assert.equal(doubleDigit(0), 0);
    });
    
    it("should return 6", () => {
        assert.equal(doubleDigit(3), 6);
    });
    
    it("should return 5", () => {
        assert.equal(doubleDigit(7), 5);
    });
    
    it("should return 9", () => {
        assert.equal(doubleDigit(9), 9);
    });
    
});