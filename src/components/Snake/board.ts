import { IPos } from "./shared";


export class Board {
    private board: Array<boolean>;
    height: number;
    width: number;
    food: IPos;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
        this.board = new Array<boolean>(this.flaten()).fill(false)
        this.food = { x: 0, y: 0 };
    }
    center(): IPos {
        return { x: this.width / 2, y: this.height / 2 } as IPos
    }
    changeState( x: number, y: number, state: boolean ) {
        const idx = y * this.width + x;
        this.board[idx] = state
    }
    flaten(): number {
        return this.width * this.height;
    }
    nextFood() {
        this.changeState(this.food.x, this.food.y, false);
        let occupied = true;
        let randIdx = 0;
        while ( occupied ) {
            randIdx = this.getRandom(0, this.flaten())
            occupied = this.board[randIdx];
        }
        this.food = this.toPos(randIdx)
    }
    toPos(idx: number): IPos {
        return { x: idx / this.width | 0, y: idx % this.width }
    }
    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
