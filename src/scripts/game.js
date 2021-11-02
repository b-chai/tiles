import Tile from './tile.js'

class Game{
    constructor(){

        this.board = []
    }

    createGame(num){
        const grid = document.querySelector('.grid')
        const row = num
        const col = num

        let gridArray = []
        
        for (let i = 0 ; i < row ; i++){
            let seperator = document.createElement("div")
            seperator.className = "divTableRow"
            grid.appendChild(seperator)

            let rowArray = []
            for (let j = 0 ; j < col ; j++ ){
                const tile = new Tile()

                if (i === 0 && j === 0){
                    let startPiece = tile.playerTile()
                    seperator.appendChild(startPiece)
                    rowArray.push(tile)
                }else{
                    let piece = tile.randomTile()
                    seperator.appendChild(piece)
                    rowArray.push(tile)
                }
            }
            gridArray.push(rowArray)
        }
        this.board = gridArray
    }

    createButtons(){
        const selector = document.querySelector('.color-buttons')
        const playerTile = this.board[0][0]

        let button1 = document.createElement('button')
        let button2 = document.createElement('button')
        let button3 = document.createElement('button')
        let button4 = document.createElement('button')

        button1.className = 'red'
        button1.onclick = ()=>{
            playerTile.color = "red"
            console.log(playerTile)
        }
        button2.className = 'blue'
        button3.className = 'green'
        button4.className = 'orange'

        selector.appendChild(button1)
        selector.appendChild(button2)
        selector.appendChild(button3)
        selector.appendChild(button4)
    }
}

export default Game