const gamestart = document.querySelector('startbutton')
const gameend = document.querySelector('endbutton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')



let score = 0;
let timer; 



const randNum = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randNum(0,3));

const clickCircle = (i) => {
    console.log('Circle was clicked', i)
    score += 10
scoreDisplay.textContent = score    
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})




const startGame = () => {
    const newActive = pickNumber()

    timer = setTimeout(startGame, 1000)

    function pickNumber() {
         const newActive = randNum(0,3)
        return console.log(newActive)


    }



}

const EndGame = () => {
    console.log("game over")

    clearTimeout(timer)
}



startbutton.addEventListener('click', startGame)
endbutton.addEventListener('click', EndGame)