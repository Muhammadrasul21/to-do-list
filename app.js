const form = document.querySelector(".form")
const inp = document.querySelector(".form input")
const collection = document.querySelector(".collection")

const DATA = JSON.parse(localStorage.getItem("data")) || []

function createList(data) {
    while (collection.firstChild) {
        collection.firstChild.remove()
    }
    data.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = `
        <span>${item.title}</span>
         <button>Delete</button>`
        collection.appendChild(li)
    });
}

createList(DATA)

form.addEventListener("submit", e => {
    e.preventDefault()
    const value = inp.value
    let newTODO = {
        id: new Date().getTime(),
        title: value
    }
    DATA.push(newTODO);
    localStorage.setItem("data", JSON.stringify(DATA))
    inp.value = ""
    createList(DATA)
})