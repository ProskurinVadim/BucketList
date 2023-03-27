import { itemSort } from "./sort";

describe("Testing asc sort for letters ", () => {

    it("Should return sorted array with asc sorted favorites on the top and rest sorted in the bottom ", () => {
        const array = [
            { name: "apple", amount: 10, favorites: true },
            { name: "bannana", amount: 13, favorites: false },
            { name: "pine", amount: 8, favorites: false },
            { name: "melone", amount: 4, favorites: true },
        ];

        const res = array.sort((a, b) => itemSort(a, b, "asc", "name"));

        expect(res).toStrictEqual([
            { name: "apple", amount: 10, favorites: true },
            { name: "melone", amount: 4, favorites: true },
            { name: "bannana", amount: 13, favorites: false },
            { name: "pine", amount: 8, favorites: false },
        ]);

    })

})

describe("Testing desc sort for numbers ", () => {

    it("Should return sorted array with desc sorted favorites on the top and rest sorted in the bottom ", () => {
        const array = [
            { name: "apple", amount: 10, favorites: true },
            { name: "bannana", amount: 13, favorites: false },
            { name: "pine", amount: 8, favorites: false },
            { name: "melone", amount: 4, favorites: true },
        ];

        const res = array.sort((a, b) => itemSort(a, b, "desc", "amount"));

        expect(res).toStrictEqual([
            { name: "apple", amount: 10, favorites: true },
            { name: "melone", amount: 4, favorites: true },
            { name: "bannana", amount: 13, favorites: false },
            { name: "pine", amount: 8, favorites: false },
        ]);

    })

})