const fruits = ["orange", "apple", "banana", ""];

function filterByLength(array) {
    array.sort(function(a, b){return b.length - a.length});
    console.log(JSON.stringify(array, null, '\t'));
}

filterByLength(fruits);