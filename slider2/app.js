const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const mainSlideCount = mainSlide.children.length
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')


sidebar.style.top = `-${(mainSlideCount - 1) * 100}vh`
let activeSlideIndex = 0

upBtn.addEventListener('click', (e) => {
    changeSlide('up')
})

downBtn.addEventListener('click', (e) => {
    changeSlide('down')
})

const changeSlide = (dir) => {
   if (dir === "up") {
    activeSlideIndex++
    if (activeSlideIndex === mainSlideCount) {
        activeSlideIndex = 0
    }
   } else if (dir === "down") {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = mainSlideCount - 1
    }
   }
   const containerH = container.clientHeight
   mainSlide.style.transform = `translateY(-${activeSlideIndex * containerH}px)`
   sidebar.style.transform = `translateY(${activeSlideIndex * containerH}px)`
}