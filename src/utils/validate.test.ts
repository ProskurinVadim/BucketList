import { lettersValidator, numberValidator} from "./validate";

describe("Testing letters validator for letters", () => {

    it("Should return false for letters", () => {

        const res = lettersValidator("Letters");
        expect(res).toBe(false);

    })

})

describe("Testing letters validator for numbers", () => {

    it("Should return true for numbers", () => {

        const res = lettersValidator("1234");
        expect(res).toBe(true);

    })

})

describe("Testing number validator for letters", () => {

    it("Should return true for letters", () => {

        const res = numberValidator("Letters");
        expect(res).toBe(true);

    })

})

describe("Testing number validator for numbers", () => {

    it("Should return true for numbers", () => {

        const res = numberValidator("1234");
        expect(res).toBe(false);

    })

})