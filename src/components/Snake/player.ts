import {Board} from "./board";

interface IDir {
    dx: number,
    dy: number
}

export const Dir = {
    Up: { dx: 0, dy: 1 } as IDir,
    Down: { dx: 0, dy: -1 } as IDir,
    Left: { dx: -1, dy: 0 } as IDir,
    Right: { dx: 1, dy: 0 } as IDir,
}

interface SnakeSegment {
    x: number,
    y: number,
    dir: IDir
};

 export class Player {
    body: Array<SnakeSegment>;
    board: Board
    score: number;
    dir = { dx: 1, dy: 0 } as IDir;
    constructor (board: Board) {
        this.board = board;
        this.score = 0;
        const head: SnakeSegment = { ...this.board.center(), dir: this.dir };
        const tail: SnakeSegment = { x: head.x, y: head.y + 1, dir: this.dir };
        this.body = [head, tail]
    }
    move() {
        const newHead: SnakeSegment = {
            x: this.body[0].x + this.dir.dx,
            y: this.body[0].y + this.dir.dy,
            dir: this.dir
        }
        this.body.unshift(newHead);
        this.score += 1;

        // TODO: implement growing, correctly, from this.board
        // TODO: implement writing occupancy to board
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


