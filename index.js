// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// Add your functions and code here
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}

console.log(cats); // ["Milo", "Otis", "Garfield"]
console.log(destructivelyAppendCat("Ralph")); // ["Milo", "Otis", "Garfield", "Ralph"]
console.log(destructivelyPrependCat("Bob")); // ["Bob", "Milo", "Otis", "Garfield"]
console.log(destructivelyRemoveLastCat()); // ["Milo", "Otis"]
console.log(destructivelyRemoveFirstCat()); // ["Otis", "Garfield"]
console.log(appendCat("Broom")); // ["Milo", "Otis", "Garfield", "Broom"]
console.log(prependCat("Arnold")); // ["Arnold", "Milo", "Otis", "Garfield"]
console.log(removeLastCat()); // ["Milo", "Otis"]
console.log(removeFirstCat()); // ["Otis", "Garfield"]