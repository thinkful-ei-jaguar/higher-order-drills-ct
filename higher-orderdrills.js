function repeat(fn,n) {
    for (let i = 0; i < n; i++) {
        fn(n[i], i);
    };
}
function hello() {
    console.log("Hello world!");
}
function goodbye() {
    console.log("Goodbye world!");
}
console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));