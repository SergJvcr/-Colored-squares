const board = document.querySelector('#board')
const colors = ['#640CAB', '#C10087', '#B1F100', '#FFF500', '#FFF840', '#C7F83E', '#E038AD', '#9240D5']
const squares_number = 600

for (let i = 0; i < squares_number; i++) {    /* создание динамического элемента */
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function  removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

/* динамическая генерация повторяющихся и не повторяющихся элементов */