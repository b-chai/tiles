import Tile from './tile.js'

class Game{
    constructor(){

    }

    createGame(){
        const grid = document.querySelector('.grid')
        const row = 4
        const col = 4
        
        for (let i = 0 ; i < row ; i++){
            let seperator = document.createElement("div")
            seperator.className = "divTableRow"
            grid.appendChild(seperator)
            for (let j = 0 ; j < col ; j++ ){
                const tile = new Tile()
                seperator.appendChild(tile.randomTile())
            }
            
        }

    }
}

export default Game