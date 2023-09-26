const gamestart = document.querySelector('startbutton')
const gameend = document.querySelector('endbutton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')


// declare global varials
let score = 0;
let timer; 
let pace = 1000;
let active = 0;



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
    const newActive = pickNumber(active) 

    circles[newActive].classList.toggle('active')
    circles[active].classList.remove('active')


    active = newActive
    timer = setTimeout(startGame, pace)
    pace -= 10



    function pickNumber(active) {
         const newActive = randNum(0,3)
         if (newActive !== active) {
            return newActive
         }


        return pickNumber(active)
    }

}

const EndGame = () => {


    clearTimeout(timer)
}



startbutton.addEventListener('click', startGame)
endbutton.addEventListener('click', EndGame)