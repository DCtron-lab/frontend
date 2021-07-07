let mytodos = []
const ul = document.querySelector('.todos')
const add = document.querySelector('.add-btn')
const todo = document.querySelector('.todo')
const lis = document.querySelectorAll('.todos li')

const display = (todos = mytodos) => {
    if (mytodos.length === 0) {
        ul.innerHTML = ''
        return
    }
    let items = ''
    todos.forEach((todo, index) => {
        items += `<li data-index="${index}"> 
                    <p> ${todo} </p>
                    <div class="icons">
                        <button onclick="completedTodo(${index})">
                            <img src="./assets/completed.svg" alt="${index}">
                        </button>
                        <button onclick="editTodo(${index})">
                            <img src="./assets/edit.svg" alt="${index}">
                        </button>
                        <button onclick="deleteTodo(${index})">
                            <img src="./assets/delete-icon.svg" alt="${index}">
                        </button>
                    </div>
                  </li>`
    })
    ul.innerHTML = items
}

let localData = JSON.parse(localStorage.getItem('local'))
if (localData) {
    mytodos = localData
    display()
}

add.addEventListener('click', e => {
    if (todo.value === '') {
        window.alert("Please type a todo!!")
        return
    }
    mytodos.push(todo.value)
    todo.value = ''
    localStorage.setItem('local', JSON.stringify(mytodos))
    display()
})

const completedTodo = (index) => {
    const lis = document.querySelectorAll('.todos li')
    Array.from(lis).forEach((li, idx) => {
        if (idx === index) {
            if (li.style.textDecoration === 'line-through')
                li.style.textDecoration = 'none'
            else
                li.style.textDecoration = 'line-through'
                // li.toggleAttribute('textDecoration', 'line-through')
        }
    })

}

const editTodo = (index) => {
    const lis = document.querySelectorAll('.todos li')
    Array.from(lis).forEach((li, idx) => {
        let ok = false
        let p = li.children[0]
        console.log(p)
        if (idx === index) {
            p.setAttribute('contenteditable', 'true')
            ok = true
        }
        console.log(p.textContent)
        if (ok) {
            mytodos[index] = p.textContent
            localStorage.setItem('local', JSON.stringify(mytodos))
        }
    })
}


const deleteTodo = (index) => {
    mytodos.splice(index, 1)
    localStorage.setItem('local', JSON.stringify(mytodos))
    display()
}