let num1, num2

num1 = window.prompt("Input the First Integer", "0")
num2 = window.prompt("Input the First Integer", "0")

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log(
        "The larger one is" + num1 + "."
    )
}   else if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log(
        "The larger one is" + num2
    )
}   else {
    console.log("They both equal")
}

