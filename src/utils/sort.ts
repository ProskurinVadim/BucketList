
const commonSort = (first: any, second: any, one: 1 | -1) => {
    return first === second ? 0 : first < second ? one : -one
}

const favoritesSort = (first: any, second: any, key: string, one: 1 | -1) => {
    if (first.favorites === second.favorites) {
        return commonSort(first[key], second[key], one)
    } else if (first.favorites) {
        return -1
    } else if (second.favorites) {
        return 1
    } else {
        return commonSort(first[key], second[key], one)
    }
}

export const itemSort = (first: any, second: any, direction: any, key: string) => {
    if (direction === "desc") {
        return favoritesSort(first, second, key, 1)
    } else {
        return favoritesSort(first, second, key, -1)
    }
}

