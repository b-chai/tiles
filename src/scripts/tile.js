class Tile{
    constructor(){
        const TILES = ['red','blue','green','orange']
        const randomColor = Math.floor(Math.random() * TILES.length)
        
        this.color = TILES[randomColor];
        this.player = false
        this.pos = []
    }


    randomTile(x,y){
        let tile = document.createElement("div")
        tile.className = `tile ${this.color} pos-${x}-${y}`

        this.pos = [x,y]

        // starting position
        if(x === 0 && y == 0){
            this.player = true
        }
        console.log(tile)
        return tile
    }
}

export default Tile