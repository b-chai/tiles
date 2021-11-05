import Game from './scripts/game'

const game = new Game()
document.addEventListener('DOMContentLoaded', ()=>{
    // hard = 12 medium = 8 easy = 5
    game.createGame(14)
    game.createButtons()
})

const restart = document.querySelector(".restart")
restart.addEventListener('click', ()=>{
    game.reset()
})