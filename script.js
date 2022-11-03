let countElement = document.getElementById("count-element")  
let count = 0

function increment() {
    count = count + 1
    countElement.innerText = count
}

let saveElement = document.getElementById("save-element")

function save() {
    let myNumbers = count + " - "
    let addText = saveElement.innerText
    saveElement.innerText = addText + myNumbers
    console.log(count)
}

