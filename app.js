const form = document.querySelector(".form")
const inp = document.querySelector(".form input")
const collection = document.querySelector(".collection")

const DATA = JSON.parse(localStorage.getItem("data")) || []

function createList(data) {
    while (collection.firstChild) {
        collection.firstChild.remove()
    }

    data.forEach((item, index) => {
        let li = document.createElement("li")
        li.innerHTML = `
        <span>${item.title}</span>
        <button data-id="${index}">Delete</button>`
        collection.appendChild(li)
    });

    const deleteButtons = document.querySelectorAll(".collection button")
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-id")
            deleteTodoItem(index)
        })
    })
}

function deleteTodoItem(index) {
    DATA.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(DATA))
    createList(DATA)
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
