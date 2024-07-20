function calc() {
    let num1 = Number(document.getElementById("num1").value)
    let opr = document.getElementById("opr").value
    let num2 = Number(document.getElementById("num2").value)
    let ans = document.getElementById("answer")

    if (opr == "+") {
        ans.innerHTML = num1 + num2;
    } else if (opr == "-") {
        ans.innerHTML = num1 - num2
    } else if (opr == "*") {
        ans.innerHTML = num1 * num2
    } else if (opr == "/") {
        ans.innerHTML = num1 / num2
    } else {
        ans.innerHTML = "Soryy u have entered an invalid operator"
    }
}