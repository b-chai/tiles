class Tile{
    constructor(){
        const TILES = ['red','blue','green','orange']
        const randomColor = Math.floor(Math.random() * TILES.length)
        this.color = TILES[randomColor];
        this.player = false
    }

    randomTile(){
        let tile = document.createElement("div")
        tile.className = `tile ${this.color}`
        console.log(tile)
        return tile
    }
}

export default Tile