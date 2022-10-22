const board = document.getElementById('board')
const COLORS = ['#a423c4', '#5d1070', '#18c5db', '#2b6ced', '#2bed9c', '#dded2b', '#ed582b', '#c54fe3']
const SQUARES_NUMBER = 499

for (let i = 0; i <= SQUARES_NUMBER; ++i) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        const color = getRondomColors() 
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
    })

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = `0 0 2px #000`
    })

    board.append(square)
}

function getRondomColors() {
    const i = Math.floor(Math.random() * COLORS.length)
    return COLORS[i]
}