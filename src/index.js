import Game from './scripts/game'

const game = new Game()
document.addEventListener('DOMContentLoaded', ()=>{
    // hard = 10 medium = 8 easy = 5
    game.createGame(10)
    game.createButtons()
})