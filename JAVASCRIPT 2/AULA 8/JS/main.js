const letters = new Set(["a", "b", "c"]);

const letters1 = new Set();
const a = "a";
const b = "b";
const c = "c";

letters1.add(a);
letters1.add(b);
letters1.add(c);

letters1.forEach(function(value){
    console.log(value);
})


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("apples"));


const fruits1 = new Map();
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits.get("bananas"));

fruits.forEach(function(value, key){
    console.log(key + " - " + value);
});
