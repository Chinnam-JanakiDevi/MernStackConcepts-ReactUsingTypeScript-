var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("sum is ".concat(sum));
var calculateSum = function () {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var res = document.getElementById("result");
    var sum = parseInt(num1.value) + parseInt(num2.value);
    // res.innerText = `sum is ${sum.toString()}`
    res.innerText = sum.toString();
};
var num = "janaki";
num = 10;
var x = "janaki";
x = 20;
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));
