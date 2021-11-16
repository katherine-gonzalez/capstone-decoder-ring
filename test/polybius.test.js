// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests for encoding a message", () => {
    it("should translate each letter to number pairs", () => {
        const actual = polybius("test encode");
        const expected = "44513444 513331434151"
        expect(actual).to.equal(expected)
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const actual = polybius("ij")
        const expected = "4242"
        expect(actual).to.equal(expected)
    });
    it("should leave spaces as is", () => {
        const actual = polybius("test encode")
        const expected = "44513444 513331434151"
        expect(actual).to.equal(expected)
    });
});

describe("polybius tests for decoding a message", () => {
    it("should translate each pair of numbers into a letter", () => {
        const actual = polybius("44513444 415131434151", false);
        const expected = "test decode"
        expect(actual).to.equal(expected)
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const actual = polybius("42", false)
        const expected = "(i/j)"
        expect(actual).to.equal(expected)
    });
    it("should leave spaces as is", () => {
        const actual = polybius("44513444 415131434151 25424432 11 12541313 3451334451333151", false)
        const expected = "test decode w(i/j)th a full sentence"
        expect(actual).to.equal(expected)
    });
    it("should return false if the length of all numbers (with or without spaces) is odd", () => {
        const actual = polybius("445134443", false);
        const expected = false
        expect(actual).to.eql(expected)
    })
});