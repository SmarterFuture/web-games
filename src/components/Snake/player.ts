import { Board } from "./board";
import { IDir, Dir, SnakeSegment } from "./shared";


 export class Player {
    body: Array<SnakeSegment>;
    board: Board
    score: number;
    dir = Dir.Right;
    constructor (board: Board) {
        this.board = board;
        this.score = 0;

        const head: SnakeSegment = { ...this.board.center(), dir: this.dir._state };
        const tail: SnakeSegment = { x: head.x, y: head.y + 1, dir: this.dir._state };
        this.body = [head, tail]

        this.board.nextFood();        
    }
    move(): boolean {
        const newHead: SnakeSegment = {
            x: this.body[0].x + this.dir.dx,
            y: this.body[0].y + this.dir.dy,
            dir: this.dir._state
        };
        if ( this.has_died(newHead) ) {
            return true;
        }
        this.body.unshift(newHead);
        
        if ( newHead.x === this.board.food.x &&
             newHead.y === this.board.food.y ) {
            this.score += 1;
        } else {
            this.tailoff();
        }
        this.board.changeState(newHead.x, newHead.y, true);
        return false
    }
    change_dir(dir: IDir) {
        if ( ( dir.dx === this.dir.dx && dir.dx === 0 ) ||
            ( dir.dy === this.dir.dy && dir.dy === 0) ) {
            return
        }
        this.dir = dir;
        this.body[0].dir = dir._state;
    }
    private tailoff() {
        const { x, y }  = this.body.pop() || { x: 0, y: 0 };
        this.board.changeState(x, y, false);
    }
    private has_died(head: SnakeSegment) {
        for (let i = 4; i < this.body.length; i++ ) {
            const part = this.body[i];
            if ( head.x === part.x && head.y === part.y ) {
                return true;
            }
        }
        if ( head.x < 0 
            || head.x > this.board.width - 1
            || head.y < 0
            || head.y > this.board.height - 1 ) {
            return true
        }
        return false
    }
}


