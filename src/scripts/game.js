import Tile from './tile.js'

class Game{
    constructor(){

        this.board = []
        this.moves = 0
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
            currentTile.classList.remove("blue", "green", "orange", "black")
            currentTile.classList.add("red")
            this.moves++
            this.findReds()
        }

        button2.className = 'blue'
        button2.onclick = ()=>{
            playerTile.color = "blue"
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("red", "green", "orange", "black")
            currentTile.classList.add("blue")
            this.moves++
            this.findBlues()
        }

        button3.className = 'green'
        button3.onclick = ()=>{
            playerTile.color = "green"
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("blue", "red", "orange", "black")
            currentTile.classList.add("green")
            this.moves++
        }

        button4.className = 'orange'
        button4.onclick = ()=>{
            playerTile.color = "orange"
            const currentTile = document.querySelector(`.pos-${playerTile.pos[0]}-${playerTile.pos[1]}`)
            currentTile.classList.remove("blue", "green", "red", "black")
            currentTile.classList.add("orange")
            this.moves++
        }

        selector.appendChild(button1)
        selector.appendChild(button2)
        selector.appendChild(button3)
        selector.appendChild(button4)
    }

    findReds(){

        let allReds = []

        for (let i = 0 ; i < this.board.length ; i++){
            let row = this.board[i]
            for (let j = 0 ; j < row.length ; j++){
                let tile = this.board[i][j]
                console.log(tile.color)
                if (tile.color === 'red'){
                    allReds.push(tile)
                }
            }
        }
        
        console.log(allReds)
    }

    findBlues(){
        const m = this.board.length;
        const n = this.board[0].length;
        let res = 0;
        // start at 1 (land), search for a 0 or out of bounds in every direction (water)
        const dfs = (i, j) => {
            if (i<0 || i===m || j<0 || j===n || this.board[i][j].color ==='red' || this.board[i][j].color ==='green' || this.board[i][j].color==='orange') return;
            this.board[i][j]='0'; // choose
            dfs(i+1, j);
            dfs(i-1, j);
            dfs(i, j+1);
            dfs(i, j-1);
            // we don't unchoose bc we use these vals to avoid double counting later
        }
    
        for (let i=0;i<m;i++) {
            for (let j=0;j<n;j++) {
                if (this.board[i][j].color ==='blue') {
                    dfs(i,j);
                    res++; // after dfs, we have hit water and made an island. leave the flipped vals so we don't double count and increment res
                }
            }
        }
        console.log(res)
        return res;
    }
}

export default Game