class Tile {
  constructor() {
    const TILES = ["red", "blue", "green", "orange"];
    const randomColor = Math.floor(Math.random() * TILES.length);

    this.color = TILES[randomColor];
    this.player = false;
    this.pos = [];
  }

  randomTile(x, y) {
    let tile = document.createElement("div");
    tile.className = `tile ${this.color} pos-${x}-${y}`;

    this.pos = [x, y];

    // starting position
    if (x === 0 && y == 0) {
      this.player = true;
      this.color = "black";
      tile.className = `tile black pos-${x}-${y}`;
    }
    return tile;
  }

  updateTile(color) {
    this.color = color;
    this.player = true;

    const list = ["red", "blue", "green", "orange", "black"];
    const currentTile = document.querySelector(
      `.pos-${this.pos[0]}-${this.pos[1]}`
    );

    for (let i = 0; i < list.length; i++) {
      let currentColor = list[i];
      currentTile.classList.remove(currentColor);
    }

    currentTile.classList.add(color);
  }
}

export default Tile;
