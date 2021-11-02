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
                let tile = new Tile()

                let piece = tile.randomTile(i,j)
                seperator.appendChild(piece)
                rowArray.push(tile)
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
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("blue", "green", "orange")
            currentTile.classList.add("red")
            console.log(playerTile)
        }
        button2.className = 'blue'
        button2.onclick = ()=>{
            playerTile.color = "blue"
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("red", "green", "orange")
            currentTile.classList.add("blue")
            console.log(playerTile)
        }
        button3.className = 'green'
        button3.onclick = ()=>{
            playerTile.color = "green"
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("blue", "red", "orange")
            currentTile.classList.add("green")
            console.log(playerTile)
        }
        button4.className = 'orange'
        button4.onclick = ()=>{
            playerTile.color = "orange"
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("blue", "green", "red")
            currentTile.classList.add("orange")
            console.log(playerTile)
        }

        selector.appendChild(button1)
        selector.appendChild(button2)
        selector.appendChild(button3)
        selector.appendChild(button4)
    }
}

export default Game