import './less/index.less'

// Your code goes here!


window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Time to start'

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .them(text => {
            heading.textContent += text
        })
})

document.body.addEventListener(`click`, evt => {
    evt.target.classList.toggle('mirror')
})

document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = 'baloonsssssarecioning'
})

window.addEventListener('keydown', evt => {
    if (evt.key == 5){
        document.body.innerHTML = '<h1>POKEMOSNOINSNPHU&DEYHAIUt6</h1>'
    }
})

document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    console.log(`mouse is at ${clientX}, ${clientY}`)
})

const destinations = document.querySelectorAll('.destination')
for ( let destination of destinations){
destination.addEventListener(`mouseenter`, () => {
    destination.style.fontWeight = `bold`
})
destination.addEventListener('mouseleave', () => {
    destination.style.fontWeight = `initial`
})
}
}

