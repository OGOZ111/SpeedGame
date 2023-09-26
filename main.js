const gamestart = document.querySelector('startbutton')
const gameend = document.querySelector('endbutton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');



// declare global varials
let score = 0;
let timer; 
let pace = 1000;
let active = 0;
let rounds = 0


const randNum = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randNum(0,3));

const clickCircle = (i) => {
    if (i !== active) {
       return EndGame()
    }


    console.log(i)
    rounds--
    score += 10
scoreDisplay.textContent = score    
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})

const enableEvents = () => {
    circles.forEach(circle => {
        circle.style.pointerEvents ="auto"
    })
}


const startGame = () => {

    if (rounds >= 3) {
        return EndGame()
    }

    enableEvents()

    const newActive = pickNumber(active) 

    circles[newActive].classList.toggle('active')
    circles[active].classList.remove('active')


    active = newActive
    timer = setTimeout(startGame, pace)

    pace -= 10
    rounds++



    function pickNumber(active) {
         const newActive = randNum(0,3)
         if (newActive !== active) {
            return newActive
         }


        return pickNumber(active)
    }

}


const thankscreen = () => {
    overlay.classList.toggle('visible')
}

const EndGame = () => {
    thankscreen()
    clearTimeout(timer)

}

const Xbutton = () => (
window.location.reload()
)


startbutton.addEventListener('click', startGame)
endbutton.addEventListener('click', EndGame)
closeButton.addEventListener('click', Xbutton)