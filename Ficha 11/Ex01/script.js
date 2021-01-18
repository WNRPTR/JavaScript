function js_style() {
    let textElement = document.getElementById("text")

    textElement.style.fontSize = "14pt"
    textElement.style.fontFamily = "Comic Sans MS"
    textElement.style.color = "green"
}

let stylebutton = document.getElementById("jsstyle")
stylebutton.addEventListener("click", js_style)