const slider = document.querySelectorAll('.slide')
const conteiner = document.querySelector('.container')


conteiner.addEventListener('click', (e) => {
    clearActivaClass()
    e.target.classList.add('active')
    console.log(e.target)
})

function clearActivaClass() {
    slider.forEach(element => {
        element.classList.remove('active')
        console.log(element)
    })
} 