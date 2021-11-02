import Game from './scripts/game'

const game = new Game()
document.addEventListener('DOMContentLoaded', ()=>{
    game.createGame(5)
    game.createButtons()
    console.log(game)
})