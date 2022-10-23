const startBtn = document.querySelector('.start')
const timeList = document.querySelector('.time-list')
const displayTime = document.getElementById('time')
const board = document.getElementById('board')
const COLORS = ['#a423c4', '#5d1070', '#18c5db', '#2b6ced', '#2bed9c', '#dded2b', '#ed582b', '#c54fe3']
let time = 0
let score = 0

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    startBtn.closest('.screen').classList.add('up')
})

timeList.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.dataset.time)
        e.target.closest('.screen').classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (e) => {
     if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
     }
})

function startGame() {
    setTime(time)
    createRandomCircle()
    setInterval(() => {
        if (time <= 0) {
            overGame()
        } else {
            let current = --time
            if (current < 10) {
                current = '0' + current
            }
            setTime(current)
        }


    }, 1000)
}

function setTime(value) {
    displayTime.innerHTML = `00:${value}`
}

function overGame() {
    displayTime.parentElement.remove()
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    let size = getRandomNumber(20, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRondomColors()
    board.append(circle)
}

function getRandomNumber(max, min) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRondomColors() {
    const i = Math.floor(Math.random() * COLORS.length)
    return COLORS[i]
}