import Game from './scripts/game'

const game = new Game()
document.addEventListener('DOMContentLoaded', ()=>{
    console.log("loaded")
    game.createGame()
})