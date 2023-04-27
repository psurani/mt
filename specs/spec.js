import { assert, expect } from "chai";
describe("Names and assertions", () => {
    let name = ["Jackson", "Rob", "Jack", "Wilson", "John"]
    it("Length of names list is 5", () => {
        let str = null
        str = name.length
        assert.equal(5, str, "strings length should be equal")
    });
    it("list contains Daniel", () => {
        expect(name).to.contains("Daniel")
    });
    it("Filter the name Jack and assert length ", () => {
        let n1 = name.filter(newname => newname.startsWith('Jack'))
        let lngth = n1.length
       // assert.equal(2, lngth, "length of a string are equal")
        expect(lngth).to.equal(2)
    });
});