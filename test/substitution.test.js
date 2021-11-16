// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests for error handling", () => {
    it("should return false if the given alphabet isn't 26 characters long", () => {
        const actual = substitution("test false", "qwerty")
        const expected = false
        expect(actual).to.equal(expected)
    });
    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("test dupes", "abcabcabcabcabcabcabcabcyz")
        const expected = false
        expect(actual).to.equal(expected)
    });
    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitution("test blank")
        const expected = false 
        expect(actual).to.equal(expected)
    });
}); 

describe("substitution tests for encoding", () => {
    it("should encode the given phrase based on the alphabet key given to the function", () => {
        const actual = substitution("test encode", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jmdj mfylqm"
        expect(actual).to.equal(expected)
    });
    it("should work with alphabet key with unique characters", () => {
        const actual = substitution("test abcde", "$wae&zrdxtfcygvuhbijnokmpl")
        const expected = "j&ij $wae&"
        expect(actual).to.equal(expected)

    }); 
    it("should preserve spaces", () => {
        const actual = substitution("test encode", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jmdj mfylqm"
        expect(actual).to.equal(expected)
    });

});

describe("substitution tests for decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
        const actual = substitution("jmdj qmylqm", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "test decode"
        expect(actual).to.equal(expected)
    });
    it("should work with alphabet key with unique characters", () => {
        const actual = substitution("j&ij iu&ax$ci", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "test specials"
        expect(actual).to.equal(expected)
    }); 
    it("should preserve spaces", () => {
        const actual = substitution("jmdj dnxymd clh qmylqm", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "test spaces for decode"
        expect(actual).to.equal(expected)
    });
})

//  xoyqmcgrukswaflnthdjpzibev