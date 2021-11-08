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

const instruction = document.querySelector('.lock')
instruction.addEventListener('click',()=>{
    const hidden = document.querySelector(('#instructions'))
    
    function toggle(){
        if (hidden.className === 'show'){
            hidden.className = 'hidden'
        }else{
            hidden.className = 'show'
        }
    }
    toggle()
})

const instruction2 = document.querySelector('.lock2')
instruction2.addEventListener('click',()=>{
    const hidden = document.querySelector(('#instructions'))
    
    function toggle(){
        if (hidden.className === 'show'){
            hidden.className = 'hidden'
        }else{
            hidden.className = 'show'
        }
    }
    toggle()
})

const instruction3 = document.querySelector('.lock3')
instruction3.addEventListener('click',()=>{
    const hidden = document.querySelector(('#instructions'))
    
    function toggle(){
        if (hidden.className === 'show'){
            hidden.className = 'hidden'
        }else{
            hidden.className = 'show'
        }
    }
    toggle()
})