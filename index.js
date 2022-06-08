// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    let result = cats.slice()
    result.push(name)
    return result
}

function prependCat(name) {
    let result = [...cats]
    result.unshift(name)
    return result
}

function removeLastCat() {
    let result = [...cats]
    result.pop()
    return result
}

function removeFirstCat(){
    let result = cats.slice()
    result.shift()
    return result
}

