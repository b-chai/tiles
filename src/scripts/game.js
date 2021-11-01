class Game{
    constructor(){

    }

    createGame(){
        const grid = document.querySelector('.grid')
        let newDiv = document.createElement('div')
        newDiv.className = "tile"
        const num = 5

        grid.appendChild(newDiv)
        for (let i = 0 ; i < num ; i++){
        }

        // document.getElementsByTagName('body').appendChild(grid)
    }
}

export default Game