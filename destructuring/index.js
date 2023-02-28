let showProducts = function(id, ...products){
    console.log(id);
    console.log(products);
}

showProducts(10, "elma", "armut", "karpuz")

console.log(..."ABC", "D", ..."EFG", "H");

let populations = [10000, 20000, 30000]
let [small, medium, high] = populations
console.log(populations);
console.log(small);
console.log(medium);
console.log(high);

function someFunc([small1],param) {
    console.log(small1)
}

someFunc(populations)