let button = document.getElementById("button")
button.addEventListener("click", (ev) => {
    // button.preventDefault();
    let input = document.getElementById("input").value.split(" ").filter((x) => (x !== "")).map(Number);
    let sum = document.getElementById("sum");
    let min = document.getElementById("min");
    let substr = document.getElementById("substr");

    let getSum = ((inp) => (inp.reduce((total, num) => total + num, 0)))
    let getMin = ((inp) => (Math.min(...inp)))
    let getMax = ((inp) => (Math.max(...inp)))
    let getSubstr = ((inp) => (getMax(inp) - getMin(inp)))

    sum.textContent = getSum(input).toString()
    min.textContent = getMin(input).toString()
    substr.textContent = getSubstr(input).toString()
})