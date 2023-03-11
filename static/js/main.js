// console.log("Введите последовательность чисел через пробел:");
// let numbers = [];
// let input = "";
// while (input !== "stop") {
//     input = prompt("Введите число или 'stop', чтобы закончить ввод:");
//     if (input !== "stop") {
//         numbers.push(Number(input));
//     }
// }
// console.log(numbers);
document.getElementById("button").addEventListener("click", function calculate() {
    let input = document.getElementById("input").value.split(" ").filter((x) => (x !== "")).map(Number);
    let sum = document.getElementById("sum");
    let min = document.getElementById("min");
    let substr = document.getElementById("substr");

    let getSum = ((inp) => (inp.reduce((total, num) => total + num, 0)))
    let getMin = ((inp) => (Math.min(...inp)))
    let getMax = ((inp) => (Math.max(...inp)))
    let getSubstr = ((inp) => (getMax(inp) - getMin(inp)))

    sum.innerText = getSum(input).toString()
    min.innerText = getMin(input).toString()
    substr.innerText = getSubstr(input).toString()

    return false;
})