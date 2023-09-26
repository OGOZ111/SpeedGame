const gamestart = document.querySelector('startbutton')
const gameend = document.querySelector('endbutton')
const circles = document.querySelectorAll('.circle')

const clickCircle = (i) => {
    console.log('Circle was clicked', i)
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})




const startGame = () => {
    console.log("game started")
}

const EndGame = () => {
    console.log("game over")
}



startbutton.addEventListener('click', startGame)
endbutton.addEventListener('click', EndGame)