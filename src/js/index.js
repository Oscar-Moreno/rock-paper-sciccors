// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameItemsElement = document.getElementById('')
const userPickedElement = document.getElementById('')
const pcpickedElement = document.getElementById('')
const resultElement = document.getElementById('')
const pointsPcElement = document.getElementById('')
const gameResultsElement = document.getElementById('')
const pointsUserElement = document.getElementById('')
const pickedUserImageElement = document.getElementById('')
const pickedPcImageElement = document.getElementById('')
const playAgainElement = document.getElementById('')
const modalElement = document.getElementById('')
const buttonRulesElement = document.getElementById('')

const gameOptions = ['rock', 'paper', 'scissors']

let userSelection = null
let pcSelection = null
let userPoints = 0
let pcPoints = 0

const gameRules = {
    rock:{
        paper:'LOSE',
        scissors:'WIN'
    },
    paper:{
        rock:'WIN',
        scissors:'LOSE'
    },
    scissors:{
        rock:'LOSE',
        paper:'WIN'
    }
}

const checkWinner = ()=>{

    if(userSelection===pcSelection){
        console.log('TIE')
        return
    }


if(gameRules[userSelection][pcSelection]){
    console.log('WIN')
    userPoints++
}else{
    console.log('LOSE')
    pcPoints++
}
}

const generateRandomPlay =()=>{
    const randomNumber = Math.floor(Math.random()*gameOptions.length)
    pcSelection = gameOptions[randomNumber]
    checkWinner()
}

const setUserSelection = selection =>{
    userSelection = selection
    generateRandomPlay()
}

gameItemsElement.addEventListener('click', event =>{
    if(!event.target.classList.contains('game-item')) return
    setUserSelection(event.target.dataset.item)
})


