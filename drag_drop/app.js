const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

placeholders.forEach((element) => {
    element.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
    element.addEventListener('dragenter', (e) => {
        e.target.classList.add('hovered')
    })
    element.addEventListener('dragleave', (e) => {
        e.target.classList.remove('hovered')
    })
    element.addEventListener('drop', (e) => {
       e.target.append(item)
       e.target.classList.remove('hovered')
    })
})

item.addEventListener('dragstart', (e) => {
    e.target.classList.add('hold')
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)

})
item.addEventListener('dragend', (e) => {
    e.target.className = 'item'
})