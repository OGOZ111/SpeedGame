const gamestart = document.querySelector('startbutton')
const gameend = document.querySelector('endbutton')
const circles = document.querySelectorAll('.circle')

const clickCircle = () => {
    console.log('Circle was clicked')
}

circles.forEach((circle) => {
    circle.addEventListener('click', clickCircle)
})




const startGame = () => {
    console.log("game started")
}

const EndGame = () => {
    console.log("game over")
}



startbutton.addEventListener('click', startGame)
endbutton.addEventListener('click', EndGame)