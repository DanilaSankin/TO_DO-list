// Получение элементов
const inputElement = document.getElementById('to-do')
const createBtn = document.getElementById('create')
const clearBtn = document.getElementById('clear')
const listElement = document.getElementById('list')

listElement.innerHTML = ''

// Добавление обработчика событий
clearBtn.onclick = function () {
    listElement.innerHTML = ''
}

createBtn.onclick = function () {
    if (!inputElement.value) {
        return
    } else {
        listElement.insertAdjacentHTML('beforeend',
        `
            <li class="main__list-item">
                <span>${inputElement.value}</span>
            </li>
        `
        )
        inputElement.value = ''
    }
}