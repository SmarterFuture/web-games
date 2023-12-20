
enum SnakeAssets {
    Head = "#FFFFFF",
    Tail = "#FFFFFF",
    Empty = "#000000",
    Food = "#FF0000"
}

interface IDir {
    dx: number,
    dy: number
}

const Dir = {
    Up: { dx: 0, dy: 1 } as IDir,
    Down: { dx: 0, dy: -1 } as IDir,
    Left: { dx: -1, dy: 0 } as IDir,
    Right: { dx: 1, dy: 0 } as IDir,
}

interface Tile {
    x: number,
    y: number,
    color: SnakeAssets
};

class Snake {
    body: Array<Tile>;
    height: number;
    width: number;
    score: number;
    dir: IDir;
    constructor (height: number, width: number) {
        this.height = height;
        this.width = width;
        this.score = 0;
        const head: Tile = { x: width / 2, y: height / 2, color: SnakeAssets.Head };
        const tail: Tile = { x: width / 2 + 1, y: height / 2, color: SnakeAssets.Tail };
        this.body = [head, tail]
    }
    move() {
        const last_tail = this.body[this.body.length - 1];
        this.body.forEach( (tile) => {
            tile.x += this.dir[0];
            tile.y += this.dir[1]
        })
        this.body.push(last_tail);
        this.score += 1;
    }
    change_dir(dir: IDir) {
        if ( ( dir.dx === this.dir.dx && dir.dx === 0 ) ||
            ( dir.dy === this.dir.dy && dir.dy === 0) ) {
            return
        }
        this.dir = dir;
    }
    tailoff() {
        this.score -= 1;
        this.body.pop()
    }
    has_died() {
        const head = this.body[0];
        for (let i = 4; i < this.body.length; i++ ) {
            const part = this.body[i];
            if ( head.x === part.x && head.y === part.y ) {
                return true;
            }
        }
        if ( head.x < 0 || head.x > this.width || head.y < 0 || head.y > this.height ) {
            return true
        }
        return false
    }
}


