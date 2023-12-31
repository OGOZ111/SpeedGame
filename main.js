const gamestart = document.querySelector('startbutton')
const gameend = document.querySelector('endbutton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');
const message = document.querySelector('.message')



function soundplay() {
let soundmenu = new Audio('blipSelect.wav');
soundmenu.play();
}

function soundover() {
    let soundend = new Audio('mixkit-arcade-retro-game-over-213.wav')
    soundend.play()
}

function soundhit() {
    let soundboom = new Audio('explosion.wav')
    soundboom.play()

}


// declare global varials
let score = 0;
let timer; 
let pace = 1000;
let active = 0;
let rounds = 0;


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

soundhit()
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

    if (score <= 20) {message.textContent = ('Your score was ' + score + '!!  You have failed. Come back when you have improved')}
    if (score > 20) {message.textContent = ('Your score was ' + score + '!!  Some more practice is needed')}
    if (score > 50) {message.textContent = ('Your score was ' + score + '!!  IMPRESSIVE!. You are worthy ')}

}

function buttonswitch() {
    startbutton.classList.toggle('visible')
    endbutton.classList.toggle('visible')
}

const EndGame = () => {
    thankscreen()
    clearTimeout(timer)
    soundover()

}

const Xbutton = () => (
window.location.reload()
)




startbutton.addEventListener('click', startGame)
startbutton.addEventListener('click', soundplay)
startbutton.addEventListener('click', buttonswitch)
endbutton.addEventListener('click', EndGame)
closeButton.addEventListener('click', Xbutton)

document.addEventListener('click',toggleClass);

