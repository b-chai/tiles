import Tile from './tile.js'
// import db from './firebase.js'

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
            this.updateMoves()
            this.updatePlayerTiles('red')
            this.updateClusters('red')
            this.gameOver()
        }

        button2.className = 'blue'
        button2.onclick = ()=>{
            playerTile.updateTile("blue")
            this.moves++
            this.updateMoves()
            this.updatePlayerTiles('blue')
            this.updateClusters('blue')
            this.gameOver()
        }

        button3.className = 'green'
        button3.onclick = ()=>{
            playerTile.updateTile("green")
            this.moves++
            this.updateMoves()
            this.updatePlayerTiles('green')
            this.updateClusters('green')
            this.gameOver()
        }

        button4.className = 'orange'
        button4.onclick = ()=>{
            playerTile.updateTile("orange")
            this.moves++
            this.updateMoves()
            this.updatePlayerTiles('orange')
            this.updateClusters('orange')
            this.gameOver()
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

    updateClusters(color){
        let row = 0
        let col = 0
        let piece = this.board[row][col]
        let tilesToBeChecked = [piece]
        let allColors = [piece]
        let visited = new Set().add(`${row}-${col}`)

        const boardMap = () => {
            let visitedMap = new Array(this.board.length);

            for (let i = 0; i < visitedMap.length; i++) {
                visitedMap[i] = new Array();
                for(let j = 0 ; j < visitedMap.length; j++){
                    visitedMap[i][j] = false
                }
            }

            return visitedMap
        }

        let falseMap = boardMap()

        const checkNeighbors = (row,col,colorChosen,visited) =>{
            let dirs = [[1,0],[0,1],[-1,0],[0,-1]];
            let neighbors = [];
            for (let i = 0 ; i <dirs.length ; i++){
                let newX = row + dirs[i][0]
                let newY = col + dirs[i][1]
                
                if (newX >= 0 && newX < this.board.length && newY >= 0 && newY < this.board[0].length) {
                    if (!visited[newX][newY]){
                        if (this.board[newX][newY].color === colorChosen){
                            let current = [newX,newY]
                            neighbors.push([newX,newY]);
                            visited[newX][newY] = true
                        }
                    }
                }
            }
            let tileArray = neighbors.map(pos => this.board[pos[0]][pos[1]])
            return tileArray
        }

        while (tilesToBeChecked.length){
            let tile = tilesToBeChecked.shift();
            let x = tile.pos[0]
            let y = tile.pos[1]
            visited.add(`${row}-${col}`)
            let neighbors = checkNeighbors(x,y,color,falseMap);
            allColors = allColors.concat(neighbors);
            tilesToBeChecked = tilesToBeChecked.concat(neighbors)
        }

        const result = (arr,color) => {
            for (let i = 0 ; i < arr.length ; i++){
                let currentTile = arr[i]
                currentTile.updateTile(color)
            }
        }

        return result(allColors,color)
    }

    updatePlayerTiles(color){
        for(let i = 0 ; i < this.board.length ; i++){
            let currentRow = this.board[i]
            for (let j = 0 ; j < currentRow.length ; j++){
                let currentTile = currentRow[j]
                if(currentTile.player === true){
                    currentTile.updateTile(color)
                }
            }
        }
    }

    checkWin(){
        for(let i = 0 ; i < this.board.length ; i++){
            let currentRow = this.board[i]
            for (let j = 0 ; j < currentRow.length ; j++){
                let currentTile = currentRow[j]
                if(currentTile.player === false){
                    return false
                }
            }
        }
        return true
    }

    gameOver(){
        let parent = document.querySelector('.insert')
        let hidden = document.querySelector('.hidden2')

        let oldScore = document.querySelector('.final-score')
        
        if (this.checkWin()){
            let score = document.createElement('div')
            score.className = 'final-score'

            // remove old score before adding new score
            if (oldScore) parent.removeChild(oldScore);

            parent.appendChild(score)
            score.appendChild(document.createTextNode(`Score : ${this.moves}`))
            hidden.className = "show2"
        }
    }

    reset(){
        this.moves = 0
        this.updateMoves()

        const game = document.querySelector(".divTable")
        const oldGame = document.querySelector(".grid")
        
        let newGame = document.createElement('div')
        newGame.className = 'grid'
        

        game.removeChild(oldGame)
        game.appendChild(newGame)
        this.createGame(14)
    }

    saveScore() {
        // Get name from input box
        let name = document.getElementsByClassName('name').value;
    
        // Make sure name has a value, if not send alert.
        if(name !== "") {
            // Add a new document in collection "scores"
            db.collection("scores").doc().set({
                name: name,
                score: this.moves
            })
            .then(function() {
                console.log("Document successfully written!");
                updateScores();
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        } else {
            alert('Please enter a name');
        }
    }

    updateScores() {
        // Clear current scores in our scoreboard
        document.getElementsByClassName('scoreboard').innerHTML = '<tr><th>Name</th><th>Score</th></tr>';
       
        // Get the top 5 scores from our scoreboard
        // Default ascending order
        db.collection("scores").orderBy("score").limit(5).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                document.getElementById('scoreboard').innerHTML += '<tr>' +
                '<td>' + doc.data().name + '</td>' +
                '<td>' + doc.data().score + '</td>' +
                '</tr>';
            })
        })


    }
}

export default Game