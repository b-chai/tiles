class Tile{
    constructor(){
        const TILES = ['red','blue','green','orange']
        const randomColor = Math.floor(Math.random() * TILES.length)
        this.color = TILES[randomColor];
        this.player = false
    }

    playerTile(){
        this.player = true
        
        let tile = document.createElement("div")
        tile.className = `tile ${this.color}`
        return tile
    }

    randomTile(){
        let tile = document.createElement("div")
        tile.className = `tile ${this.color}`
        return tile
    }
}

export default Tile