// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

//tests for error handling
describe("caesar tests for error handling", () => {
    it("should return false if the shift amount is 0", () => {
        const actual = caesar("katherine", 0)
        const expected = false
        expect(actual).to.eql(expected)
    });
    it("should return false if the shift amount is less than -25", () => {
        const actual = caesar("test false", -26)
        const expected = false
        expect(actual).to.eql(expected)
    });
    it("should return false if the shift amount is greater than 25", () => {
        const actual = caesar("test false", 26)
        const expected = false
        expect(actual).to.eql(expected)
    });
});

//tests for encoding
describe("caesar tests for encoding", () => {
    it("should encode a message by shifting the letters", () => {
        const actual = caesar("test encode", 3)
        const expected = "whvw hqfrgh"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces and other symbols as is", () => {
        const actual = caesar("test encode! 1234", 3)
        const expected = "whvw hqfrgh! 1234"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const actual = caesar("TEST ENCODE", 3)
        const expected = "whvw hqfrgh"
        expect(actual).to.equal(expected)
    })
    it("should properly wrap letters at the ends of the alphabet", () => {
        const actual = caesar("zyxabc", 3)
        const expected = "cbadef"
        expect(actual).to.equal(expected)
    })
    it("should allow for a negative shift that will shift to the left", () => {  
        const actual = caesar("test encode", -3)
        const expected = "qbpq bkzlab"
        expect(actual).to.equal(expected)
    })
});

//tests for decoding
describe("caesar tests for decoding", () => {
    it("should decode a message by shifting letters in the opposite direction", () => {
        const actual = caesar("whvw ghfrgh", 3, false)
        const expected = "test decode"
        expect(actual).to.equal(expected)
    });
    it("should leave spaces and symbols as is", () => {
        const actual = caesar("whvw !@#", 3, false)
        const expected = "test !@#"
        expect(actual).to.equal(expected)
    });
    it("should ignore capital letters", () => {
        const actual = caesar("WHVW GHFRGH", 3, false)
        const expected = "test decode"
        expect(actual).to.equal(expected)
    });
    it("should properly wrap letters at the ends of the alphabet", () => {
        const actual = caesar("whvw abc", 3, false)
        const expected = "test xyz"
        expect(actual).to.equal(expected)
    });
    it("should allow for a negative shift that will shift to the opposite direction", () => {
        const actual = caesar("qbpq abzlab", -3, false)
        const expected = "test decode"
        expect(actual).to.equal(expected)
    });
});