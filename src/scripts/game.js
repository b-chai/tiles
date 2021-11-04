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
            playerTile.updateTile("red")
            this.moves++
            // incomplete function
            this.findReds()
            this.updateMoves()
        }

        button2.className = 'blue'
        button2.onclick = ()=>{
            playerTile.updateTile("blue")
            this.moves++
            // incomplete function
            this.findBlues()
            this.updateMoves()
        }

        button3.className = 'green'
        button3.onclick = ()=>{
            playerTile.updateTile("green")
            this.moves++
            this.updateMoves()
            // incomplete function
            this.changeColor()
        }

        button4.className = 'orange'
        button4.onclick = ()=>{
            playerTile.updateTile("orange")
            this.moves++
            this.updateMoves()
        }

        selector.appendChild(button1)
        selector.appendChild(button2)
        selector.appendChild(button3)
        selector.appendChild(button4)
    }

    updateMoves(){
        var moves = document.querySelector('.moves')
        const count = document.querySelector('.move-count')
        const create = document.createElement('div')
        create.className = 'move-count'
        
        count.parentNode.removeChild(count)
        create.appendChild(document.createTextNode(`Moves : ${this.moves}`))
        moves.appendChild(create)
    }

    findReds(){

        let allReds = []

        for (let i = 0 ; i < this.board.length ; i++){
            let row = this.board[i]
            for (let j = 0 ; j < row.length ; j++){
                let tile = this.board[i][j]
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
        return res;
    }

    changeColor(){
        // starting point
        let controlledArea = []
        for (let i = 0 ; i < this.board.length ; i++){
            let current = this.board[0]
            for (let j = 0 ; j < current.length ; j++){
                let tile = this.board[i][j]
                if(tile.player === true) controlledArea.push(tile)
            }
        }
        // check adjacent tiles
        // this.checkAdjacent(1,1)
        for (let i = 0 ; i < controlledArea.length; i++){
            let tile = controlledArea[i]
            let x = tile.pos[0]
            let y = tile.pos[1]
            this.checkAdjacent(x,y) // return array
        }
        // change tile
    }

    checkAdjacent(x,y){
        const col = this.board.length - 1;
        const row = this.board[0].length - 1;

        // return all adjacent tiles N-E-S-W
        // [N,E,S,W] = [0,1,2,3]

        let n = 0
        let e = 0
        let s = 0
        let w = 0

        if (x > 0) n = this.board[x-1][y];
        if (y < col) e = this.board[x][y+1];
        if (x < row) s = this.board[x+1][y];
        if (y > 0) w = this.board[x][y-1];

        const adjacent = [n,e,s,w]
        // let arr = []
        // for(let i = 0 ; i < adjacent.length; i++){
        //     if (adjacent[i].color === 'red'){
        //         arr.push(adjacent[i])
        //     }
        // }

        return adjacent
    }

    reset(){
        this.board = []
        this.moves = 0
        const game = document.querySelector(".game")
        game.parentNode.removeChild(game)
        this.createGame(10)
    }
}

export default Game